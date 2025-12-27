import React, { useContext, useState } from 'react';
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import { InstallContext } from '../../Context/Context';


const Installation = () => {

    const {installedApps, uninstallApp} =useContext(InstallContext);
    const [sort, setSort] = useState("");

    const handleSort = (type) =>{
        setSort(type)
    }

    const sortedApps = [...installedApps].sort((a,b) =>{
        if(sort === "High-Low"){
            return b.ratingAvg - a.ratingAvg;
        }
        if(sort === "Low-High"){
            return a.ratingAvg - b.ratingAvg;
        }
        return 0;
    })

    return (
        <div>

            <div className='flex justify-between items-center'>
                <h1 className='font-semibold'>({installedApps.length}) Apps Found</h1>
                    <details className="dropdown">
                        <summary className="btn m-1">Sort by : {sort?sort:""}</summary>
                         <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={()=> handleSort("High-Low")}>High-Low</a></li>
                        <li><a onClick={()=> handleSort("Low-High")}>Low-High</a></li>
                        </ul>
                    </details>
                </div>


            {
            sortedApps.map(app => (
            <div>
            <div className='flex justify-between items-center w-300 mx-auto mt-3 p-2 bg-white'>
            <div className="flex gap-7 items-center p-2">
                    <img className="w-15 h-14" src={app.image} alt="" />
                    <div>
                      <h1 className="font-bold">{app.title}</h1>
                      <div className="flex justify-around items-center gap-4">
                        <div className='flex justify-center items-center gap-1'>
                          <img className='w-3 h-3' src={download} alt="" />
                          <h1 className="">{app.downloads}</h1>
                        </div>
            
                        <div className='flex justify-center items-center gap-1'>
                          <img className='w-3 h-3' src={rating} alt="" />
                          <h1 className="">{app.ratingAvg}</h1>
                        </div>
        
                        <div>
                          <h1 className="">{app.size}MB</h1>
                        </div>
                      </div>
                    </div>
                </div>
                <div>
                    <button key={app.id} onClick={() => uninstallApp(app.id)} className="p-2 rounded-sm bg-[#00D390] text-white mt-2">
                    UnInstall
                    </button>
                </div>
        </div>
        </div>
                                
        ))
    }
        </div>
    );
};

export default Installation;