const { gql } = require('apollo-server');
module.exports = gql`
type Mutation {
  adicionarCliente(input: ClienteInput!): Cliente
  excluirClientePorId(id: ID!): Cliente
}
`;