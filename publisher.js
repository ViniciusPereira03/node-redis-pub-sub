const express = require('express');
const app = express();
const queue = require('./queue');

app.use(express.json());

const router = express.Router();

router.post('/pedido', (req, res) => {
    const novoPedido = req.body;
    queue.publish("pedidos", novoPedido);
    res.json({
        message: 'Pedido enviado com sucesso!'
    });
});

app.use('/', router);
app.listen(3000, () => {
    console.log('Publisher rodando na porta 3000');
});
