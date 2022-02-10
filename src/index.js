require('dotenv').config();
const express = require('express');
const server = express();

const PORT = process.env.PORT || 8080;

server.use(express.json());



server.get('/api/users', (req, res) => {
    res.json({
        users: 
        [
            'John' , 
            'Harley', 
            'Jeff'
        ]
    })
})

server.post('/api/register', (req, res) => {
    username: req.body.username
    password: req.body.password
})

server.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username && password){
        res.json({
            message: `HAL 9000: Good morning, ${username}`
        })
    }
})

server.listen(PORT, () => {
    console.log(`*** listening on port ${PORT} ***`);
})