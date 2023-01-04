import BillModel from '../models/Bill'
import UserModel from '../models/User'
import ItemModel from '../models/Item'
import CategoryModel from '../models/Category'
import ProductModel from '../models/Product'
import { GetCategories, GetProductsByCategory, GetUserBill, GetUserData } from './GetFunc'

const sendData = (data, ws) =>{
    ws.send(JSON.stringify(data));
    console.log('send data called in getFunc.');
}

const UpdateUser = (user, ws)=>{
    UserModel.find({lineId:user.lineId}, async function(err, obj){
        if(obj.length){
            obj[0].name = user.name;
            obj[0].address = user.address;
            obj[0].phoneNumber = user.phoneNumber;
            await obj[0].save();
            console.log("userData: ", obj[0]);
            sendData(["userData", obj[0]], ws)
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
    await ProductModel.find({name:product.name,category:product.category},
        {
            name: product.name,
            category: product.category,
            URL: product.URL,
            price: product.price,
            note: product.note,
            option_type: product.option_type,
            product_type: product.product_type,
            options: product.options
        });
    GetProductsByCategory(product.name, ws);
}

const UpdateItem = async (bill, ws)=>{
    console.log("Update Item Product_type...")
    await BillModel.findOneAndUpdate({billId: bill.id},{items: bill.items});
    //GetBill(bill.id, ws)
}

//bill modify handling functions
const UpdateBillStatus = async(payload,ws)=>{
    console.log('updating bill...',payload);
    BillModel.find({billId:payload.billId}, async function(err, obj){
        if(obj.length){
            if(payload.task==='add' && payload.oldStatus<4){
                obj[0].status += 1
            }
            if(payload.task==='minus' && payload.oldStatus>0){
                console.log('minus task');
                obj[0].status -= 1
            }
            await obj[0].save();
            GetUserBill('all',ws);
        }
    })
}



export {UpdateUser, UpdateCategory, UpdateProduct, UpdateBillStatus,UpdateItem}
