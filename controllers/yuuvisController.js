const { createUpload } = require('../util/upload')
const { ReceiptModel } = require('../models')
const contentType = 'document'
const fileName = '/Users/kdoromal/Desktop/yuuvis/yuuvis-hack/testdata/money-bag.png'

const title = 'testing02'
const cid = 'cidtest'

module.exports = {
  store: async (req, res) => {
    // doc_title, doc_fileName, doc_cid, doc_contentType
    const upload = await createUpload(title, fileName, cid, contentType)
    if (upload.statusCode === 200) {
      const parsedBody = JSON.parse(upload.body)
      const ids = parsedBody.objects.map(item => {
        return item.properties['enaio:objectId'].value
      })
      res.status(200).send({
        success: true,
        ids: ids
      })
    } else {
      throw new Error('error in uploading')
    }
  },
  get: async (req, res) => {
    // const retrival = await axios()
  }
}
