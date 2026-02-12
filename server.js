const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');


const http = require('http');
const app = require('./index');
require('dotenv').config();
const server = http.createServer(app);

server.listen(process.env.PORT);