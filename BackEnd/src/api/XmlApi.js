
const fs = require('fs');
const innerBloom = require(`../../InnerbloomProject/src/Functions`);
const { convert2Json } = require('../../ConvertXML/index');
const { json } = require('body-parser');


const getConvet2Json = async (req, res) => {
    const xmlFile = await fs.readFileSync('C:/Users/fael_/OneDrive/Área de Trabalho/Projetos/XmlProject/BackEnd/uploads/xmlInvoice.xml', 'utf8');
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


module.exports = {
    getNextInvoice,
    sendInvoice,
    getConvet2Json
}