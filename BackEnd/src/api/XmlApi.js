
const fs = require('fs');
const innerBloom = require(`../../InnerbloomProject/src/Functions`);
const { convert2Json } = require('../../ConvertXML/index');
const { json } = require('body-parser');
const path = require('path')

const getConvet2Json = async (req, res) => {
    const xmlFile = await fs.readFileSync(path.resolve(__dirname , "../../uploads/xmlInvoice.xml"), 'utf8');
    const xmlJson = await convert2Json(xmlFile);
    res.status(200).send(xmlJson);
}

const getNextInvoice = async (req, res) => {
    const resp = await innerBloom.nextValidInvoice().then(resp => resp)
    res.status(200).send(resp)
}

const sendInvoice = async (req, res) => {
    var sendObj = {
        invoiceSendResponse: '',
        success: false,
        finished: false,
        carryingPercentage: '',
        invoceError: []
    }
    const postReciveData = JSON.parse(req.body.invoiceInfo)
    sendObj.invoiceSendResponse = await innerBloom.sendInvoice(postReciveData).then(val => val/*.retorno['$value']*/);
    console.log(sendObj.invoiceSendResponse)
    res.send(sendObj)
}

const cancelInvoice = async (req, res) => {

    var jsonCancel = req.body
    const cancelResponse = await innerBloom.setCancelNfeOnly(jsonCancel).then(val => val)
    if (cancelResponse.retorno['$value'] == 'Notas canceladas com sucesso') {
        return res.status(200).send({
            status: true,
            cancelInvoiceInformation: [{
                invoiceSerieNumber: req.body[0].numeroNota,
                reasonCancellation: req.body[0].motivoCancelamento,
            }]
        });
    }
    return res.status(201).send({
        status: false,
        error: cancelResponse.retorno['$value'],
        cancelInvoiceInformation: [{
            invoiceSerieNumber: req.body[0].numeroNota,
            reasonCancellation: req.body[0].motivoCancelamento,
        }]
    })
}

module.exports = {
    getNextInvoice,
    sendInvoice,
    getConvet2Json,
    cancelInvoice
}

