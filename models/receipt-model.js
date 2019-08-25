const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReceiptSchema = new Schema({
  uploadId: Array,
  date: Date,
  expenseType: String,
  geoLocation: String,
  amount: Number
})

const Receipt = mongoose.model('Receipt', ReceiptSchema)
module.exports = Receipt
