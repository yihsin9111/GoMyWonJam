import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ProductSchema = Schema({
    name:       { type: String, required: true },
    URL:        { type: String, required: true },
    deadline:   { type: String, required: true },
    bought:     { type: Number, required: true },
    sold:       { type: Number, required: true },
    product_type: { type: String, required: true }
}, {
    collection: 'Product',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
}) 

const ProductModel = mongoose.model('Product', ProductSchema)

export default ProductModel