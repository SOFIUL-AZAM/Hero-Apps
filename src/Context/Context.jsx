import React, {  createContext, useState } from 'react';

export const InstallContext = createContext();

const InstallProvider = ({children}) =>{
    const [installedApps, setInstalledApps] = useState([]);

    const installApp = (app) =>{
        setInstalledApps(prev =>[...prev,app]);
    };

    const uninstallApp = (id) =>{
        setInstalledApps(prev => prev.filter(app=>app.id !== id));
    };

    return(
        <InstallContext.Provider value={{installedApps,installApp,uninstallApp}}>
            {children}
        </InstallContext.Provider>
    );
};

export default InstallProvider;