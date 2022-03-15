import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://31.220.52.62:1350/graphql",
    cache: new InMemoryCache(),
});

export default client;