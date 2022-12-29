// react import
import { useState } from "react";
import './App.css';
import "antd/dist/antd.css"; 

// Container Import
import MainPage from './containers/MainPage';
import TestPage from "./containers/testPage";
import ProductPage from "./components/ProductPage";

// Bar Component Import
import NavBar from "./components/BarComponent/NavBar";
import {Main, DrawerHeader} from "./components/BarComponent/barPositionHandler";

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
          <Route path="/product" element={<ProductPage />} />
        </Routes>
        </DrawerHeader>
      </Main>
    </Router>
  );
}

export default App;
