import BillModel from '../models/Bill'
import UserModel from '../models/User'
import ItemModel from '../models/Item'
import CategoryModel from '../models/Category'
import ProductModel from '../models/Product'

const UpdateUser = (userLineId, user)=>{
    UserModel.find({lineId:user.lineId}, async function(err, obj){
        if(obj.length){
            obj[0].name = user.name;
            obj[0].address = user.address;
            obj[0].phoneNumber = user.phoneNumber;
            await obj[0].save();
        }
        else console.log('user not found ;_;')
    })
}
const UpdateBill = (billId, bill)=>{

}
const UpdateCategory = (categoryName, category)=>{

}
const UpdateProduct = (productName, category, product)=>{

}



export {UpdateUser, UpdateBill, UpdateCategory, UpdateProduct}