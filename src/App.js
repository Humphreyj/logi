import { useState, useEffect, useContext } from "react";
//context
import LogiContext from "./Context/LogiContext";
//components
import Header from "./components/header/Header";
import Routes from "./components/routes/Routes";
//actions
import {
  getAllShips,
  getShops,
  getResources,
  getItems,
} from "./actions/apiActions";
//styles
import "./styles/global.scss";

function App() {
  const [allShips, setAllShips] = useState({});
  useEffect(() => {
    setAllShips(getAllShips());
    
    // getShops();
    // getResources();
    // getItems();
  }, []);
  return (
    <LogiContext.Provider value={{allShips}}>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </LogiContext.Provider>
  );
}

export default App;
