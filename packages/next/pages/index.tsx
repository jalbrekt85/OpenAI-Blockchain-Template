import RequestForm from "../components/RequestForm";
import { Text } from "@chakra-ui/react";
import { Container } from "../components/Container";
import Header from "../components/Header";
import { ethers } from "ethers";
import { useUser } from "../context/UserContext";
import useETHBalance from "../hooks/useETHBalance";
import useNetwork from "../hooks/useNetwork";

const NewHome: React.FC = () => {
  const user = useUser();
  const [userBalance] = useETHBalance(user);
  const [network] = useNetwork(user);

  return (
    <div>
      <Header
        account={user ? user.address : "None"}
        network={network}
        balance={ethers.utils.formatUnits(userBalance).toString()}
      />

      <Container height="100vh">
        <Text
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Welcome
        </Text>
        <RequestForm />
      </Container>
    </div>
  );
};

export default NewHome;
