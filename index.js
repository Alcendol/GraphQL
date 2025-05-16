const {ApolloServer, gql} = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String!
    randomNumber: Int!
  }
`
const resolvers = {
  Query: {
    hello: () => "Hello world!",
    randomNumber: () => Math.round(Math.random()*10),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({port:8080}).then(({ url}) => console.log(`GraphQL server running at ${url}`));

