import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = () => useContext(GlobalContext);

const GlobalState = ({ children }) => {

    const [buscar, setBuscar] = useState('');
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const [load, setLoad] = useState(false);

    return (
        <GlobalContext.Provider value={{ buscar, load, mostrarAlerta, setBuscar, setMostrarAlerta, setLoad }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;