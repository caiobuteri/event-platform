import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl61c4hjv4qq901utcfxh6825/master",
  cache: new InMemoryCache()
})