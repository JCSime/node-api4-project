require('dotenv').config();
const express = require('express');
const server = express();

const PORT = process.env.PORT;

server.listen(PORT, ()=>{
    console.log(`***Listening on port ${PORT}***`);
    console.log(process.env.MESSAGE);

})

server.get('/api/users', (req, res)=>{
    res.json([
        {id: 1, username: 'John'},
        {id: 1, username: 'Harley'},
        {id: 1, username: 'Jeff'},
    ])
})

server.use('*', (req, res)=>{
    res.send('<h1>Hola, Heroku</h1>');
})