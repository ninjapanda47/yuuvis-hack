const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReceiptSchema = new Schema({
  yuuvisId: String,
  date: Date,
  expenseType: String,
  geoLocation: String,
  amount: String
})

const Receipt = mongoose.model('Receipt', ReceiptSchema)
module.exports = Receipt
