//react import 

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
import { isEnumType } from 'graphql';
import Input from 'antd/es/input/Input';

//functional component
const CheckPage = () => {
    //set state

    //function define

    //return
    return(
        <Card>
            <CardContent sx={{
                display: "grid",
                gap: 1.5
            }}>
                <Typography variant="h5" component="div">
                    結帳
                </Typography>
                
            </CardContent>
        </Card>
    )

}

//export 
export default CheckPage;