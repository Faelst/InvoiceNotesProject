/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/loader.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ConvertXML/index.js":
/*!*****************************!*\
  !*** ./ConvertXML/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parseString = __webpack_require__(/*! xml2js */ \"xml2js\").parseString;\n\nmodule.exports.convert2Json = xml => {\n  var jsonXML = new Array();\n  parseString(xml, function (err, result) {\n    for (let i = 0; i < result.nfe.notafiscal.length; i++) {\n      jsonXML[i] = result.nfe.notafiscal[i];\n    }\n  });\n  var newJson = new Array();\n  Object.entries(jsonXML).forEach(([key, value], index) => {\n    jsonXML[index].dadosprestador.forEach(element => {\n      newJson[index] = {\n        im: element.im[0],\n        NumeroNota: element.numeronota[0],\n        DataEmissao: FormataStringData(element.dataemissao[0])\n      };\n    });\n    jsonXML[index].dadostomador.forEach(element => {\n      newJson[index].NomeTomador = element.nometomador[0];\n      newJson[index].tipoDocTomador = element.tipodoc[0];\n      newJson[index].documentoTomador = element.documento[0];\n      newJson[index].InscricaoEstadualTomador = element.ie[0];\n      newJson[index].PAISTomador = element.pais[0];\n      newJson[index].logradouroTomador = element.logradouro[0];\n      newJson[index].numeroTomador = element.numero[0];\n      newJson[index].complementoTomador = element.complemento[0];\n      newJson[index].bairroTomador = element.bairro[0];\n      newJson[index].ufTomador = element.uf[0];\n      newJson[index].cidadeTomador = element.cidade[0];\n      newJson[index].CEPTomador = element.cep[0];\n      newJson[index].emailTomador = element.email[0];\n    });\n    jsonXML[index].dadosservico.forEach(element => {\n      newJson[index].PAISServico = element.pais[0];\n      newJson[index].logradouroServico = element.logradouro[0];\n      newJson[index].numeroServico = element.numero[0];\n      newJson[index].complementoServico = element.complemento[0];\n      newJson[index].bairroServico = element.bairro[0];\n      newJson[index].ufServico = element.uf[0];\n      newJson[index].cidadeServico = element.cidade[0];\n      newJson[index].CEPServico = element.cep[0];\n    });\n    jsonXML[index].detalheservico.forEach(element => {\n      newJson[index].descricao = element.item[0].descricao[0];\n      newJson[index].valor = element.item[0].valor[0];\n      newJson[index].atividade = element.item[0].codigo[0];\n      newJson[index].descontoIncondicional = element.descontoIncondicional[0];\n      newJson[index].INSS = element.inss[0];\n      newJson[index].IRPJ = element.ir[0];\n      newJson[index].CSLL = element.csll[0];\n      newJson[index].COFINS = element.cofins[0];\n      newJson[index].PISPASEP = element.pispasep[0];\n      newJson[index].deducaoMaterial = element.deducaoMaterial[0];\n      newJson[index].issRetido = element.issretido[0];\n      newJson[index].observacao = \"DOCUMENTO EMITIDO POR ME OU EPP OPTANTE PELO SIMPLES NACIONAL\"; //element.obs[0]  \n\n      newJson[index].devidoNoLocal = \"0\";\n      newJson[index].aliquota = \"4.53\";\n      newJson[index].descontoCondicional = \"0.00\";\n      newJson[index].valorDeducao = \"0.00\";\n      newJson[index].baseCalculo = element.item[0].valor[0];\n      newJson[index].valorIss = (parseFloat(element.item[0].valor[0]) * 0.0453).toFixed(2);\n      newJson[index].valorTotalNota = element.item[0].valor[0];\n      newJson[index].tipoEnquadramento = \"\";\n      newJson[index].tipoIss = \"M\";\n      newJson[index].hashMd5 = \"\";\n    });\n  });\n\n  function FormataStringData(data) {\n    var dia = data.split(\"/\")[0];\n    var mes = data.split(\"/\")[1];\n    var ano = data.split(\"/\")[2];\n    return ano + '-' + (\"0\" + mes).slice(-2) + '-' + (\"0\" + dia).slice(-2); // Utilizo o .slice(-2) para garantir o formato com 2 digitos.\n  }\n\n  return newJson;\n};\n\nmodule.exports.validateXml = xml => {\n  var lastInvoiceSerie = null;\n  var invalidsNotes = [];\n  Object.entries(xml).forEach(([key, value], index) => {\n    Object.entries(xml[index]).forEach(([key, val], i) => {\n      if (key == 'NumeroNota') lastInvoiceSerie = validationIm(val, lastInvoiceSerie);\n      if (key == 'NumeroNota' && lastInvoiceSerie == false) console.log(`Nota Incorreta: ${val}`);\n    });\n  });\n};\n\nfunction validationIm(im, lastInvoiceSerie) {\n  if (lastInvoiceSerie == null || parseInt(lastInvoiceSerie) + 1 == parseInt(im)) {\n    return im;\n  } else {\n    return false;\n  }\n}\n\n//# sourceURL=webpack:///./ConvertXML/index.js?");

