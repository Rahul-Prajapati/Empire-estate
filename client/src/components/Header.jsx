import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () =>{
    return (
       <div className='flex justify-between bg-slate-200 m-3 p-4' >
        <h1>
            <span className='font-bold text-3xl text-red-500' >Empire Estate</span>
        </h1>
        <form className='flex bg-slate-100 rounded-xl p-1'>
            <input className='bg-transparent py-1 rounded-lg focus:outline-none w-24 sm:w-64' type='text' placeholder=' Search' />
            <FaSearch className=' my-3  ' />
            
        </form>
        <ul className='flex p-1 gap-1'>
            <li className='sm:inline hover:underline '><Link to="/">Home</Link></li>
            <li className='sm:inline hover:underline '><Link to="/about">About</Link></li>
            <li className='sm:inline hover:underline '><Link to="/profile">Profile</Link></li>
            <li className='sm:inline hover:underline '><Link to="/signup">Signup</Link></li>
        </ul>
        
       </div>
    )
}

export default Header