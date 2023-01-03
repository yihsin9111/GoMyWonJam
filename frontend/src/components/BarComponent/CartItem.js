//react import
import { useNavigate } from 'react-router-dom';

//mui import
import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import {Card, CardContent, CardActionArea, Typography, Divider} from "@mui/material";

//test data import
import Bills from '../../test datas/Bills';

//hooks import
import { useState, useEffect } from 'react';
import useBackend from '../../containers/hooks/useBackend';
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
    const navigate = useNavigate();
    
    //function define
    const handlePay = () => {
        setOpen(false);
        navigate("/check");
    }

    //fetch data
    const { GetBill, DeleteItemFromBill, DeleteItemFromTBill } = useBackend();
    const { bill, currentBillId, total, setTotal, userLineId } = useWebsite();

    useEffect(()=>{
        let tot = 0;
        // bill.items.map((value,index)=>(tot+=value.price*value.number))
        setTotal(tot);
    },[bill])

    const onDeleteItemFromBill= async(i)=>{
        console.log('deleting item '+i+' from bill'+currentBillId)
        DeleteItemFromTBill(userLineId, i);
    }

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
            <Typography variant="h5" component="div">購物車明細</Typography>
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