//test datas for frontend testing//
import Products from "../../test datas/Products"
//////////////////////////////////
const client = new WebSocket('ws://localhost:4000');

const sendData =  async(data) =>{
    await client.send(JSON.stringify(data));
    console.log('data send. data:', JSON.stringify(data));
};

const useBackend = () => {

    //--User handling functions--//
    const AddUser = (name, lineId, address, phoneNumber) => {
        console.log("Adding User...");
        const User = {name, lineId, address, phoneNumber};
        sendData(["AddUser",User]);
    }
    //--Category handling functions--//
    const AddCategory = (name) => {
        console.log("Adding category...");
        const category = {name};
        sendData(["AddCategory",category]);
    }
    const UpdateCategory = (Category) => {

    }
    const GetProductsByCategory = (name) => {
        console.log("getting products by category "+name+" ...");
        sendData(["GetProductByCategory",name]);
        return Products
    }

    //--Product handling functions--//
    const AddProductToCategory = (Product) => {
        console.log("Adding product to category...");
        sendData(["AddProductToCategory",Product]);
    }

    const UpdateProduct = (ProductId, newProduct)=>{
        console.log("Updating Product...");
        sendData(["UpDateProduct",{ProductId, newProduct}]);
    }

    const GetProductById = (ProductId) =>{
        console.log("getting product by id...");
        sendData(["GetProductById", ProductId]);
    }


    //--Bill handling functions--//
    const AddItemToBill = (item)=>{
        console.log("adding item to bill...");
        sendData(["AddItemToBill",item]);
    }

    //userLineId, items(list of items), packing(包裝), payment(付款方式), address(地址)
    const AddBillToUser = (userLineId)=>{
        console.log("Adding Bill to User..."); 
        sendData(["AddBillToUser",userLineId])
    }

    const ConfirmBill = ()=>{
        console.log("confirming bill...")
        sendData(["ConfirmBill"])
    }
    
    //return a list of user's bill
    const GetUserBill = (userLineId)=>{
        console.log("Getting UserBill...");
        sendData(["GetUserBill",userLineId]);
    }

    //return a list of bill based on input filters
    const FindBill = (filters)=>{
        console.log("Finding Bill...");
        sendData(["FindBill",filters]);
    }

    //user updates address
    const UpdateBillAddress = (userLineId, billId, newAddr)=>{
        console.log("Updating Bill Address...");
        sendData(["UpdateBillAddress",{billId, newAddr}]);
    }
   

    return {
        AddUser, AddCategory,
        AddProductToCategory, UpdateProduct, GetProductById,
        AddItemToBill, AddBillToUser, GetUserBill, FindBill, UpdateBillAddress,
    };
};

export default useBackend;

//sendData(["AddUser",{name:name, address:address}]);