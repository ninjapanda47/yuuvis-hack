const fs = require('fs')
const key = 'd50f85d0fa734509be4e4a165a89607e'
const baseUrl = 'https://api.yuuvis.io/'
const request = require('request')

function createDocumentMetadata(doc_title, doc_fileName, doc_cid, doc_contentType) {
  return {
    objects: [
      {
        properties: {
          'enaio:objectTypeId': {
            value: 'document'
          },
          Name: {
            value: doc_title
          }
        },
        contentStreams: [
          {
            mimeType: doc_contentType,
            fileName: doc_fileName,
            cid: doc_cid
          }
        ]
      }
    ]
  }
}

function createImportFormdata(doc_title, doc_fileName, doc_cid, doc_contentType) {
  var formData = {}
  formData['data'] = {
    value: JSON.stringify(
      createDocumentMetadata(doc_title, doc_fileName, doc_cid, doc_contentType)
    ),
    options: {
      contentType: 'application/json'
    }
  }
  formData[doc_cid] = {
    value: fs.createReadStream(doc_fileName),
    options: {
      contentType: doc_contentType,
      filename: doc_fileName
    }
  }
  return formData
}

function createImportRequest(doc_title, doc_fileName, doc_cid, doc_contentType) {
  return {
    method: 'POST',
    uri: baseUrl + 'dms/objects/',
    headers: {
      Accept: 'application/json',
      'Ocp-Apim-Subscription-Key': key
    },
    formData: createImportFormdata(doc_title, doc_fileName, doc_cid, doc_contentType)
  }
}

const executeRequest = request_object => {
  return new Promise((resolve, reject) => {
    request.post(request_object, function callback(err, httpResponse, body) {
      if (err) reject(err)
      else {
        // console.log(httpResponse.statusCode)
        // console.log(body)
        resolve({ statusCode: httpResponse.statusCode, body })
      }
    })
  })
}

module.exports.createUpload = async (doc_title, doc_fileName, doc_cid, doc_contentType) => {
  var simpleImportRequest = createImportRequest(doc_title, doc_fileName, doc_cid, doc_contentType)
  return executeRequest(simpleImportRequest)
}