/***/ }),

/***/ "./InnerbloomProject/src/Functions.js":
/*!********************************************!*\
  !*** ./InnerbloomProject/src/Functions.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var async = __webpack_require__(/*! ./SoapConnection */ \"./InnerbloomProject/src/SoapConnection.js\");\n\nmodule.exports.nextValidInvoice = () => async.getToken().then(val => async.webService('getNextInvoice', {\n  token: val.token\n}).then(value => {\n  return value;\n})); //nextValidInvoice.then(val => console.log(val))\n\n\nmodule.exports.sendInvoice = jsonXml => {\n  return async.getToken().then(val => async.webService('setInvoice', {\n    strJsonInvoice: JSON.stringify([jsonXml]),\n    token: val.token\n  }).then(value => {\n    return value;\n  }));\n}; //sendInvoice.then(val => console.log(val))\n\n\nmodule.exports.setCancelNfeOnly = jsonCancel => {\n  return async.getToken().then(val => async.webService('setCancelNfeOnly', {\n    StrJsonCancelInvoice: JSON.stringify(jsonCancel),\n    strToken: val.token\n  }).then(value => {\n    return value;\n  }));\n}; //setCancelNfeOnly.then(val => console.log(val))\n\n\nmodule.exports.getActivity = () => {\n  return async.getToken().then(val => async.webService('getActivity', {\n    strToken: val.token\n  }).then(value => {\n    return value;\n  }));\n};\n\n//# sourceURL=webpack:///./InnerbloomProject/src/Functions.js?");

/***/ }),

/***/ "./InnerbloomProject/src/SoapConnection.js":
/*!*************************************************!*\
  !*** ./InnerbloomProject/src/SoapConnection.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var soap = __webpack_require__(/*! soap */ \"soap\");\n\nvar url = \"http://www.nfecj.com.br/ws.cj/Servidor.php?wsdl\"; // Vinculado\n\nmodule.exports.getToken = async function () {\n  const credentials = {\n    // strInscricaoMunicipal: \"000000014\",\n    // strSenha: \"teste\",\n    strInscricaoMunicipal: \"000022483\",\n    strSenha: \"VIVAS22483\"\n  };\n  const promise = await soap.createClientAsync(url).then(async client => {\n    return {\n      token: await client.getTokenAsync(credentials).then(val => val[0].retorno[\"$value\"])\n    };\n  }).catch(err => reject(err));\n  return promise;\n};\n\nmodule.exports.webService = function (setFunction, webServiceInfo) {\n  const promise = new Promise((resolve, reject) => {\n    soap.createClientAsync(url).then(async client => {\n      await client[setFunction](webServiceInfo, function (err, result) {\n        resolve(result);\n      });\n    });\n  });\n  return promise;\n};\n\n//# sourceURL=webpack:///./InnerbloomProject/src/SoapConnection.js?");

/***/ }),

