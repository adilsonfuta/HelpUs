const { request, response } = require('express');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/users', (request, response) => {
    // return response.send("ola mundo");
    const p=request.params;
    console.log(p);
    return response.json(
        {
            texto: 'ola mundo',
            ano: 2021
        }
    )
});


app.post('/users', (request, response) => {
    // return response.send("ola mundo");
    const p=request.body;
    console.log(p);
    return response.json(
        {
            texto: 'ola mundo',
            ano: 2021
        }
    )
});

app.listen(3333);