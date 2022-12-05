import {useState} from 'react';
import InlineMenu from './InlineMenu';
import MenuAppBar from "./MenuAppBar";
import {useMenu} from "./hooks/useMenu";
import MainPlane from "./MainPlane";
import LeftDrawer from "./LeftDrawer";

const FirstPage = () => {
    // const {openBar} = useMenu();

    return(
        <>
            <LeftDrawer />
        </>
        
    )

}

export default FirstPage