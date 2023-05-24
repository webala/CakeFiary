import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "animate.css/animate.min.css";
import { QueryClient, QueryClientProvider } from "react-query";
import {Provider} from 'react-redux'
import store, { persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
	return (
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
               <ChakraProvider>
                  <Component {...pageProps} />
               </ChakraProvider>
            </QueryClientProvider>
         </PersistGate>
      </Provider>
   );
}
