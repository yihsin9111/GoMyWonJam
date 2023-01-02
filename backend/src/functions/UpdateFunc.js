import BillModel from '../models/Bill'
import UserModel from '../models/User'
import ItemModel from '../models/Item'
import CategoryModel from '../models/Category'
import ProductModel from '../models/Product'
import { GetCategories, GetProductsByCategory } from './GetFunc'

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
const UpdateCategory = async(category,ws)=>{ //date not updated ?
    await CategoryModel.findOneAndUpdate({name:category.cat_name},{deadline:category.deadLine});
    GetCategories(ws);
}
const UpdateProduct = async(product, ws)=>{
    console.log('updating product...',product);
    await ProductModel.findByIdAndUpdate({name:product.name,category:product.category},
        {
            name: product.name,
            category: product.category,
            URL: product.URL,
            price: product.price,
            note: product.note,
            product_type: product.product_type,
            option_type: product.option_type,
            options: product.options
        });
    GetProductsByCategory(product.name, ws);
}

//bill modify handling functions




export {UpdateUser, UpdateCategory, UpdateProduct}
