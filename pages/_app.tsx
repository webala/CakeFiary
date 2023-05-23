import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "animate.css/animate.min.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
	return (
      <QueryClientProvider client={queryClient}>
         <ChakraProvider>
            <Component {...pageProps} />
         </ChakraProvider>
      </QueryClientProvider>
   );
}
