const clientes = require("../../db/clientes");

module.exports = {
    clientes: () => {
      return clientes;
    },
    clientesPorId: (parent, args) => {
      return clientes.find(c => Number(c.id) === Number(args.id));
    },
    clientesPorNomeCidade: (parent, args) => {
      return clientes.filter(c => {
          let nomeValido = c.nome.indexOf(args.nome) !== -1;
          let enderecoValido = c.enderecos.find(e => e.cidade.indexOf(args.cidade) !== -1) !== null;
          return nomeValido && enderecoValido;
      });
    }
  }