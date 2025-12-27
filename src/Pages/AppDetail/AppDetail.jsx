import React, { useContext } from "react";
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useLoaderData, useParams } from "react-router";
import { InstallContext } from "../../Context/Context";
 import { ToastContainer, toast } from 'react-toastify';


const AppDetail = () => {
  

    const allApps = useLoaderData();
    const {id} = useParams();
    // console.log(id);
    const {installApp, installedApps} = useContext(InstallContext);

    const app = allApps.find(app => app.id === parseInt(id));

    const isInstalled = installedApps.find(item => item.id === app.id);
    
    const handleInstall = () =>{
      installApp(app)
      toast("Installed Successfully");
    }


  return (
    <div>
          <div>
      <div className="flex gap-7 items-center p-4">
        <img className="w-60 h-58" src={app.image} alt="" />
        <div>
          <h1 className="text-xl font-bold mb-2">{app.title}</h1>
          <p className="mt-1 mb-2">Developed by {app.companyName}</p>
          <div className="border border-gray-400"></div>
          <div className="flex justify-around mt-3 mb-3 items-center gap-4">
            <div>
              <img src={download} alt="" />
              <p>Downloads</p>
              <h1 className="text-xl font-bold">{app.downloads}</h1>
            </div>

            <div>
              <img src={rating} alt="" />
              <p>Average Ratings</p>
              <h1 className="text-xl font-bold">{app.ratingAvg}</h1>
            </div>

            <div>
              <img src={review} alt="" />
              <p>Total Reviews</p>
              <h1 className="text-xl font-bold">{app.reviews}</h1>
            </div>
          </div>
          <div>
            <button onClick={handleInstall} disabled={isInstalled} className={`p-2 rounded-sm mt-2 text-white ${isInstalled? "bg-gray-400":"bg-[#00D390]"}`}>
              {isInstalled ?"Installed":"Install Now"}
            </button>
            <ToastContainer />
            
          </div>
        </div>
      </div>

      <div className="border border-gray-400 mt-8 mb-4"></div>

      <div className="mt-15 mr-8">
        <h1 className="ml-15">Ratings</h1>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={app.ratings} layout="vertical" margin={{top : 20 , right: 20, left: 50, bottom: 5}}>

                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis type="number"/>
                <YAxis type="category" dataKey="name"/>
                <Tooltip/>
                <Legend/>

                <Bar dataKey="count" fill="#FF8811"/>
            </BarChart>
        </ResponsiveContainer>
      </div>
        <div className="p-5 ml-1">
            <p className="text-xl font-bold mt-8">Description</p>
            <p className="mt-4 mb-5">{app.description}</p>
        </div>
         </div>
    </div>
  );
};

export default AppDetail;
