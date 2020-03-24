const express = require('express');

const IncidentController = require('./controllers/IncidentController');
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
//const connection = require('./database/connection');

const routes = express.Router();

routes.post('/sessions', SessionController.criar);

//listagem de ongs
routes.get('/ongs', OngController.index);
//criar ong
routes.post('/ongs',OngController.create);

routes.get('/profile', ProfileController.index);



//listar casos
routes.get('/incidents', IncidentController.index);
//criar caso (incident)
routes.post('/incidents', IncidentController.create);
//delete param
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;