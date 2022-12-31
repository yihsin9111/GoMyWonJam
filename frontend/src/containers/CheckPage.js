//react import 

//mui import 
import { Card, CardContent, Typography } from "@mui/material";

//functional component
const CheckPage = () => {
    //set state

    //function define

    //return
    return(
        <Card>
            <CardContent sx={{
                display: "grid",
                gap: 1.5
            }}>
                <Typography variant="h5" component="div">
                    結帳
                </Typography>
                
            </CardContent>
        </Card>
    )

}

//export 
export default CheckPage;