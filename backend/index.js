const { request, response } = require('express');
const express = require('express');
const app = express();

app.get('/', (request, response) => {
    // return response.send("ola mundo");
    return response.json(
        {
            texto: 'ola mundo',
            ano: 2021
        }
    )
});

app.listen(3333);