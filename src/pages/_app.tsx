import Users from '../components/users'
import '@/styles/globals.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// @ts-nocheck
/** @jsxImportSource @emotion/react */
// @jsxImportSource @emotion/react

const queryClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});


export default function App() {
  return (
    <ApolloProvider client={queryClient}>
      <Users />
    </ApolloProvider>
  )
}
