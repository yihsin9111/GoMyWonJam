//react import

//mui import
import React from 'react'
import Box from '@mui/material/Box';
import {Card, CardContent, Typography, Divider} from "@mui/material";

//test data import

//hooks import
import { useEffect } from 'react';
import { useWebsite } from '../../containers/hooks/WebsiteContext';

//component import
import CategoryCart from './CategoryCart';

//functional component
const CartInclude = ({open ,setOpen}) => {

    //
    useEffect(()=>{
        console.log("cartitem: ", bill);
    },[])

    //navigate define
    
    //function define

    //fetch data
    const { bill, setTotal } = useWebsite();

    useEffect(()=>{
        let tot = 0;
        // bill.items.map((value,index)=>(tot+=value.price*value.number))
        setTotal(tot);
    },[bill])

    return(
    <Box>
        <Box sx={{
        display:"flex",
        flexDirection:"column",
        paddingBlockEnd:"10px",
        paddingRight:"3%",
        paddingLeft:"3%",
        paddingTop: "2%"
        }}
        >
        <Box sx={{
            display: "grid",
            gap: 1
        }}>
            <Typography color="primary.main" variant="h4" component="div">購物車明細</Typography>
            {
                bill.ItemList.map((value, index)=>(
                    <Card key={index}>
                        <CardContent sx={{
                            display: "grid",
                            gap: 1
                        }}>
                            <Typography variant="h5" component="div">
                                {value.category}
                            </Typography>
                            <Divider />
                            <CategoryCart items={value.items} category={value.category} ind={index} setOpen={setOpen}/>
                        </CardContent>
                    </Card>
                ))
            }
        </Box>
        </Box>
    </Box>
    )
}

//export 
export default CartInclude;