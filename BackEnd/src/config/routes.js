const express = require('express')
const upload = require('./Multer')

module.exports = function (server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    const xmlApi = require('../api/XmlApi')

    server.post('/api/convertJson', upload.single('file') , xmlApi.getConvet2Json)

    server.get('/api/getNextInvoice', xmlApi.getNextInvoice)

    server.post('/api/sendInvoice', xmlApi.sendInvoice)
    
    //server.post('/api/cancelInvoice', xmlApi.cancelInvoice)

}