const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP
 * 
 * GET: Buscar/listar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 * 
 */

/**
 * Tipos de parametros:
 * 
 * Query Params: nomeados enviados  na rota apos "?" (Filtros, paginação) ?name=Daniel&idade=21
 * Route Params: parametros utilizados para identificar recursos /:id 
 * Request Body:  Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 * 
 */

/**
 * SQL: MySQL, SQlite, Postgrees, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB
 * 
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */



app.listen(3333);