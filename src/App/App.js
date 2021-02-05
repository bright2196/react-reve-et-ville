import './App.scss'
import React from "react";

import AppProvider from './AppProvider'
import Router from './Router'


const App = () => {
  // const [page, setPage] = useState("home");
  

  return (
    <AppProvider>
      <div className="App" >
        
        <Router/>
      </div>
    </AppProvider>
  );
};

export default App;
