// import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.scss'
import AppProvider from './AppProvider'
import Router from './Router'

const App = () => {
  // const [page, setPage] = useState("home");


  return (
    <AppProvider>
      <div className="App">
        <Router/>
      </div>
    </AppProvider>
  );
};

export default App;
