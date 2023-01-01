//react import 
import {useState, useEffect} from "react";

//mui import 
import Button from '@mui/material/Button';
import TextField, { textFieldClasses } from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import dayjs from 'dayjs';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

//component import
import BasicDateTimePicker from "../ManagerComponent/DateTimePicker";

//hook import 
import useBackend from "../../containers/hooks/useBackend";
import { useWebsite } from "../../containers/hooks/WebsiteContext";

//functional component
const UpdateUserForm = () => {
    
    //call hook
    const { userLineId, userData } = useWebsite();
    const { GetUserData } = useBackend();

    //set state
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(dayjs(""));
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    useEffect(()=>{

    })
    //function define
    const Cancel = () => {
        setDate(dayjs(""));
        setName("");
        setOpen(false);
    }

    const onAddCategory = ()=>{
        const newCategory = {cat_name: name, deadLine: date};
        //AddCategory(newCategory);
        setName("");
        setDate(dayjs(""));
        setOpen(false);
    }

    //return
    return(
        <>
        <IconButton color="primary" aria-label="upload picture" 
            component="label" onClick={()=>{setOpen(true)}} sx={{height:40,width:40}}>
            <EditIcon />
        </IconButton>
        <Dialog open={open} onClose={()=>{Cancel()}}>
            <DialogTitle>修改個人資料</DialogTitle>
            <DialogContent sx={{
                display: "grid",
                gap: 1.5
            }}>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="category_name"
                    label="姓名"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={name}
                    onChange={(e)=>{setName(e)}}
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="category_name"
                    label="地址"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={address}
                    onChange={(e)=>{setAddress(e)}}
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="category_name"
                    label="電話"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={phone}
                    onChange={(e)=>{setPhone(e)}}
                />
            </DialogContent>
            <DialogActions>
            <Button onClick={()=>{Cancel()}}>取消</Button>
            <Button onClick={()=>{onAddCategory()}}>增新</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

export default UpdateUserForm;