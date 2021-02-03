import React, {createContext, useState} from 'react'
// import Home from '../pages/Home/Home';

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
