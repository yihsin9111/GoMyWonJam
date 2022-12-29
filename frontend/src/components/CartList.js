import React from 'react'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListItemText from '@mui/material/ListItemText';

//test Data
import Bills from "../test datas/Bills.js"
import { Divider } from 'antd';

export default function CartList() {
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
  };

  const [PackageOption, setPackageOption] = React.useState('');
  const [PaymentOption, setPaymentOption] = React.useState('');
  const [Open, setOpen] = React.useState("false");

  const handlePackage = (event) => {
    setPackageOption(event.target.value);
  };

  const handlePayment = (event) => {
    setPaymentOption(event.target.value);
  };

  const list = () => (
    <>
    <Box
      sx={{backgroundColor:'#b0bec5',
      display:"flex",
      flexDirection:"column",
      paddingBlockEnd:"10px",
      paddingRight:"10px",
      minWidth:"250px",
      paddingLeft:"12px",
      }}
    >
        {Bills[0].items.map((value,index)=>(
            <>
            <Box sx={{flexDirection:"column",
            display:"flex",
            backgroundColor:'#b0bec5',
            justifyContent:"space-between",
            justifyItems:"center",
            alignContent:"center",
            }}>
                <ListItemText primary={value.name} secondary={value.note}/>
                <ListItemText primary={"選項 "+value.option}></ListItemText>
                <ListItemText primary={"數量 "+value.number}></ListItemText>
                <ListItemText primary={"金額 "+value.price*value.number}></ListItemText>
            </Box>
            <Button sx={{width:"50%",alignSelf:"flex-end"}}
            variant="outlined"
            color='error'
            //delete function
            //onClick={}
            >刪除此商品</Button>
            <Divider></Divider>
            </>
        ))}
        <ListItemText primary={"總金額 "+Bills[0].total} sx={{paddingBlockEnd:"10px"}}/>
        <FormControl sx={{ m: 1, width: "50%",paddingBlockEnd:"10px"}}>
            <InputLabel id="payment">付款方式</InputLabel>
            <Select
            labelId="payment"
            id="payments"
            value={PaymentOption}
            label="付款方式"
            onChange={handlePayment}>
                <MenuItem value={"貨到付款"}>貨到付款</MenuItem>
                <MenuItem value={"匯款"}>匯款</MenuItem>
            </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: "50%",paddingBlockEnd:"10px"}}>
            <InputLabel id="package">包材</InputLabel>
            <Select
            labelId="package"
            id="packages"
            value={PackageOption}
            label="包材"
            onChange={handlePackage}>
                <MenuItem value={"紙箱"}>紙箱</MenuItem>
                <MenuItem value={"破壞袋"}>破壞袋</MenuItem>
            </Select>
        </FormControl>
        <Button sx={{width:"50%",alignSelf:"flex-end"}}
        variant="contained"
        onClick={toggleDrawer(false)}>結帳</Button>
    </Box>
    </>
    );

  return (
    <div>
        <React.Fragment>
          <Button onClick={toggleDrawer(true)}>{'The Product'}</Button>
          <SwipeableDrawer
            anchor={"right"}
            open={Open}
            onClose={toggleDrawer(false)}
          >
            {list('bottom')}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}
