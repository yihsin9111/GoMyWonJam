import mongoose from 'mongoose'
const Schema = mongoose.Schema

const BillSchema = Schema({
    userLineId: { type: String, required: true },
    items:   [{ type: mongoose.Types.ObjectId, required: true }],
    total:   { type: Number, required: true },
    package: { type: String, required: true },
    payment: { type: String, required: true },
    address: { type: String, required: true },
    status:  { type: Number, default: 0 },
}, {
    collection: 'Bill',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
}) 

const BillModel = mongoose.model('Bill', BillSchema)

export default BillModel