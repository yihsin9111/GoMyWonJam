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
import { MenuItem } from "@mui/material";

//component import
import BasicDateTimePicker from "./DateTimePicker";

//hook import 
import useBackend from "../../containers/hooks/useBackend";

//test const define
const category = [
    {
        value: "Spring",
        label: "spring"
    },
    {
        value: "Summer",
        label: "summer"
    },
    {
        value: "Winter",
        label: "winter"
    },
    {
        value: "Autumn",
        label: "autumn"
    }
]


//functional component
const AddProductForm = () => {
    //call hook
    const {AddCategory} = useBackend();

    //set state
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(dayjs(""));
    const [name, setName] = useState("");
    const [whichCategory, setWhichCategory] = useState("");

    //function define
    const Cancel = () => {
        setDate(dayjs(""));
        setOpen(false);
    }

    const HandleCategory = (event) => {
        setWhichCategory(event.target.value);
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
        <Dialog open={open} onClose={()=>{setOpen(false)}} maxWidth={"md"}>
            <DialogTitle>增新商品品項</DialogTitle>
            <DialogContent sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 1.5
            }}>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="category_name"
                    label="商品名稱"
                    type="text"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    id="outlined-select-category"
                    select
                    required
                    margin="dense"
                    label="商品種類"
                    value={whichCategory}
                    onChange={(e)=>{HandleCategory(e)}}
                >
                    {category.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="category_name"
                    label="商品照片網址"
                    type="text"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="category_name"
                    label="商品價格"
                    type="text"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="category_name"
                    label="備註"
                    type="text"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="category_name"
                    label="product type"
                    type="text"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="category_name"
                    label="option type"
                    type="text"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="category_name"
                    label="option number"
                    type="text"
                    fullWidth
                    variant="outlined"
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

export default AddProductForm;