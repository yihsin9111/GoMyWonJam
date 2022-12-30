// mui import 
import MuiAppBar from '@mui/material/AppBar';
import {styled, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';

// mui icon import
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// react import
import {useState} from "react";

// Component Import 
import BarDrawer from './barDrawer';
import { drawerWidth } from './BarConstDef';

// styled component
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

// functional component
const NavBar = ({open, setOpen}) => {
    // set state
    const [anchorEl, setAnchorEl] = useState(null);

    // set theme
    const theme = useTheme();

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleDrawer = () => {
        setOpen(!open);
    }
    
    const handleClose = () => {
        setOpen(false);
    }
    
    return (
    <>
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static" style={{ background: '#b0bec5' }} open={open}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={(e)=>{handleDrawer()}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GoMyWonJam
          </Typography>
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <ShoppingCartIcon />
              </IconButton>
              {/* <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu> */}
        </Toolbar>
      </AppBar>
    </Box>
    <BarDrawer open={open} setOpen={setOpen} theme={theme} />
    </>
    )
}

// export

export default NavBar;


