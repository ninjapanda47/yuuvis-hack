const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReceiptSchema = new Schema({
  userId: { type: Schema.ObjectId, ref: 'User', index: true },
  yuuvisId: String,
  date: Date,
  expenseType: String,
  geoLocation: String,
  amount: String
})

const Receipt = mongoose.model('Receipt', ReceiptSchema)
module.exports = Receipt
