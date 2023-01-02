import { useContext, createContext, useState, useEffect } from 'react'
import client from './wsConnect'

const WebsiteContext = createContext({
    status:     {},
    isManager:  false,
    userLineId: "",
    userData:   {}, 
    userBill:   [],
    bill:       {},
    shopping:   false,
    total:      0,
    currentBillId: "",
    categories: [],
    deadlines:  [],
    products:   [],
})

const WebsiteProvider = (props) => {
    const [status, setStatus]           = useState({});
    const [isManager, setIsManager]     = useState(false);
    const [userLineId, setuserLineId]   = useState("ming"); //default: ming
    const [userData, setUserData]       = useState({});
    const [userBill, setUserBill]       = useState([]);
    const [shopping, setShopping]       = useState(false);
    const [bill, setBill]                 = useState({});
    const [currentBillId, setCurrentBillId] = useState("ming_2022-12-30T09:14:22.000Z");
    const [categories, setCategories]       = useState([]);
    const [deadlines, setDeadlines]         = useState([]);
    const [products, setProducts]           = useState([]);
    const [total, setTotal]                 = useState(0);

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
                setUserBill(payload);
                break;
            }
            case "bill":{
                setBill(payload);
                break;
            }
            case "categories":{
                setCategories(payload);
                console.log('catagories set to:',payload);
                break;
            }
            case "products":{
                setProducts(payload);
                break;
            }
            case "deadlines":{
                setDeadlines(payload);
                console.log('deadlines set to',payload);
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
                setCurrentBillId ,categories, products, bill, total, setTotal
                ,deadlines
            }}
            {...props}
        />
    );
};

const useWebsite = ()=>useContext(WebsiteContext);
export { WebsiteProvider, useWebsite }