var soap = require("soap");
var url = "http://www.nfecj.com.br/ws.cj/Servidor.php?wsdl";

// Vinculado

module.exports.getToken = async function () {
  const credentials = {
     strInscricaoMunicipal: "000000014",
     strSenha: "teste",
    //strInscricaoMunicipal: "000022483",
    //strSenha: "VIVAS22483",
  };

  const promise = await soap
    .createClientAsync(url)
    .then(async (client) => {
      return {
        token: await client
          .getTokenAsync(credentials)
          .then((val) => val[0].retorno["$value"])
      };
    })
    .catch((err) => reject(err));
  
  return promise;
};

module.exports.webService = function (setFunction ,webServiceInfo) {
  const promise = new Promise((resolve, reject) => { 
    soap.createClientAsync(url).then(async (client) => {
      await client[setFunction](webServiceInfo , function (err,result) {
        resolve(result);
      });
    })    
  })
  return promise
};
