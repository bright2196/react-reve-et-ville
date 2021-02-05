import React, {createContext, useState} from 'react'
export const AppContext = createContext({})

const AppProvider = ({children}) => {
    // const [currentPage, setCurrentPage] = useState('pageGravurePoussiere')
    const [currentPage, setCurrentPage] = useState('home')
    const [BlowDetected, setBlowDetected] = useState(false)
    const states = {
        currentPage, 
        setCurrentPage,
        BlowDetected, 
        setBlowDetected
    }
    return (
        <AppContext.Provider value={states}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
