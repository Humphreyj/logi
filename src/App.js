import { useState, useEffect, useContext } from "react";
//components
import Header from "./components/header/Header";
import Routes from "./components/routes/Routes";
//actions
import {getShips, getShops, getResources,getItems} from './actions/apiActions';
import "./styles/global.scss";


function App() {
  useEffect(() => {
    getShips();
    // getShops();
    // getResources();
    // getItems();
    
  },[])
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
