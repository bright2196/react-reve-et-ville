<<<<<<< HEAD
=======
// import { BrowserRouter, Switch, Route } from "react-router-dom";
>>>>>>> b46c41c70551ad11522b76559085ac71ff027c45
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
