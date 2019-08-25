const key = 'd50f85d0fa734509be4e4a165a89607e'
const objectId = 'ada52788-d558-44e5-940a-0fefaddb3fda'
const baseUrl = 'https://api.yuuvis.io/'
const request = require('request')


var oid = ""
module.exports.createRequest = async (objectId) => {
  await executeRequest ({
    method: 'GET',
    uri: baseUrl + 'dms/objects/' + objectId + '/contents/file',
    headers: {
      'Ocp-Apim-Subscription-Key': key
    }
  })
}

const executeRequest = request_object => {
  return new Promise((resolve, reject) => {
    request.get(request_object, function callback(err, httpResponse, body) {
      if (err) reject(err)
      else {
        console.log(httpResponse.statusCode)
        console.log(body)
        resolve({
          statusCode: httpResponse.statusCode,
          body
        })
      }
    })
  })
}