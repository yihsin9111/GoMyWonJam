// mui Import
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItemIcon from '@mui/material/ListItemIcon';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HelpIcon from '@mui/icons-material/Help';
import ContactsIcon from '@mui/icons-material/Contacts';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';


// navigation import 
import {useNavigate} from "react-router-dom";

// Component Import
import { drawerWidth } from './BarConstDef';

// react import 
import {useState} from "react";


// Styled Component
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

// function component
const BarDrawer = ({open, setOpen, theme}) => {

    //set state
    const [openPersonal, setOpenPersonal] = useState(false);

    //function define
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    
    const handleDrawerClose = () => {
        setOpen(false);
    };

    // navigation define
    const navigate = useNavigate();
    
    const navigateToMain = () => {
      navigate("/buying");
      setOpenPersonal(false);
    }

    const navigateToPersonal = () => {
      navigate("/personal");
      setOpenPersonal(true);
    }

    const navigateToBill = () => {
      navigate("/personal/bills");
    }

    //return
    return(
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem key={"首頁"} disablePadding onClick={()=>{navigateToMain()}}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"首頁"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"基本資料"} disablePadding onClick={()=>{navigateToPersonal()}}>
                <ListItemButton>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary={"基本資料"} />
                </ListItemButton>
              </ListItem>
              <ListItem key={"我的訂單"} disablePadding onClick={()=>{navigateToBill()}}>
                <ListItemButton>
                  <ListItemIcon>
                    <ReceiptIcon />
                  </ListItemIcon>
                  <ListItemText primary={"我的訂單"} />
                </ListItemButton>
              </ListItem>
        </List>
        <Divider />
        <List>
          {['關於此網站', "增新按鍵", "Hi 譯心", "Hi 子緹"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InfoIcon/> : <HelpIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    )
}

export default BarDrawer;



