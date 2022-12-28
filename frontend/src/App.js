import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css"; 
import * as React from 'react';

// Container Import
import MainPage from './containers/MainPage';

// Bar Component Import
import NavBar from "./components/BarComponent/NavBar";
import {Main, DrawerHeader} from "./components/BarComponent/barPositionHandler";

function App() {
  // set state
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <FirstPage />
    </div>
  );
}

export default App;
