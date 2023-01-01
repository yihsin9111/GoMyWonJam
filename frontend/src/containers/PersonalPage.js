//react import
import { useState } from 'react'

//mui import
import Box from "@mui/material/Box";
import { Typography, Card, CardContent, IconButton, Toolbar } from "@mui/material";

//mui icon import
import EditIcon from '@mui/icons-material/Edit';

//test data import 
import User from "../test datas/User";

//functional component
const PersonalPage = () => {
    //set state
    const [open, setOpen] = useState(false);

    //function define
    const handleAdjustInform = () => {

    }

    //return
    return(
        <Box sx={{
            border: "10%",
             width: "100%"
            }}>
            <Card sx={{
                width: "100%"
            }}>
                <CardContent sx={{
                    display: "grid",
                    gap: 1
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <Typography variant="h5" component="div" color="text.primary">個人基本資料{" "}</Typography>
                        <IconButton
                            size="small"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={()=>{handleAdjustInform()}}
                            color="inherit"
                            sx={{ mr: 2 }}
                            edge="end"
                            >
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
                </CardContent>
            </Card>
        </Box>
    )
}

//export
export default PersonalPage;