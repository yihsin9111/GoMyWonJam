import BillModel from '../models/Bill'
import UserModel from '../models/User'
import CategoryModel from '../models/Category'
import ProductModel from '../models/Product'

const DeleteUser = (userLineId)=>{
    UserModel.deleteMany({userLineId})
}
const DeleteBill = (billId)=>{
    BillModel.deleteMany({billId})
}
const DeleteCategory = (name)=>{
    CategoryModel.deleteMany({name})
}
const DeleteProduct = (category, name)=>{
    ProductModel.deleteMany({name, category})
}

export {DeleteBill, DeleteCategory, DeleteUser, DeleteProduct}