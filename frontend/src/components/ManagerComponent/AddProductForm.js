//react import 
import {useState} from "react";

//mui import 
import Button from '@mui/material/Button';
import TextField, { textFieldClasses } from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import dayjs from 'dayjs';

//component import
import BasicDateTimePicker from "./DateTimePicker";

//hook import 
import useBackend from "../../containers/hooks/useBackend";


//functional component
const AddProductForm = () => {
    //call hook
    const {AddCategory} = useBackend();

    //set state
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(dayjs(""));
    const [name, setName] = useState("");

    //function define
    const Cancel = () => {
        setDate(dayjs(""));
        setOpen(false);
    }

    const HandleTextChange = (event) => {
        setName(event.target.value);
    }

    const onAddCategory = ()=>{
        console.log("name: ", name);
        console.log("date: ", date.toString());
        const newCategory = {cat_name: name, deadLine: date};
        // AddCategory(newCategory);

    }

    //return
    return(
        <>
        <Button variant="contained" onClick={()=>{setOpen(true)}}>增新商品品項</Button>
        <Dialog open={open} onClose={()=>{setOpen(false)}}>
            <DialogTitle>增新商品品項</DialogTitle>
            <DialogContent sx={{
                display: "grid",
                gap: 1.5
            }}>
            <TextField
                autoFocus
                required
                margin="dense"
                id="category_name"
                label="商品種類名稱"
                type="text"
                fullWidth
                variant="outlined"
                value={name}
                onChange={(e)=>{HandleTextChange(e)}}
            />
            <BasicDateTimePicker date={date} setDate={setDate} />
            </DialogContent>
            <DialogActions>
            <Button onClick={()=>{Cancel()}}>取消</Button>
            <Button onClick={()=>{onAddCategory()}}>增新</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

export default AddProductForm;