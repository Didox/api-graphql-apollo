const { ApolloServer } = require('apollo-server');
const typeDefsCombinados = require('./typeDefs/typeDefs');
const resolvers = require("./resolvers/resolvers");
const server = new ApolloServer({ typeDefs: typeDefsCombinados, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
