const ClientesQueries = require("./queries/clientes.queries");
const ClientesMutations = require("./mutations/clientes.mutations");

module.exports = {
    Query: ClientesQueries,
    Mutation: ClientesMutations
}