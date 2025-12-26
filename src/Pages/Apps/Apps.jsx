import React, { useState } from "react";
import { useLoaderData } from "react-router";
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import { Link } from 'react-router';

const Apps = () => {
    const appsData = useLoaderData();
    const [searchText,setSearchText]=useState("");

    const filteredApps = appsData.filter((app) => app.title.toLowerCase().includes(searchText.toLowerCase()));
    // console.log(appData)
  return (
    <div>
      <div className="mt-8">
        <h1 className="text-4xl text-center font-bold">Our All Applications</h1>
        <p className="text-gray-500 text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        <div className=" flex justify-between items-center m-2 mt-6 mb-6">
            <p> 
                {searchText
                    ?`(${filteredApps.length})`: `(${appsData.length}) Apps Found`
                }
            </p>

            <input type="text" placeholder="Search apps" className="border px-4 py-2 w-96 rounded-md outline none" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        </div>

        <div className="grid grid-cols-4 gap-3 ml-3 mr-0 mt-5">
          {filteredApps.map((app) => {
            // const totalRatings = app.ratings.reduce(
            //   (sum, r) => sum + r.count,
            //   0
            // );

            return (
              <Link to={`/appDetail/${app.id}`}>
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
            <p className="text-center mt-6 text-red-500 font-semibold">
              No apps found
            </p>
          )}
      </div>
    </div>
  );
};

export default Apps;
