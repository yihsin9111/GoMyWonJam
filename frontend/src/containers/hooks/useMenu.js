import {createContext, useContext, useEffect, useState} from "react";

const MenuContext = createContext({
    openlBar: false,
    revealBar: () => {},
});

const MenuProvider = (props) => {
   const [openBar, setOpenBar] = useState(false);

   const revealBar = () => {
    setOpenBar(!openBar);
   }

   return(
        <MenuContext.Provider
            value = {{openBar, revealBar}}
            {...props}
        />
    )
}

const useMenu = () => useContext(MenuContext);



export {useMenu, MenuProvider};