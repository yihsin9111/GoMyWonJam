// react import
import {useState} from "react";

// Router import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Container Import
import MainPage from './containers/MainPage';

// Bar Component Import
import NavBar from "./components/BarComponent/NavBar";
import {Main, DrawerHeader} from "./components/BarComponent/barPositionHandler";

function App() {
  // set state
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <NavBar open={open} setOpen={setOpen}/>
      <Main open={open}>
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
