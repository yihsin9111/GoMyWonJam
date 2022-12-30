//react import 
import Box from "@mui/material/Box";
import {Card, CardContent} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Typography, List, Button } from "@mui/material";


//mui import 

//component import 
import Receipt from "./Receipt";
import TimeLine from "./TimeLine";

//functional component
const Bill = ({item, id}) => {
    //set state

    //function define

    //const define


    //return 
    return(
        <Card sx={{
            justifyContent:"center",
        }}>
            <CardContent sx={{
                display: "grid",
                gap: 1.5
            }}>
            <Typography variant="h6" component="div">
                訂單編號：{item.userLineId}
            </Typography>
            <Box sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 3
            }}>
                <Box sx={{
                    display: "grid",
                    gap:1
                }}>
                    <Box>
                        <Receipt item={item.items} />
                    </Box>
                    <Typography variant="body1" component="div">
                        總價：{item.total}
                    </Typography>
                </Box>
                <Box sx={{
                    display: "grid",
                    gap: 1
                }}>
                    <Box>
                        <TimeLine status={item.status} payment={item.payment} />
                    </Box>
                    <Box sx={{
                        display: "grid",
                        gap: 1,
                        width: "100%"
                    }}>
                        <Typography variant="body2" component="div">
                            付款方式：{item.payment}
                        </Typography>
                        <Typography variant="body2" component="div">
                            包裝方式：{item.package}
                        </Typography>
                        <Typography variant="body2" component="div" sx={{
                            width: "100%",
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr"
                            }}>
                            地址：{item.address}
                            {(item.status <= 3)? <Button variant="outlined" size="small" align="right">地址修改</Button>:<></>}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            </CardContent>
        </Card>
    )
}

//export 
export default Bill;