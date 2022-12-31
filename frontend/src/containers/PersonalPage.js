//react import
import { useState } from 'react'

//mui import
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import { Typography } from "@mui/material";

//mui icon import
import EditIcon from '@mui/icons-material/Edit';

//test data import 
import User from "../test datas/User";

//functional component
const PersonalPage = () => {
    //set state
    const [open, setOpen] = useState(false);

    //function define

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
                <IconButton color="primary" aria-label="upload picture" component="label" onClick={()=>{setOpen(true)}}>
                    <EditIcon />
                </IconButton>
            </Box>
            <Typography variant="body1" color="text.secondary">
                名稱：{User.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                地址：{User.address}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                電話：{User.phoneNumber}
            </Typography>
        </Box>
    )
}

//export
export default PersonalPage;