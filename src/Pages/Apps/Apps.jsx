import React, { useState } from "react";
import { useLoaderData } from "react-router";
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import { Link } from 'react-router';
import appError from '../../assets/App-Error.png'
import { useLoader } from "../../Context/LoaderContext";
// import { InstallContext } from "../../Context/Context";

const Apps = () => {
    const appsData = useLoaderData();
    const [searchText,setSearchText]=useState("");

    const filteredApps = appsData.filter((app) => app.title.toLowerCase().includes(searchText.toLowerCase()));
    // console.log(appData)

    const {showLoader, hideLoader} =useLoader();

    // const {installApp, installedApps} = useContext(InstallContext)

    const handleSearch = (e) => {
      const value = e.target.value;
      showLoader ("Searching Apps...");

      setTimeout(() => {
        setSearchText(value);
        hideLoader();
      }, 300);
    };

  return (
    <div>
      <div className="mt-8">
        <h1 className="text-4xl text-center font-bold">Our All Applications</h1>
        <p className="text-gray-500 text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        <div className=" flex justify-between items-center m-2 mt-6 mb-6">
            <p className="font-semibold"> 
                {searchText
                    ?`(${filteredApps.length})`: `(${appsData.length}) Apps Found`
                }
            </p>

            <input type="text" placeholder="Search apps" className="border px-4 py-2 w-96 rounded-md outline none" value={searchText} onChange={handleSearch} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 ml-3 mr-0 mt-5">
          {filteredApps.map((app) => {

            return (
              <Link onClick={() => window.scrollTo(0,0)} to={`/appDetail/${app.id}`}>
                <div
                  key={app.id}
                  className="w-72 h-87 p-5 bg-white rounded-sm"
                >
                  <img
                    className="w-70 h-60 rounded-2xl"
                    src={app.image}
                    alt=""
                  />
                  <p className="mt-2 text-xl">{app.title}</p>

                  <div className="flex justify-between mt-2 mb-3">
                    <div className="flex items-center gap-2 bg-gray-300 p-2 rounded-md">
                      <img className="w-6 h-6" src={download} alt="" />
                      <p className="font-semibold">{app.downloads}</p>
                    </div>

                    <div className="flex items-center gap-2 bg-amber-200 p-2 rounded-md">
                      <img className="w-6 h-6" src={rating} alt="" />

                      <p className="font-semibold">{app.ratingAvg}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        {filteredApps.length === 0 && (
            <div className="flex flex-col items-center mt-12">
              <img className="w-64 h-64 mb-4"  src={appError} alt="" />
              <h1 className="text-2xl font-bold">OPPS!! APP NOT FOUND</h1>
              <p>The App you are requesting is not found on our system.  please try another apps</p>
              <Link to='/apps'
                              onClick={() =>{setSearchText(""); window.scrollTo(0,0)}}>
                              <button className='mt-4 text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-2 text-white rounded-sm'>Go Back!</button>
                              </Link>
            </div>
          )}
      </div>
    </div>
  );
};

export default Apps;
