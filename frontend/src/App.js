import logo from './logo.svg';
import './App.css';
//import "antd/dist/antd.css"; 
//import * as React from 'react';
import React from 'react';
import FirstPage from "./containers/firstPage";
import TestPage from "./containers/testPage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Container Import
import MainPage from './containers/MainPage';
// import PersistentDrawerLeft from "./containers/LeftDrawer";

// Component Import
import NavBar from "./components/BarComponent/NavBar";
import {Main, DrawerHeader} from "./components/BarComponent/barPositionHandler";

function App() {
  // set state
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <NavBar open={open} setOpen={setOpen}/>
      <Main>
        <DrawerHeader>Here is the DrawerHeader
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/PersonalPage" element={<PersonalPage />} /> */}
        </Routes>
        </DrawerHeader>
      </Main>
    </Router>

    // <div className="App">
    //   <FirstPage />
    // </div>
  );
}

export default App;
