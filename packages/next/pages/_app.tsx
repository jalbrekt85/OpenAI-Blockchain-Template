import type { AppProps } from "next/app";
import { Web3ReactProvider } from "@web3-react/core";
import { Provider, Web3Provider } from "@ethersproject/providers";
import { ApolloProvider } from "@apollo/client";
import "../styles/globals.scss";
import { UserContextProvider } from "../context/UserContext";
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'


const getLibrary = (provider: Provider): Web3Provider => {
  return new Web3Provider(provider as any); // this will vary according to whether you use e.g. ethers or web3.js
};

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
    <Web3ReactProvider getLibrary={getLibrary}>
        <UserContextProvider>
            <Component {...pageProps} />
        </UserContextProvider>
    </Web3ReactProvider>
    </ChakraProvider>
  );
};

export default MyApp;
