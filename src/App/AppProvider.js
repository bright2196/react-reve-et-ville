import React, {createContext, useState} from 'react'
export const AppContext = createContext({})

const AppProvider = ({children}) => {
    const [currentPage, setCurrentPage] = useState('pageGravurePoussiere')
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
