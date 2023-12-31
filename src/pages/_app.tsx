import React, { FC } from "react";
import '@/styles/globals.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Navbar from "@/components/navbar";
import type { AppProps } from "next/app";
import { ProductProvider } from "@/context/ProductContext";
import { CartProvider } from "@/context/CartContext";
import { UserProvider } from "@/context/UserContext";

// @ts-nocheck
/** @jsxImportSource @emotion/react */
// @jsxImportSource @emotion/react

const queryClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
  credentials: 'include',
});

const MyApp: FC<AppProps> = ({ Component, pageProps }: any) => {
  return (
    <ApolloProvider client={queryClient}>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </ApolloProvider >
  );
}
export default MyApp;