/***/ "./src/api/XmlApi.js":
/*!***************************!*\
  !*** ./src/api/XmlApi.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst innerBloom = __webpack_require__(/*! ../../InnerbloomProject/src/Functions */ \"./InnerbloomProject/src/Functions.js\");\n\nconst {\n  convert2Json\n} = __webpack_require__(/*! ../../ConvertXML/index */ \"./ConvertXML/index.js\");\n\nconst {\n  json\n} = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nconst getConvet2Json = async (req, res) => {\n  const xmlFile = await fs.readFileSync('C:/Users/Fael_/OneDrive/Área de Trabalho/Projetos/InvoiceNotesProject/BackEnd/uploads/xmlInvoice.xml', 'utf8');\n  const xmlJson = await convert2Json(xmlFile);\n  res.status(200).send(xmlJson);\n};\n\nconst getNextInvoice = async (req, res) => {\n  const resp = await innerBloom.nextValidInvoice().then(resp => resp);\n  res.status(200).send(resp);\n};\n\nconst sendInvoice = async (req, res) => {\n  var sendObj = {\n    invoiceSendResponse: '',\n    success: false,\n    finished: false,\n    carryingPercentage: '',\n    invoceError: []\n  };\n  const postReciveData = JSON.parse(req.body.invoiceInfo);\n  sendObj.invoiceSendResponse = await innerBloom.sendInvoice(postReciveData).then(val => val\n  /*.retorno['$value']*/\n  );\n  console.log(sendObj.invoiceSendResponse);\n  res.send(sendObj);\n};\n\nconst cancelInvoice = async (req, res) => {\n  var jsonCancel = [{\n    im: \"000000014\",\n    numeroNota: \"140\",\n    motivoCancelamento: \"Nota emitida Indevidamente, DUPLICIDADE DE BOLETO DO MES DE JULHO.\"\n  }];\n  const cancelResponse = await innerBloom.setCancelNfeOnly(jsonCancel).then(val => val.retorno['$value']);\n  res.send(cancelResponse);\n};\n\nmodule.exports = {\n  getNextInvoice,\n  sendInvoice,\n  getConvet2Json,\n  cancelInvoice\n};\n\n//# sourceURL=webpack:///./src/api/XmlApi.js?");

/***/ }),

/***/ "./src/config/Multer.js":
/*!******************************!*\
  !*** ./src/config/Multer.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var multer = __webpack_require__(/*! multer */ \"multer\");\n\nvar storage = multer.diskStorage({\n  destination: function (req, file, cb) {\n    cb(null, 'uploads/');\n  },\n  filename: function (req, file, cb) {\n    cb(null, `xmlInvoice.xml`);\n  }\n});\nmodule.exports = multer({\n  storage: storage\n});\n\n//# sourceURL=webpack:///./src/config/Multer.js?");

/***/ }),

/***/ "./src/config/Server.js":
/*!******************************!*\
  !*** ./src/config/Server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const port = process.env.PORT || 3003;\n\nconst express = __webpack_require__(/*! express */ \"express\");\n\nconst server = express();\n\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nconst router = express.Router();\n\nconst cors = __webpack_require__(/*! ./cors */ \"./src/config/cors.js\");\n\nserver.use(cors);\nserver.use(bodyParser.urlencoded({\n  extended: true\n}));\nserver.use(bodyParser.json());\nserver.listen(port, () => console.log(`http://localhost:${port}`));\nserver.use('/api', router);\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/config/Server.js?");

/***/ }),

/***/ "./src/config/cors.js":
/*!****************************!*\
  !*** ./src/config/cors.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (req, res, next) {\n  res.header('Access-Control-Allow-Origin', '*');\n  res.header('Access-Control-Allow-Methods', 'GET, POST');\n  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');\n  next();\n};\n\n//# sourceURL=webpack:///./src/config/cors.js?");

/***/ }),

/***/ "./src/config/routes.js":
/*!******************************!*\
  !*** ./src/config/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const upload = __webpack_require__(/*! ./Multer */ \"./src/config/Multer.js\");\n\nconst xmlApi = __webpack_require__(/*! ../api/XmlApi */ \"./src/api/XmlApi.js\");\n\nmodule.exports = function (server) {\n  // API Routes\n  server.post('/convertJson', upload.single('file'), xmlApi.getConvet2Json);\n  server.get('/getNextInvoice', xmlApi.getNextInvoice);\n  server.post('/sendInvoice', xmlApi.sendInvoice);\n  server.post('/cancelInvoice', xmlApi.cancelInvoice);\n};\n\n//# sourceURL=webpack:///./src/config/routes.js?");

/***/ }),

/***/ "./src/loader.js":
/*!***********************!*\
  !*** ./src/loader.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const server = __webpack_require__(/*! ./config/Server */ \"./src/config/Server.js\");\n\n__webpack_require__(/*! ./config/routes */ \"./src/config/routes.js\")(server);\n\n//# sourceURL=webpack:///./src/loader.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer\");\n\n//# sourceURL=webpack:///external_%22multer%22?");

/***/ }),

/***/ "soap":
/*!***********************!*\
  !*** external "soap" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"soap\");\n\n//# sourceURL=webpack:///external_%22soap%22?");

/***/ }),

/***/ "xml2js":
/*!*************************!*\
  !*** external "xml2js" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"xml2js\");\n\n//# sourceURL=webpack:///external_%22xml2js%22?");

/***/ })

/******/ });