const { gql } = require('apollo-server');
module.exports = gql`
input EnderecoInput {
  id: ID!
  rua: String!
  numero: String!
  bairro: String!
  cidade: String!
  estado: String!
  pais: String!
}
`