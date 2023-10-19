const clientes = require("../../db/clientes");

module.exports = {
    adicionarCliente: (_, { input }) => {
      const novoCliente = {
        id: clientes.length + 1,
        nome: input.nome,
        telefone: input.telefone,
        enderecos: input.enderecos
      };
      clientes.push(novoCliente);
      return novoCliente;
    },
    excluirClientePorId: (_, { id }) => {
        const indice = clientes.findIndex(c => Number(c.id) == Number(id));
        if(indice !== -1){
            const [clienteDeletado] = clientes.splice(indice, 1);
            return clienteDeletado
        }

        throw new Error(`O cliente de id ${id} não foi encontrado`);
    }
}