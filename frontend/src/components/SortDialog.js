import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog'
import {Typography} from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

//test Data
import Bills from "../test datas/Bills.js"

const members = ["S.Coups","Jeonghan","Joshua",
"Jun","Hoshi","Wonwoo","Woozi",
"THE8","Mingyu","DK",
"Seungkwan","Vernon","Dino"]

const memberspage=()=>{
    return(
        members.map((member,index)=>{
            const label="順位"+(index+1)
            return(
                <Autocomplete  sx={{gridColumnStart:index%3,gridColumnEnd:index%3+1,marginTop:"8px",marginBottom:"7px"}}
                options={members}
                clearOnEscape
                renderInput={(params) => <TextField {...params} variant="standard" label={label}/>}></Autocomplete>
            )
        })
    )
}

const choosePage=(number,name)=>{
    var list=[]
    for (let index = 0; index < number; index++){
        list.push(
            <Box sx={{display:"grid",gap:1.5,gridColumnStart:index%2,gridColumnEnd:index%2+1}}>
                <Box>
                <Typography variant='h6'>{name}</Typography>
                <Typography variant="caption">第 {index+1} 份</Typography>
                <Box sx={{display:"flex",flexDirection:"column"}}>
                    {memberspage()}
                </Box>
                </Box>
            </Box>
        )
    }
    //console.log(list)
    return(
        list
    )
}

export default function SortDialog({openCart, setOpenCart}) {

  const [Open, setOpen] = React.useState(false);
  const [Submit,setSubmit] = React.useState(false);

  const list = () => {
    return(
        <Box sx={{}}>
            {Bills[0].items.map((value,index)=>{
                if (value.product_type) {
                    for(let i=0;i<value.number;i++){
                        return(
                            <Box sx={{display:"grid",margin:"5%",gap:1.5}}>
                            {choosePage(value.number,value.name)}
                            </Box>
                        )
                    }
            }})}
        </Box>
    )
    };

  return (
    <>
    <Button onClick={()=>{setOpen(true)}} disabled={Submit}>
        test
    </Button>
    <Dialog
            open={Open}
            fullWidth={true}
          >
            {list()}
        <Box sx={{display:"grid"}}>
            <Button variant="contained" color="success" onClick={(e)=>{setSubmit(true);setOpen(false)}}>提交</Button>
        </Box>
    </Dialog>
    </>
  );
}