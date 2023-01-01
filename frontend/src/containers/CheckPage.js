//react import 
import React from 'react'

//mui import 
import { Card, CardContent, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField'
import  Divider  from '@mui/material/Divider';

//component import 
import Receipt from '../components/PersonalComponent/Receipt';

//test Data
import Bills from "../test datas/Bills"
import { Grid } from 'antd';
import Item from 'antd/es/list/Item';
//import { isEnumType } from 'graphql';
import Input from 'antd/es/input/Input';

//hooks import
import { useWebsite } from './hooks/WebsiteContext'; 

//functional component
const CheckPage = () => {
    //set state
    const [PackageOption, setPackageOption] = React.useState('');
    const [PaymentOption, setPaymentOption] = React.useState('');
    const [Phone, setPhone] = React.useState('');
    
    //hooks
    const {bill} = useWebsite();

    //function define
    const handlePackage = (event) => {
        setPackageOption(event.target.value);
    };

    const handlePayment = (event) => {
        setPaymentOption(event.target.value);
    };

    const handlePhone = (e) => {
          setPhone(Phone+e.target.value);
      };

    const list=()=>{
        return(
            <Box sx={{display:"grid",gap:1.5}}>
                <Typography variant='h5'>結帳</Typography>
                <Receipt item={bill.items||[]} />
                <Box>
                    <Typography variant='h6' sx={{display:"flex",flexDirection:"row"}}>總金額</Typography>
                    <Typography variant='body2' sx={{display:"flex",flexDirection:"row-reverse"}}>{Bills[0].total}</Typography>
                </Box>
                <Divider></Divider>
            </Box>
        )
    }
        
    //return
    return(
        <Card sx={{width:"100%"}}>
            <CardContent sx={{
                display: "grid",
                gap: 1.5
            }}>
                {list()}
                <TextField
                    id="PaymentSelect"
                    select
                    margin="dense"
                    value={PaymentOption}
                    label="付款方式"
                    onChange={(e)=>{handlePayment(e)}}
                >
                        <MenuItem value={"貨到付款"}>貨到付款</MenuItem>
                        <MenuItem value={"匯款"}>匯款</MenuItem>
                </TextField>
                <TextField
                    id="PackageSelect"
                    select
                    margin="dense"
                    label="包材"
                    defaultValue={PackageOption}
                    onChange={(e)=>{handlePackage(e)}}
                >
                        <MenuItem value={"紙箱"}>紙箱</MenuItem>
                        <MenuItem value={"破壞袋"}>破壞袋</MenuItem>
                </TextField>
                <Divider></Divider>
                <Typography variant="body1">收件人資訊</Typography>
                <TextField
                    id="ReceiverName"
                    margin="dense"
                    label="姓名"
                    //defaultValue="小名"
                    onChange={(e)=>{handlePackage(e)}}
                >
                </TextField>
                <TextField
                    id="ReceiverPhone"
                    margin="dense"
                    label="手機"
                    defaultValue={Phone}
                    onChange={(e)=>{handlePhone(e)}}
                    inputMode="tel"
                >
                </TextField>
                <TextField
                    id="ReceiverAddress"
                    margin="dense"
                    label="收件7-11門市"
                    //defaultValue={"小名"}
                    onChange={(e)=>{handlePackage(e)}}
                >
                </TextField>
                <Button variant="contained">結帳</Button>
            </CardContent>
        </Card>
    )

}


//export 
export default CheckPage;