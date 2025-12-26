import React from 'react';
import error from '../../assets/error-404.png'
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        
            <div className="flex flex-col items-center mt-12">
              <img className="w-64 h-64 mb-4"  src={error} alt="" />
              <h1 className="text-2xl font-bold">Oops, page not found!</h1>
              <p>The page you are looking for is not available.</p>
              <Link to='/'
                              onClick={() =>{window.scrollTo(0,0)}}>
                              <button className='mt-4 text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-2 text-white rounded-sm'>Go Back!</button>
                    </Link>
            </div>
    );
};

export default NotFoundPage;