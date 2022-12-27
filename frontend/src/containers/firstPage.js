import {useState} from 'react';
import InlineMenu from './InlineMenu';
import MenuAppBar from "./MenuAppBar";
import {useMenu} from "./hooks/useMenu";
import MainPlane from "./MainPlane";
import SwipeableTemporaryDrawer from "../components/ProductPage"

const FirstPage = () => {
    const {openBar} = useMenu();

    return(
        <>
            <MenuAppBar />
            {SwipeableTemporaryDrawer()}
            {/* <MainPlane /> */}
            {openBar ? <InlineMenu /> : <></>}
        </>
        
    )

}

export default FirstPage