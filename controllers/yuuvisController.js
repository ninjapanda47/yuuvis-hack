const { createUpload } = require('../util/upload')
const { createRequest } = require('../util/retrieve')
const { ReceiptModel } = require('../models')
const contentType = 'document'
const fileName = '/Users/josephkohatsu/Desktop/Yuuvis/yuuvis-hack/testdata/money-bag.png'



const title = 'testing02'
const cid = 'cidtest'

module.exports = {
  store: async (req, res) => {
    const amount = req.body.amount
    const expenseType = req.body.expenseType

    // doc_title, doc_fileName, doc_cid, doc_contentType
    const upload = await createUpload(title, fileName, cid, contentType)
    if (upload.statusCode === 200) {
      const parsedBody = JSON.parse(upload.body)
      const id = parsedBody.objects.map(item => {
        return item.properties['enaio:objectId'].value
      })

      const newReceipt = await new ReceiptModel({
        amount,
        expenseType,
        yuuvisId: id[0]
      })

      newReceipt.save(err => {
        if (err) {
          res.status(400)
        }
        res.status(200).send({
          success: true,
          receipt: newReceipt
        })
      })
    } else {
      throw new Error('error in uploading')
    }
  },
  get: async (req, res) => {
    // const result = await createRequest('ada52788-d558-44e5-940a-0fefaddb3fda')
    // // console.log('Result: ', result)
  },
  search: async (req, res) => {
    const query = req.body.query

    const receipts = await ReceiptModel.find({ 
      $or: [
        { expenseType: query },
        { amount: query },
        { geoLocation: query },
        { yuuvisId: query }
      ]
     })

     if (receipts) {
      let results = []
      for (let receipt of receipts) {
        results.push(await createRequest(receipt.yuuvisId))
      }
      res.status(200).send({
        success: true,
        results
      })
     } else {
      res.status(400)
     }
  }
}