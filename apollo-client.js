import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://192.101.68.28:1350/graphql",
    cache: new InMemoryCache(),
});

export default client;
