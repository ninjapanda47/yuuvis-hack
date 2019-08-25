const { createUpload } = require('../util/upload')
const { createRequest } = require('../util/retrieve')
const { ReceiptModel } = require('../models')
const uuidv4 = require('uuid/v4')
const { verifyToken } = require('../util/token')
// const fileName = '/Users/kdoromal/Desktop/yuuvis/yuuvis-hack/testdata/money-bag.png'

module.exports = {
  store: async (req, res) => {
    const response = await verifyToken(req.headers.authorization)
    const userId = response.user._id
    const amount = req.body.amount
    const expenseType = req.body.expenseType
    const fileName = __dirname.replace('controllers', 'testdata/') + req.body.filePath
    const title = req.body.title
    const cid = uuidv4()
    const contentType = 'document'

    // doc_title, doc_fileName, doc_cid, doc_contentType
    const upload = await createUpload(title, fileName, cid, contentType)
    if (upload.statusCode === 200) {
      const parsedBody = JSON.parse(upload.body)
      const id = parsedBody.objects.map(item => {
        return item.properties['enaio:objectId'].value
      })
      const newReceipt = await new ReceiptModel({
        userId,
        amount,
        expenseType,
        yuuvisId: id[0],
        date: new Date()
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
    const response = await verifyToken(req.headers.authorization)
    const userId = response.user._id

    const receipts = await ReceiptModel.find({
      $and: [
        {
          $or: [{ userId }]
        },
        { 
          $or: [
            { expenseType: query },
            { amount: query },
            { geoLocation: query },
            { yuuvisId: query }
          ]
        }

      ]
    })

     if (receipts) {
      let results = []
      for (let receipt of receipts) {
        results.push(await createRequest(receipt.yuuvisId))
      }
      res.status(200).send({
        success: true,
        results,
        receipts
      })
    } else {
      res.status(400)
    }
  }
}
