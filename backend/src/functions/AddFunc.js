import BillModel from '../models/Bill'
import UserModel from '../models/User'
import ItemModel from '../models/Item'
import CategoryModel from '../models/Category'
import ProductModel from '../models/Product'

// const AddUser = (name, address) => {
//     UserModel.find({name:name}, async function(err, obj){
//         if(obj.length){
//             console.log('user name already taken.');
//         }
//         else{
//             console.log('registering new user...');
//             await new UserModel({name:name, address:address}).save();
//         }
//     })
// }

//helper functions
const appendProduct = (category, product) => {
    CategoryModel.find({name:category}, async function(err, obj){
        if(obj.length){
            console.log('This category has already been created. good!');
            obj[0].products = [...obj[0].products,product]
            await obj[0].save();
        }
        else{
            console.log('category does not exist.');
            const model = new CategoryModel({name:category}).save();
            model.products = [product];
            await new model.save();
        }
    })
}

const AddUser = (User)=>{
    UserModel.find({lineId:User.lineId}, async function(err, obj){
        if(obj.length){
            console.log('This LineId has already registered.');
        }
        else{
            console.log('registering new user...');
            await new UserModel({
                name:       User.name,
                lineId:     User.lineId,
                address:    User.address,
                phoneNumber:User.phoneNumber,
            }).save();
        }
    })
}

const AddBillToUser = (userLineId)=>{
    
}

const AddCategory = (Category)=>{
    CategoryModel.find({name:Category.name}, async function(err, obj){
        if(obj.length){
            console.log('This category has already been created');
        }
        else{
            console.log('creating new category...');
            await new CategoryModel({name:Category.name, products:[]}).save();
        }
    })
}

const AddProductToCategory = (Product)=>{
    ProductModel.find({name:Product.name, category:Product.category}, async function(err, obj){
        if(obj.length){
            console.log('This product is already in the category.');
        }
        else{
            console.log('creating new product...',Product);
            await new ProductModel(Product).save();
            appendProduct(Product.category, Product.name);
        }
    })
}
const AddItemToBill = (item, BillId) => {

}

export {AddUser ,AddBillToUser, AddCategory, AddProductToCategory, AddItemToBill}