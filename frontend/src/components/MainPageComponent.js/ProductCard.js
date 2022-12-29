// mui import 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListItemText from '@mui/material/ListItemText';
import Drawer from "@mui/material/Drawer";

// react import
import { useNavigate } from "react-router-dom";
import { useState, Fragment } from "react";

// component import
import ProductPage from '../ProductPage'; 
import ProductsTabs from './productsTabs';
import ProductDrawer from './ProductDrawer';

// functional component
const ProductCard = ({item}) => {

    // set state
    const [open, setOpen] = useState(false);
    const [Option, setOption] = useState('');

    // use Navigation   

    // navigate function

    // set toggleDrawer
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

    const handleChange = (event) => {
        setOption(event.target.value);
    };

    const handleClose = (value) => {
        setOpen(value);
    }


    // set const
    const list = () => (
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
                backgroundColor: 'primary.light',
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
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <Button sx={{width:"50%",alignSelf:"flex-end"}}
                variant="outlined"
                onClick={setOpen(false)}>加入購物車</Button>
            </Box>
        </Box>
      );

    // return
    return(
        // <Fragment>
        //     <Card sx = {{ minWidth: 250, maxWidth: 300}} onClick={toggleDrawer}>
        //         <CardActionArea>
        //             <CardMedia
        //                 image ={item.URL}
        //                 height = "80%"
        //                 component = "img"
        //             />
        //             <CardContent>
        //                 <Typography variant="h5" component="div">
        //                     {item.name}
        //                 </Typography>
        //                 <Typography variant="body2" color="text.secondary">
        //                     價格：{item.price}
        //                 </Typography>
        //             </CardContent>
        //         </CardActionArea>
        //     </Card>
        //     <SwipeableDrawer
        //         anchor={"bottom"}
        //         open={open}
        //         onClose={toggleDrawer(false)}
        //         onOpen={toggleDrawer(true)}
        //         >
        //         {list('bottom')}
        //     </SwipeableDrawer>
        //     {/* <ProductPage item={item} open={open} setOpen={setOpen} /> */}
        // </Fragment>
    <div>
        <Fragment>
           <Card sx = {{ minWidth: 250, maxWidth: 300}} onClick={toggleDrawer(true)}>
               <CardActionArea>
                   <CardMedia
                        image ={item.URL}
                        height = "80%"
                        component = "img"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            價格：{item.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Drawer
                anchor={"bottom"}
                open={open}
                onClose={toggleDrawer(false)}
            >
             <ProductDrawer item={item} handleClose={handleClose} />
            </Drawer>
        </Fragment>
    </div>
    )
}

//export 

export default ProductCard;