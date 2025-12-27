import React, {  createContext, useEffect, useState } from 'react';

export const InstallContext = createContext();
const InstallProvider = ({children}) =>{
    const [installedApps,setInstalledApps] = useState(() =>{
        const storedApps = localStorage.getItem("installedApps");
        return storedApps ? JSON.parse(storedApps) : [];
    });

    const installApp = (app) =>{
        const exists = installedApps.find(item => item.id === app.id)
        if(!exists){
            setInstalledApps(prev => [...prev,app]);
        }
    };

    const uninstallApp = (id) =>{
        setInstalledApps(prev => prev.filter(app=> app.id !==id));
    };

    useEffect(()=>{
        localStorage.setItem(
            "installedApps",
            JSON.stringify(installedApps)
        );
    },[installedApps]);

    return (
        <InstallContext.Provider value={{installedApps,installApp,uninstallApp}}>
            {children}
        </InstallContext.Provider>
    );
};

export default InstallProvider;