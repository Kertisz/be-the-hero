const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);


app.listen(3333);





// Anotações


//recurso e rota 

/* metodos HTTP
*
* GET: Busca informacao di backend
* Post: criar informacao
* Put: alterar informacao
* Delete: deleta informacao
*/ 
/**
 * Tipos de parametros
 * 
 * Query Params: Parametros nomeados enviados na rota após o simbolo de interrogacao, servem para filtros, paginacoes juntando com &.
 * Route Params: usados para identificar recursos.
 * Request Body: corpo da requisicao utilizado para criar ou alterar recursos
 */

 /**
  * 
  * Tipos de banco de dados:
  * 
  * SQL : MySQL, SQLite, PostgressSQL, Oracle
  * NOSql: MongoDB, CounchDB, etc
  * 
  */

  /**
   * Driver: SELECT * FROM users
    *
    *Query Builder:
    *
    *
    */





