const express = require('express');
const OngController=require('./controller/OngController');
const incidentControlleer=require('./controller/IncidentController');
const profileControlleer=require('./controller/ProfileController');
const sessionControlleer=require('./controller/sessionController');

const { request } = require('http');
const { response } = require('express');
const routes = express.Router();

// rotas padrão para ONG
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// rotas padrão para CASOS
routes.post('/incidents',incidentControlleer.create);
routes.get('/incidents',incidentControlleer.index);
routes.delete('/incidents/:id',incidentControlleer.deletar);
routes.get('/profile',profileControlleer.index); 
// listar caso espfco

// rota para fazer login
routes.post('/sessions',sessionControlleer.create);

module.exports = routes;
