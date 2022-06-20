require('./database/mongodb');
const produtoRouter = require('./routes/produto_router');
const pedidoRouter = require('./routes/pedido_router');
const despesaRouter = require('./routes/despesa_router');
const clienteRouter = require('./routes/cliente_router');

//imports
const exp = require("constants");
const express = require("express");
const morgan = require("morgan");
const cors = require('cors');

//configurações
const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({'extended': true}));
app.use(express.json());
app.use(cors())
app.use('/produtos', produtoRouter);
app.use('/pedidos', pedidoRouter);
app.use('/despesas', despesaRouter);
app.use('/clientes', clienteRouter);


//métodos http
app.get('/', function(req, res) {
    res.send("Servidor respondeu...");
});


//iniciar servidor
app.listen(3000, function(){
    console.log("Servidor rodando em localhost:3000");
});
