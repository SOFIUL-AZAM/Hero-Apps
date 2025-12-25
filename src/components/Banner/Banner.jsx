import React from 'react';
import googlePlay from '../../assets/google play.png';
import appStore from '../../assets/app store.png';
import hero from '../../assets/hero.png'
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import { Link } from 'react-router';

const Banner = ({data}) => {
    // console.log(data);

    return (
        <div>
            <div className=' max-w-290 mx-auto bg-white mt-11'>
            <div className='max-w-140 w-full mx-auto mt-4 text-center'>
                <h1 className='text-6xl font-bold'>We Build 
                <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'> Productive</span> Apps</h1>
                <p className='text-gray-500 mt-6'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            </div>

            <div className='flex items-center justify-center mt-12 gap-2'>
                <button className='bg-gray-300 rounded'>
                    <a href="https://play.google.com/store/games?hl=en" className='flex items-center gap-2 px-4 py-2 rounded'><img src={googlePlay} alt="" /><span>Google Play</span></a>
                </button>

                <button className='bg-gray-300 rounded'>
                    <a className='flex items-center gap-2 px-4 py-2 rounded' href="https://www.apple.com/app-store/"><img src={appStore} alt="" /><span>App Store</span></a>
                </button>
            </div>

            <div className='flex justify-center mt-12'>
                <img className='w-140' src={hero} alt="" />
            </div>
            
            </div>

            <div className='text-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2 p-10'>
                <h1 className='text-4xl font-bold text-white mb-6'>Trusted by Millions, Built for You</h1>
                <div className='flex justify-around text-white'>
                    <div>
                        <p>Total Downloads</p>
                        <h1 className='text-3xl font-bold'>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>

                    <div>
                        <p>Total Reviews</p>
                        <h1 className='text-3xl font-bold'>906K</h1>
                        <p>46% more than last month</p>
                    </div>

                    <div>
                        <p>Active Apps</p>
                        <h1 className='text-3xl font-bold'>132+</h1>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <h1 className='text-4xl text-center font-bold'>Trending Apps</h1>
                <p className='text-gray-500 text-center'>Explore All Trending Apps on the Market developed by us</p>

                <div className='grid grid-cols-4 gap-3 ml-3 mr-0 mt-5'>
                    {
                        data.map(app =>{

                            const totalRatings = app.ratings.reduce((sum,r) => sum+r.count,0);
                            

                    return(
                        <Link to={`/appDetail/${app.id}`}>

                        <div key={app.id} className='w-72 h-87 p-5 bg-white rounded-sm shadow-md'>
                            <img className='w-70 h-60 rounded-2xl' src={app.image} alt="" />
                        <p className='mt-2 text-xl'>{app.title}</p>
                    
                        <div className='flex justify-between mt-2 mb-3'>
                            <div className='flex items-center gap-2 bg-gray-300 p-2 rounded-md'>
                             <img className='w-6 h-6' src={download} alt="" />
                             <p className='font-semibold'>{app.downloads}</p>
                            </div>

                            <div className='flex items-center gap-2 bg-amber-200 p-2 rounded-md'>
                            <img className='w-6 h-6' src={rating} alt="" />
                        
                            <p className='font-semibold'>{totalRatings}</p>
                            </div>
                        </div>

                         </div>

                        </Link>
                        )
                    })}   
            </div>
            <div className='text-center mt-6'>
                <button className='text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-2 text-white rounded-sm'>Show All</button>
            </div>
            </div>

     </div>   
        
    );
};

export default Banner;