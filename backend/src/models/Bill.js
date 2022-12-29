import mongoose from 'mongoose'
const Schema = mongoose.Schema

const BillSchema = Schema({
    userLineId: { type: String, required: true },
    items:   [{ type: mongoose.Types.ObjectId }],
    total:   { type: Number },
    package: { type: String },
    payment: { type: String },
    address: { type: String }
}, {
    collection: 'Bill',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
}) 

const BillModel = mongoose.model('Bill', BillSchema)

export default BillModel