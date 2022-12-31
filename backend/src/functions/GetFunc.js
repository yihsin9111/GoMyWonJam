import BillModel from '../models/Bill'
import UserModel from '../models/User'
import ItemModel from '../models/Item'
import CategoryModel from '../models/Category'
import ProductModel from '../models/Product'

const sendData = (data, ws) =>{
    ws.send(JSON.stringify(data));
    console.log('send data called in getFunc.');
}

const GetCategories = async(ws)=>{
    const categories = await CategoryModel.aggregate([
        { $group: { _id: null, category_names: { $push: "$name" } } }])
    sendData(["categories",categories[0].category_names],ws);
}

const GetProductsByCategory = async(category, ws)=>{
    ProductModel.find({category:category}, async function(err, obj){
        if(obj.length){
            sendData(["products",obj],ws);
        }
        else{
            sendData(["products",[]],ws);
        }
    })
    //sendData(["products",obj[0].products],ws);
}

export {GetCategories, GetProductsByCategory}