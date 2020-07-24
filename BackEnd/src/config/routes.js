const upload = require('./Multer')
const xmlApi = require('../api/XmlApi');

module.exports = function (server) {

    // API Routes
    server.post('/convertJson', upload.single('file') , xmlApi.getConvet2Json);

    server.get('/getNextInvoice', xmlApi.getNextInvoice);

    server.post('/sendInvoice', xmlApi.sendInvoice);
    
    server.post('/cancelInvoice', xmlApi.cancelInvoice);
}