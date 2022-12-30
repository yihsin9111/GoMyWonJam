import { useContext, createContext, useState, useEffect } from 'react'
import client from './wsConnect'

const WebsiteContext = createContext({
    status:     {},
    isManager:  false,
    userLineId: "",
    userData:   {}, 
    userBill:   [],
    shopping:   false,
    currentBillId: "",
    categories: "",
    products:   [],
})

const WebsiteProvider = (props) => {
    const [status, setStatus]           = useState({});
    const [isManager, setIsManager]     = useState(false);
    const [userLineId, setuserLineId]   = useState("ming"); //default: ming
    const [userData, setUserData]       = useState({});
    const [userBill, setuserBill]       = useState([]);
    const [shopping, setShopping]       = useState(false);
    const [currentBillId, setCurrentBillId] = useState("");
    const [categories, setCategories]       = useState("");
    const [products, setProducts]           = useState([]);

    client.onmessage = (byteString) => {
        const {data} = byteString;
        const [task, payload] = JSON.parse(data);
        switch (task){
            case "init":{
                setuserLineId(payload.lineId);
                break;
            }
            case "status":{
                setStatus(payload);
                break;
            }
            case "userData":{
                setUserData(payload);
                break;
            }
            case "userBill":{
                setuserBill(payload);
                break;
            }
            case "categories":{
                setCategories(payload);
                break;
            }
            case "products":{
                setProducts(payload);
                break;
            }
            default : break;
        }
    }

    return (
        <WebsiteContext.Provider
            value={{
                status, userLineId, userData,  
                userBill, shopping, setShopping, currentBillId, 
                setCurrentBillId ,categories, products,
            }}
            {...props}
        />
    );
};

const useWebsite = ()=>useContext(WebsiteContext);
export { WebsiteProvider, useWebsite }