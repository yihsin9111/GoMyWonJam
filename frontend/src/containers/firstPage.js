import {useState} from 'react';
import InlineMenu from './InlineMenu';
import MenuAppBar from "./MenuAppBar";
import {useMenu} from "./hooks/useMenu";
import MainPlane from "./MainPlane";

const FirstPage = () => {
    const {openBar} = useMenu();

    return(
        <>
            <MenuAppBar />
            {/* <MainPlane /> */}
            {openBar ? <InlineMenu /> : <></>}
        </>
        
    )

}

export default FirstPage