console.log("Subscriber rodando...");
const queue = require('./queue');

queue.subscribe('pedidos', (pedido) => {
    console.log("Novo pedido recebido:");
    console.log(pedido);
    // Aqui você pode adicionar a lógica para processar o pedido recebido
});
