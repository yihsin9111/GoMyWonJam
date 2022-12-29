// react import
import {useState} from "react";

// mui import
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from "@mui/material/Grid";

// component import
import ProductCard from "./ProductCard";

// test data import 
import Products from "../../test datas/Products";

function ProductsTabs() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" variant="fullWidth">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" key="1">
            <Grid container key="1">
              <Box
                sx={{
                  p: 2,
                  bgcolor: 'background.default',
                  display: 'grid',
                  gridTemplateColumns: { md: '1fr 1fr 1fr' },
                  gap: 2,
                }}>
              {Products.map((value,index)=>(
                <Grid item>
                  <ProductCard item={value} key={index} />
                </Grid>))}
              </Box>
            </Grid>
        </TabPanel>
        <TabPanel value="2" key="2">Item Two</TabPanel>
        <TabPanel value="3" key="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}

export default ProductsTabs;
