import React from 'react';
import logo from '../../assets/logo.png'
import { Link , NavLink } from 'react-router';
import gitHub from '../../assets/gitHub-logo.png'

const NavBar = () => {
    const links = <>
        <NavLink to='/' className={({isActive}) => isActive ? "mr-2 font-semibold border-b-2 border-[#632EE3]" : "mr-2 font-semibold"} ><li>Home</li></NavLink>

        <NavLink to='/apps' className={({isActive}) => isActive ? "mr-2 font-semibold border-b-2 border-[#632EE3]" : "mr-2 font-semibold"}><li >Apps</li></NavLink>

        <NavLink to='/installation' className={({isActive}) => isActive ? "mr-2 font-semibold border-b-2 border-[#632EE3]" : "mr-2 font-semibold"}><li>Installation</li></NavLink>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>

      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>

    </div>
    
    <Link to="/">
        <div className='flex gap-1 items-center'>
        <img className='w-6 h-6' src={logo} alt="" />
        <p className=" text-xl">HERO.IO</p>
        </div>
    </Link>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end flex">
    <button>
        <a href='https://github.com/' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"> <img src={gitHub} alt="" />Contribute</a>
    </button>
  </div>
</div>
    );
};

export default NavBar;