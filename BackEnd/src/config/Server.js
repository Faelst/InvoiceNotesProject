
const port = process.env.PORT || 3003

const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const router = express.Router()
const cors = require('./cors')

server.use(cors);
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.listen(port , () => console.log(`http://localhost:${port}`))
server.use('/api', router)

module.exports = router