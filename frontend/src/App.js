import logo from './logo.svg';
import './App.css';
//import "antd/dist/antd.css"; 
//import * as React from 'react';
import React from 'react';
import FirstPage from "./containers/firstPage";
import TestPage from "./containers/testPage"
import ProductPage from "./components/ProductPage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<ProductPage/>} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
