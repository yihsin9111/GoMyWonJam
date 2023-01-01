import BillModel from '../models/Bill'
import UserModel from '../models/User'
import CategoryModel from '../models/Category'
import ProductModel from '../models/Product'

const sendData = (data, ws) =>{
    ws.send(JSON.stringify(data));
    console.log('send data called in getFunc.');
}

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
const DeleteItemFromBill = (payload, ws)=>{
    BillModel.find({billId:payload.billId}, async function(err, obj){
        if(obj.length){
            obj[0].items.splice(payload.i,1);
            await obj[0].save();
            console.log(obj[0]);
            sendData(["bill",obj[0]],ws);
        }
        else{
            console.log('bill not found. unable to delete item.')
        }
    })
}

export {DeleteBill, DeleteCategory, DeleteUser, DeleteProduct, DeleteItemFromBill}