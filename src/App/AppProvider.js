import React, {createContext, useState} from 'react'
<<<<<<< HEAD
=======
// import Home from '../pages/Home/Home';

>>>>>>> b46c41c70551ad11522b76559085ac71ff027c45
export const AppContext = createContext({})

const AppProvider = ({children}) => {
    const [currentPage, setCurrentPage] = useState('home')
    const states = {
        currentPage, 
        setCurrentPage
    }
    return (
        <AppContext.Provider value={states}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
