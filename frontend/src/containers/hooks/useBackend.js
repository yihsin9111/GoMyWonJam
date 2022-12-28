//test datas for frontend testing//
import Products from "../../test datas/Products"
//////////////////////////////////
const client = new WebSocket('ws://localhost:4000');

const sendData =  async(data) =>{
    await client.send(JSON.stringify(data));
    console.log('data send. data:', JSON.stringify(data));
};

const useBackend = () => {

    //--Category handling functions--//
    const AddCategory = (Category) => {
        console.log("Adding category...");
        sendData(["AddCategory",Category]);
    }
    const UpdateCategory = (Category) => {

    }
    const GetProductsByCategory = (name) => {
        console.log("getting products by category "+name+" ...");
        sendData(["GetProductByCategory",name]);
        return Products
    }

    //--Product handling functions--//
    const AddProductToCategory = (Category, Product) => {
        console.log("Adding product to category...");
        sendData(["AddProductToCategory",{Category, Product}]);
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
    const AddBillToUser = (userLineId, items, packing, payment, address)=>{
        console.log("Adding Bill to User..."); 
        sendData(["AddBillToUser",{userLineId, items, package:packing, payment, address}])
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
        AddCategory,
        AddProductToCategory, UpdateProduct, GetProductById,
        AddItemToBill, AddBillToUser, GetUserBill, FindBill, UpdateBillAddress,
    };
};

export default useBackend;

//sendData(["AddUser",{name:name, address:address}]);