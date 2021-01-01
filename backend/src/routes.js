const express=require('express');
const routes=express.Router();

// aqui ficam as rotas padrão

routes.post('/users', (request, response) => {
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


module.exports=routes;
