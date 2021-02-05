import './App.scss'
import React from "react";

import AppProvider from './AppProvider'
import Router from './Router'
import useSound from 'use-sound';
import BackgroundSound from './backgroundSound.mp3';




const App = () => {
  // const [page, setPage] = useState("home");
  const [isChecked, setIsChecked] = React.useState(
    false
  );

  const [playActive] = useSound(
    '/sounds/pop-down.mp3',
    { volume: 0.25 }
  );
  const [playOn] = useSound(
    '/sounds/pop-up-on.mp3',
    { volume: 0.25 }
  );
  const [playOff] = useSound(
    '/sounds/pop-up-off.mp3',
    { volume: 0.25 }
  );

  return (
    <AppProvider>
      <div className="App">
        
        <Router/>
      </div>
    </AppProvider>
  );
};

export default App;
