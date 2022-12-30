//react import

//mui import
import { Box } from "@mui/material";

//component import
import Bill from "../components/PersonalComponent/Bill";

//test data import 
import Bills from "../test datas/Bills";


//functional component
const BillPage = () => {
    //set state

    //function define

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