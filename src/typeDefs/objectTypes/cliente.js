const { gql } = require('apollo-server');
module.exports = gql`
type Cliente {
  id: ID!
  nome: String!
  telefone: String
  enderecos: [Endereco!]!
}
`