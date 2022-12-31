import { AddUser ,AddBillToUser, AddCategory, AddProductToCategory, AddItemToBill } from './functions/AddFunc'
import { UpdateUser, UpdateBill, UpdateCategory, UpdateProduct } from './functions/UpdateFunc'
import { GetCategories, GetProductsByCategory } from './functions/GetFunc';

//helper functions
const sendData = (data, ws) =>{
    ws.send(JSON.stringify(data));
    console.log('send data called. (in wsConnect.js, line 5)');
}

export default {
    initData: (ws) => {
        console.log('data initialization called.')
    },
    onMessage: async (wss, ws, e) => {
        const [task, payload] = JSON.parse(e.data);
        switch (task) {
            //Add functions
            case 'AddUser':{
                AddUser(payload);
                break;
            }
            case 'AddCategory':{
                AddCategory(payload);
                break;
            }
            case 'AddProductToCategory':{
                AddProductToCategory(payload);
                break;
            }
            case 'AddBillToUser':{
                AddBillToUser(payload);
                break;
            }
            case 'AddItemToBill':{
                const {BillId, item} = payload;
                AddItemToBill(BillId, item);
                break;
            }

            //Get functions
            case 'GetCategories':{
                GetCategories(ws);
                break;
            }
            case 'GetProductsByCategory':{
                GetProductsByCategory(payload,ws);
                break;
            }

            //Update functions
            case 'UpdateUser':{
                UpdateUser(payload);
                break;
            }
            case 'UpdateCategory':{
                UpdateCategory(payload);
                break;
            } 
            case 'UpdateProduct':{
                UpdateProduct(product);
                break;
            }

            //delete functions
            case 'DeleteUser':{
                UpdateUser(payload);
                break;
            }
            case 'DeleteCategory':{
                UpdateCategory(payload);
                break;
            } 
            case 'DeleteProduct':{
                UpdateProduct(product);
                break;
            }
        }
    }
}


