const { request, response } = require('express');
const express = require('express');
const routes=require('./routes');

const app = express();
app.use(express.json());
// aqui chamo as rotas ou funcionalidades
    app.use(routes);

app.listen(3333);