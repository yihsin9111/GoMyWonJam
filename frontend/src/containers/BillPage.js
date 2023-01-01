//react import

//mui import
import { Box } from "@mui/material";

//component import
import Bill from "../components/PersonalComponent/Bill";

//test data import 
import Bills from "../test datas/Bills";

//hooks import
import { useWebsite } from "./hooks/WebsiteContext";
import useBackend from "./hooks/useBackend";


//functional component
const BillPage = () => {
    
    //set state

    //function define
    const { userBill } = useWebsite();
    const { GetUserBill } = useBackend();
    
    //return
    return(
        <Box sx={{
            width: 1,
            display: "grid",
            gap: 2
            }}>
            {Bills.map((value, index) => (
                <Bill item={value} key={index}/>
            ))}
        </Box>
    )
}

//export
export default BillPage;