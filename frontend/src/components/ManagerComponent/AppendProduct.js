//react import
import {useState} from "react";

//mui import
import {Box, Button} from "@mui/material"

//component import 
import AddCategoryForm from "./AddCategoryForm";
import AddProductForm from "./AddProductForm";

//functional component
const AppendProduct = () => {
    //set state

    //function define


    return(
        <Box sx={{
            display: "grid",
            gap: 1
        }}>
            <AddCategoryForm />
            <AddProductForm />
        </Box>
    )
}

//export 
export default AppendProduct;