const express = require('express');
const server = express();
const PORT = 3000;

const apiRouter = require('./api');
server.use('/api', apiRouter);

const bodyParser = require('body-parser');
server.use(bodyParser.json());

const morgan = require('morgan');
server.use(morgan('dev'));

const { client } = require('./db');
client.connect();


server.use((request, response, next) =>{
    console.log("<_____ Body Logger START_____>");
    console.log(request.body);
    console.log("<_____ Body Logger END_____>");

    next();
});

// server.get('/', (request, response, next) => {
//     response.send("Alex + Mom");
// })

// server.use('/api', (request, response, next) => {
//     console.log("A request was made to /api (this is the middleware).");
//     next();
// });

// server.get('/api', (request, response, next) => {
//     console.log("A get request was made to /api");
//     response.send({message: "success"});
// });

// server.post('/api/burrito', (request, response, next) => {
//     response.send({message: "Carne Asada con Salsa"});
// });


server.listen(PORT, () => {
    console.log('The server is up on port', PORT);
});
