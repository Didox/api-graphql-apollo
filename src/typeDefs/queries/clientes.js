const { gql } = require('apollo-server');
module.exports = gql`
type Query {
  clientes: [Cliente!]!
  clientesPorId(id: ID!): Cliente
  clientesPorNomeCidade(nome: String!, cidade: String!): [Cliente!]
}
`