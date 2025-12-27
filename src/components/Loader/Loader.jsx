import React from 'react';
import { useLoader } from '../../Context/LoaderContext';
import logo from '../../assets/logo.png';

const Loader = () => {
    const {loading, text} = useLoader();
    if(!loading) return null;

    return (
        <div>
            <div className='fixed inset-0 bg-white bg-opacity-100 flex justify-center items-center z-50 '>
                <img src={logo} className='w-20 h-20 animate-spin' alt="" />
                <p className='text-gray-400 mt-4 text-lg font-bold'>{text}</p>
            </div>
        </div>
    );
};

export default Loader;