const axios = require('axios')
const { createUpload } = require('../util/upload')
const { ReceiptModel } = require('../models')
const contentType = 'document'
const fileName = '/Users/kdoromal/Desktop/yuuvis/yuuvis-hack/testdata/money-bag.png'

const title = 'testing02'
const cid = 'cidtest'

module.exports = {
  store: async (req, res) => {
    // doc_title, doc_fileName, doc_cid, doc_contentType
    const upload = await axios(createUpload(title, fileName, cid, contentType))
    console.log('what is upload:', upload)
  },
  get: async (req, res) => {
    // const retrival = await axios()
  }
}
