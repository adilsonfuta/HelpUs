const { request, response } = require('express');
const express = require('express');
const cors=require('cors');
const routes=require('./routes');

const app = express();

// app.use(cors({
//     origin:'http://localhost:3000'
// }));

app.use(cors());
app.use(express.json());
// aqui chamo as ficheiro de routes root
app.use(routes);

app.listen(3333);