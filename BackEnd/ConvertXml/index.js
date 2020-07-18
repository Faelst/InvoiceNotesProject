var parseString = require("xml2js").parseString;

module.exports.convert2Json = (xml) => {

  var jsonXML = new Array();

  parseString(xml, function (err, result) {
    for (let i = 0; i < result.nfe.notafiscal.length; i++) {
      jsonXML[i] = result.nfe.notafiscal[i];
    }
  });

  var newJson = new Array();

  Object.entries(jsonXML).forEach(([key, value], index) => {
    jsonXML[index].dadosprestador.forEach((element) => {
      newJson[index] = {
        im: element.im[0],
        NumeroNota: element.numeronota[0],
        DataEmissao: FormataStringData(element.dataemissao[0]),
      };
    });
    jsonXML[index].dadostomador.forEach((element) => {
      newJson[index].NomeTomador = element.nometomador[0]
      newJson[index].tipoDocTomador = element.tipodoc[0]
      newJson[index].documentoTomador = element.documento[0]
      newJson[index].InscricaoEstadualTomador = element.ie[0]
      newJson[index].PAISTomador = element.pais[0]
      newJson[index].logradouroTomador = element.logradouro[0]
      newJson[index].numeroTomador = element.numero[0]
      newJson[index].complementoTomador = element.complemento[0]
      newJson[index].bairroTomador = element.bairro[0]
      newJson[index].ufTomador = element.uf[0]
      newJson[index].cidadeTomador = element.cidade[0]
      newJson[index].CEPTomador = element.cep[0]
      newJson[index].emailTomador = element.email[0]
    });
    jsonXML[index].dadosservico.forEach((element) => {
      newJson[index].PAISServico = element.pais[0]
      newJson[index].logradouroServico = element.logradouro[0]
      newJson[index].numeroServico = element.numero[0]
      newJson[index].complementoServico = element.complemento[0]
      newJson[index].bairroServico = element.bairro[0]
      newJson[index].ufServico = element.uf[0]
      newJson[index].cidadeServico = element.cidade[0]
      newJson[index].CEPServico = element.cep[0]

    });
    jsonXML[index].detalheservico.forEach((element) => {
      newJson[index].descricao = element.item[0].descricao[0]
      newJson[index].valor = element.item[0].valor[0]
      newJson[index].atividade = element.item[0].codigo[0]
      newJson[index].descontoIncondicional = element.descontoIncondicional[0]
      newJson[index].INSS = element.inss[0]
      newJson[index].IRPJ = element.ir[0]
      newJson[index].CSLL = element.csll[0]
      newJson[index].COFINS = element.cofins[0]
      newJson[index].PISPASEP = element.pispasep[0]
      newJson[index].deducaoMaterial = element.deducaoMaterial[0]
      newJson[index].issRetido = element.issretido[0]
      newJson[index].observacao = "DOCUMENTO EMITIDO POR ME OU EPP OPTANTE PELO SIMPLES NACIONAL"//element.obs[0]  
      newJson[index].devidoNoLocal = "0"
      newJson[index].aliquota = "4.53"
      newJson[index].descontoCondicional = "0.00"
      newJson[index].valorDeducao = "0.00"
      newJson[index].baseCalculo = element.item[0].valor[0]
      newJson[index].valorIss = (parseFloat(element.item[0].valor[0]) * 0.0453).toFixed(2)
      newJson[index].valorTotalNota = element.item[0].valor[0]
      newJson[index].tipoEnquadramento = ""
      newJson[index].tipoIss = "M"
      newJson[index].hashMd5 = ""
    });
  });

  function FormataStringData(data) {
    var dia = data.split("/")[0];
    var mes = data.split("/")[1];
    var ano = data.split("/")[2];

    return ano + '-' + ("0" + mes).slice(-2) + '-' + ("0" + dia).slice(-2);
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
  }

  return newJson

}

module.exports.validateXml = (xml) => {

  var lastInvoiceSerie = null
  var invalidsNotes = [];

  Object.entries(xml).forEach(([key, value], index) => {
    Object.entries(xml[index]).forEach(([key, val], i) => {

      if (key == 'NumeroNota') lastInvoiceSerie = validationIm(val, lastInvoiceSerie);
      if (key == 'NumeroNota' && lastInvoiceSerie == false) console.log(`Nota Incorreta: ${val}`)

    })
  })
}

function validationIm(im, lastInvoiceSerie) {

  if (lastInvoiceSerie == null || ((parseInt(lastInvoiceSerie) + 1) == parseInt(im))) {
    return im
  } else {
    return false
  }
}