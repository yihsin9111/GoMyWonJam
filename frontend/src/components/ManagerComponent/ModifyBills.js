//react import

//mui import
import {Grid, Typography, Box, Divider} from "@mui/material"

//functional component
const ModifyBills = () => {
    return(
        <Box>
            <Box sx={{
                display: "grid",
                gap: 1
            }}>
                <Grid container direction="row" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h6" component="div">
                            訂單管理
                        </Typography>
                    </Grid> 
                </Grid>
                <Divider />
            </Box>

        </Box>
    )
}

export default ModifyBills;