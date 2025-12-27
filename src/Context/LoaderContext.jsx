import React, { createContext, useContext, useState } from 'react';

const LoaderContext = createContext();

export const useLoader = () => useContext(LoaderContext);

const LoaderProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [text,setText] = useState("Loading...");

    const showLoader = (msg = "Loading...") => {
        setText(msg);
        setLoading(true);
    };

    const hideLoader = () => setLoading(false);

    return(
        <LoaderContext.Provider value ={{loading,text,showLoader, hideLoader}}>
            {children}
        </LoaderContext.Provider>
    )
}

export default LoaderProvider;