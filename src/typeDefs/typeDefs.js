const typeDefsClienteInput = require("./inputObjectTypes/cliente");
const typeDefsEnderecoInput = require("./inputObjectTypes/endereco");

const typeDefsCliente = require("./objectTypes/cliente");
const typeDefsEndereco = require("./objectTypes/endereco");

const typeDefsClienteMutations = require("./mutations/clientes");
const typeDefsClienteQueries = require("./queries/clientes");

module.exports = [
  typeDefsClienteInput,
  typeDefsEnderecoInput,
  typeDefsCliente,
  typeDefsEndereco,
  typeDefsClienteMutations,
  typeDefsClienteQueries
]