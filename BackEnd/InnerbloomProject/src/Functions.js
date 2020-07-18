var async = require("./SoapConnection")


module.exports.nextValidInvoice = () => async.getToken().then((val) =>
  async.webService('getNextInvoice', { token: val.token }).then((value) => {
    return value;
  })
)

//nextValidInvoice.then(val => console.log(val))

module.exports.sendInvoice = (jsonXml) => {
  return async.getToken().then((val) =>
    async.webService('setInvoice', { strJsonInvoice: JSON.stringify([jsonXml]), token: val.token }).then((value) => {
      return value;
    })
  )
}

//sendInvoice.then(val => console.log(val))


module.exports.setCancelNfeOnly = (jsonCancel) => {
  return async.getToken().then((val) =>
    async.webService('setCancelNfeOnly', { StrJsonCancelInvoice: JSON.stringify(jsonCancel), strToken: val.token }).then((value) => {
      return value;
    })
  )
}

//setCancelNfeOnly.then(val => console.log(val))

module.exports.getActivity = () => {
  return async.getToken().then((val) =>
    async.webService('getActivity', { strToken: val.token }).then((value) => {
      return value;
    })
  )
}