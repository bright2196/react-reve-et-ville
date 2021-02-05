import './App.scss'
import React from "react";

import AppProvider from './AppProvider'
import Router from './Router'


const App = () => {
  return (
    <AppProvider>
      <div className="App" >
        
        <Router/>
      </div>
    </AppProvider>
  );
};

export default App;
