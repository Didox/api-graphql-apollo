const { gql } = require('apollo-server');
module.exports = gql`
input ClienteInput {
  nome: String!
  telefone: String!
  enderecos: [EnderecoInput]
}
`