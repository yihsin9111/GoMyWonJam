import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ProductSchema = Schema({
    _id:        { type: Schema.ObjectId, required: true},
    name:       { type: String, required: true },
    URL:        { type: String, required: true },
    deadline:   { type: String, required: true },
    product_type: { type: String, required: true }, 
    option_type:  { type: String,  required: true },
    options:    [{ type: {option: String, bought: Number, sold: Number, buyers: [String]}, required: true }],
}, {
    collection: 'Product',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
}) 

const ProductModel = mongoose.model('Product', ProductSchema)

export default ProductModel