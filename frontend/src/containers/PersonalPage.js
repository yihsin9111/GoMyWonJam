//react import
import { useState, useEffect } from 'react'
import { useWebsite } from "../containers/hooks/WebsiteContext";
import useBackend from "../containers/hooks/useBackend"

//mui import
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import { Typography } from "@mui/material";

//mui icon import
import EditIcon from '@mui/icons-material/Edit';

//test data import 
import User from "../test datas/User";

//form component import
import UpdateUserForm from '../components/PersonalComponent/UpdateUserForm';

//functional component
const PersonalPage = () => {
    
    //backend function import
    const { userLineId, userData } = useWebsite();
    const { GetUserData } = useBackend();

    //set state

    //function define
    useEffect(()=>{
        GetUserData(userLineId);
    },[])

    //return
    return(
        <Box sx={{border: "10%"}}>
            <Box sx={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"center",
            }}>
                <Typography gutterBottom variant="h4" component="div" color="text.primary">
                    個人基本資料
                </Typography>
                <UpdateUserForm/>
            </Box>
            <Typography variant="body1" color="text.secondary">
                名稱：{userData.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                地址：{userData.address}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                電話：{userData.phoneNumber}
            </Typography>
        </Box>
    )
}

//export
export default PersonalPage;