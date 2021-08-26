import {
  Text,
  Spinner,
  Button,
  Textarea,
  SkeletonText,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ethers } from "ethers";
import { useUser } from "../context/UserContext";
import OpenAI from "../abis/contracts/Consumer.json";
import { Container } from "../components/Container";

const RequestForm: React.FC = () => {
  const contractAddress = "0xB42Bfe90a37adFBaa0ADf6F4a08361cB9b2cfa23";

  const user = useUser();
  const [result, setResult] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const [resize] = useState("vertical");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  async function getResult() {
    const contract = new ethers.Contract(
      contractAddress,
      OpenAI.abi,
      user.provider.getSigner()
    );
    const result = await contract.response();
    setResult(result);
    setUserPrompt("");
    setIsLoading(false);
    const balance = await user.provider.getBalance(contractAddress);
  }

  async function requestPrompt() {
    if (userPrompt === "") {
      toast({
        title: "Empty Prompt",
        description: "Enter a prompt",
        status: "error",
        duration: 7000,
        isClosable: true,
      });
    } else {
      const contract = new ethers.Contract(
        contractAddress,
        OpenAI.abi,
        user.provider.getSigner()
      );
      const fee = await contract.fee();
      console.log(ethers.utils.formatUnits(fee).toString());
      contract.on("RequestFulfilled", () => getResult());
      await contract.requestBytes(userPrompt, {
        value: fee,
      });
      toast({
        title: "Request GPT-3",
        description: "Your Transaction is pending",
        status: "info",
        duration: 9000,
        isClosable: true,
      });
      setIsLoading(true);
    }
  }

  function ShowButton() {
    if (!isLoading) {
      return (
        <Button
          mt={4}
          onClick={requestPrompt}
          borderRadius="md"
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          color="white"
          px={4}
          h={8}
        >
          Submit
        </Button>
      );
    }
    return <Spinner size="xl" mt={4} />;
  }

  return (
    <Container>
      <Textarea
        maxW="sm"
        borderWidth="3px"
        borderRadius="lg"
        overflow="hidden"
        p="3"
        fontWeight="semibold"
        variant="outline"
        onChange={(e) => setUserPrompt(e.target.value)}
        value={userPrompt}
        resize={resize}
        mt={4}
      />
      <ShowButton />
      <Text mt={4} fontSize="xl">
        GPT-3 Response:{" "}
      </Text>
      <SkeletonText
        isLoaded={!isLoading}
        noOfLines={4}
        spacing="4"
        startColor="pink.500"
        endColor="orange.500"
        height="50px"
        width="400px"
        padding="3"
        mt={3}
      >
        <Text mt={1} fontSize="xl">
          {result}
        </Text>
      </SkeletonText>
    </Container>
  );
};

export default RequestForm;
