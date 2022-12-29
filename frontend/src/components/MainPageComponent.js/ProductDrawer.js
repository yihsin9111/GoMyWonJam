// mui import
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListItemText from '@mui/material/ListItemText';

// react import

// functional component
const ProductDrawer = ({item, handleClose}) => {

    // function
    const handleChange = () => {

    }

    return(
        <div>
        <Box
          sx={{backgroundColor:'#b0bec5',
          display:"flex",
          flexDirection:"row",
          justifyContent:"center"
          }}
          //onClick={toggleDrawer(anchor, false)}
          //onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box sx={{
                width: 300,
                height:300,
                margin:"20px",
                backgroundColor: 'primary.dark',
            }}>
                <img src={item.URL} width="300px" height="300px"></img>
            </Box>
            <Box sx={{flexDirection:"column",
                    display:"flex",
                    backgroundColor:'#b0bec5',
                    justifyContent:"space-between",
                    justifyItems:"center",
                    paddingBottom:"10px"}}>
                <Box sx={{flexDirection:"display",
                          alignContent:"center",
                          margin:"10px"}}>
                    <ListItemText primary={"PRODUCT_NAME"} secondary={"Genre"}/>
                </Box>
                <TextField label="數量"
                helperText="請輸入數量"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                InputProps={{
                type:"number",
                defaultValue:1,
                startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}/>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">選項</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Option}
                    label="選項"
                    onChange={handleChange}>
                        <MenuItem value={"10"}>Ten</MenuItem>
                        <MenuItem value={"20"}>Twenty</MenuItem>
                        <MenuItem value={"30"}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <Button sx={{width:"50%",alignSelf:"flex-end"}}
                variant="outlined"
                onClick={()=>{handleClose(false)}}>加入購物車</Button>
            </Box>
        </Box>
        </div>
    )
}

//export
export default ProductDrawer;
