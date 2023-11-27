import React, { FC } from "react";
import '@/styles/globals.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Navbar from "@/components/navbar";
import type { AppProps } from "next/app";
import { ProductProvider } from "@/context/ProductContext";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";

// @ts-nocheck
/** @jsxImportSource @emotion/react */
// @jsxImportSource @emotion/react

const queryClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

const MyApp: FC<AppProps> = ({ Component, pageProps }: any) => {
  return (
    <ApolloProvider client={queryClient}>
      <ProductProvider>
        <ShoppingCartProvider>
          <Component {...pageProps} />
        </ShoppingCartProvider>
      </ProductProvider>
    </ApolloProvider >
  );
}
export default MyApp;