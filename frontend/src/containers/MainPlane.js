import React from 'react';
import {useState} from 'react';
import InlineMenu from './InlineMenu';
import {useMenu} from "./hooks/useMenu";
import { Button } from '@mui/material';


const FirstPage = () => {
    const {openBar} = useMenu();

    return(
        <>
            <div>
                {['left', 'right', 'top', 'bottom'].map((anchor) => (
                    <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                    </React.Fragment>
                ))}
            </div>
        </>
        
    )

}

export default FirstPage