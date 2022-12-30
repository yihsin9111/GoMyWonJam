import BillModel from '../models/Bill'
import UserModel from '../models/User'
import ItemModel from '../models/Item'
import CategoryModel from '../models/Category'
import ProductModel from '../models/Product'

const UpdateUser = (user)=>{
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
const UpdateCategory = (category)=>{ //date not updated ?
    CategoryModel.find({name:category.cat_name}, async function(err, obj){
        if(obj.length){
            obj[0].deadline = Date(category.deadLine);
            await obj[0].save;
            console.log(obj[0]);
        }
        else console.log('category does not exist ;_;')
    })
}
const UpdateProduct = (product)=>{

}

//bill modify handling functions




export {UpdateUser, UpdateCategory, UpdateProduct}
