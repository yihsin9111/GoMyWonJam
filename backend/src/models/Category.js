import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CategorySchema = Schema({
    name:       { type: String, required: true },
    deadline:   { type: Date, required: true },
    products:   [{ type: mongoose.Types.ObjectId, ref: 'Product' }],
}, {
    collection: 'Product',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
}) 

const CategoryModel = mongoose.model('Category', CategorySchema)

export default CategoryModel