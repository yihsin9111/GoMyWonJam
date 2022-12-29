// react import
import { useState } from "react";
import './App.css';
<<<<<<< HEAD
import "antd/dist/antd.css"; 
=======
//import "antd/dist/antd.css"; 
import { useState } from "react";
>>>>>>> origin/LZT

// Container Import
import MainPage from './containers/MainPage';
import TestPage from "./containers/testPage";
<<<<<<< HEAD
import ProductPage from "./components/ProductPage";
=======
import CartList from './components/CartList';
>>>>>>> origin/LZT

// Bar Component Import
import NavBar from "./components/BarComponent/NavBar";
import {Main, DrawerHeader} from "./components/BarComponent/barPositionHandler";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Router import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // set state
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <NavBar open={open} setOpen={setOpen}/>
      <Main open={open}>
        <DrawerHeader>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/test" element={<TestPage />} />
<<<<<<< HEAD
          <Route path="/product" element={<ProductPage />} />
=======
          <Route path="/cartlist" element={<CartList />} />
>>>>>>> origin/LZT
        </Routes>
        </DrawerHeader>
      </Main>
    </Router>
  );
}

export default App;
