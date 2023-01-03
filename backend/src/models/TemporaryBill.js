import mongoose from 'mongoose'
const Schema = mongoose.Schema

const TemporaryBillSchema = Schema({
    userLineId: { type: String, required: true },
    items:   [{ type: {name: String, price: Number, number: Number, option: String, note:String, product_type: Boolean}}],
}, {
    collection: 'TemporaryBill',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
}) 

const TemporaryBillModel = mongoose.model('TemporaryBill', TemporaryBillSchema)

export default TemporaryBillModel;