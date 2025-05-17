const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    firstName: String!
    lastName: String!
    email: String!
  }

  type Query {
    hello: String!
    randomNumber: Int!
    queryUsers: [User]!
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!): User!
  }
`;

const users = [
  {
    firstName: "Aldisar",
    lastName: "Gibran",
    email: "aldisarg@gmail.com",
  },
];

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    randomNumber: () => Math.round(Math.random() * 10),
    queryUsers: () => users,
  },

  Mutation: {
    addUser: (parent, args) => {
      users.push(args);
      return args;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen({ port: 8080 })
  .then(({ url }) => console.log(`GraphQL server running at ${url}`));
