const dv = require('dv');
const fs = require('fs');
const image = new dv.Image('jpg', fs.readFileSync('../../testdata/kris-test.jpg'));
const tesseract = new dv.Tesseract('eng', image);
const baseUrl = 'https://api.yuuvis.io/'
const request = require('request')

console.log(tesseract.findText('plain'));

function createImportReceipt(objectId) {
  return {
    method: 'POST',
    uri: baseUrl + 'dms/objects/' + objectId + '/contents/file',
    headers: {
      'OCR-image-ID': objectId
    }
  }
}

const executeReceipt = request_object => {
  return new Promise((resolve, reject) => {
    request.post(request_object, function callback(err, httpReponse, body) {
      if (err) reject (err)
      else {
        resolve({ statusCode: httpReponse.statusCode, body})
      }
    })
  })
}

module.exports.createReceipt = async (image) => {
  const ocrReceipt = createImportReceipt(image)
  return executeReceipt(ocrReceipt)
}