
const port = process.env.PORT || 3003

const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const cors = require('./cors')

server.use(cors);
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(port , () => console.log(`http://localhost:${port}`))

module.exports = server