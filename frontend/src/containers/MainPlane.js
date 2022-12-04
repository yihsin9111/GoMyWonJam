import {useState, Fragment} from 'react';
import InlineMenu from './InlineMenu';
import {useMenu} from "./hooks/useMenu";
import Drawer from '@mui/material/Drawer';

const MainPlane = () => {
    const {openBar, revealBar} = useMenu();

    return(
        <>
            <Fragment>
                <Drawer
                    open={openBar}
                    onClose={revealBar(false)}
                >
                    <InlineMenu />
                </Drawer>
            </Fragment>

        </>
        
    )

}

export default MainPlane