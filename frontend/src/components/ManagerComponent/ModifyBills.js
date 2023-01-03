//react import

//mui import
import {Grid, Typography, Box, Divider, List, IconButton} from "@mui/material"
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import ListAltIcon from '@mui/icons-material/ListAlt';

//component import 
import ManageBill from "./ManageBill";
import ListBills from "./listBills";

//test data import 
import Bills from "../../test datas/Bills";

//hooks import
import { useEffect, useState } from 'react';
import useBackend from "../../containers/hooks/useBackend";
import { useWebsite } from "../../containers/hooks/WebsiteContext";

//functional component
const ModifyBills = () => {

    const {userBill} = useWebsite();
    const [renderBill, setRenderBill] = useState([]);
    const [viewbill, setViewBill] = useState(true);
    const [listBill, setListBill] = useState(false);


    useEffect(()=>{
        let newUserBill = [...userBill];
        newUserBill.sort(function(a,b){
            let a_value = parseInt(a.billId.split("_")[1]);
            let b_value = parseInt(b.billId.split("_")[1]);
            return (a_value - b_value)*(-1);
        })
        console.log("renderBill: ", newUserBill);
        setRenderBill(newUserBill);
    },[])

    useEffect(()=>{
        console.log('userBill modified.',userBill);
        let newUserBill = [...userBill];
        newUserBill.sort(function(a,b){
            let a_value = parseInt(a.billId.split("_")[1]);
            let b_value = parseInt(b.billId.split("_")[1]);
            return (a_value - b_value)*(-1);
        })
        console.log("renderBill: ", newUserBill);
        setRenderBill(newUserBill);
    },[userBill])

    //function
    const handleView = () =>{
        setViewBill(true);
        setListBill(false)
    }

    const handleList = () =>{
        setViewBill(false);
        setListBill(true);
    }



    return(
        <Box>
            <Box sx={{
                display: "grid",
                gap: 1
            }}>
                <Grid container direction="row" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h6" component="div">
                            訂單管理
                        </Typography>
                    </Grid> 
                    <Grid item>
                        <IconButton
                            onClick={()=>{handleView()}}
                        >
                            <ViewAgendaIcon />
                        </IconButton>
                        <IconButton
                            onClick={()=>{handleList()}}
                        >
                            <ListAltIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Divider />
                {viewbill?
                    <List sx={{
                        display: "grid",
                        gap: 1
                    }}>
                        {renderBill.map((value, index)=>(
                            <ManageBill item={value} key={index} />
                        ))}
                    </List>
                    :<></>}
                {
                    listBill?
                    <ListBills items={renderBill}/>:<></>
                }
            </Box>

        </Box>
    )
}

export default ModifyBills;