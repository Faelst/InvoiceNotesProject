const innerBloom = require(`./InnerbloomProject/src/Functions`)
const { convert2Json, validateXml } = require('./ConvertXML/index')

var xml = require("fs").readFileSync(__dirname + '/ConvertXML/xmlFile/99_20200605163712.xml', "utf8");

const parseJson = convert2Json(xml);

//innerBloom.getActivity().then(val => console.log(val))

//module.exports = async function sendAll(parseJson) {
sendAll(parseJson)

async function sendAll(parseJson) {

  for (const [i, e] of parseJson.entries()) {

    //console.log(((100 * (i + 1)) / parseJson.length).toFixed(2));
    const val = await innerBloom.sendInvoice(parseJson[i]).then(val => val)
    // if(val.retorno['$value'].substring(0,6) !== 'Sucesso') {
    //   console.log(val)
    //   break;
    // }
    console.log(val)
  }
}

//innerBloom.nextValidInvoice().then( resp => console.log(resp))

var jsonCancel = [{
  im: "000022483",
  numeroNota: "1798",
  motivoCancelamento: "Nota emitida Indevidamente, DUPLICIDADE DE BOLETO DO MES DE JULHO."
}]

//innerBloom.setCancelNfeOnly(jsonCancel).then(val => console.log(val.retorno['$value']))
