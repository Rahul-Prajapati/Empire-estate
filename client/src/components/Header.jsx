import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  { store, persistor } from '../redux/store.js';
import { useEffect, useState } from 'react';

const Header = () =>{

   const { currentUser }  = useSelector((store) => store.user);
   const [searchTerm, setSearchTerm] = useState('');
   const navigate = useNavigate();
   const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

    return (
       <div className='flex justify-between bg-slate-200 m-3 p-4' >
        <h1>
            <span className='font-bold text-3xl text-red-500' >Empire Estate</span>
        </h1>
        <form className='flex bg-slate-100 rounded-xl p-1'
        onSubmit={handleSubmit}>
            <input className='bg-transparent py-1 rounded-lg focus:outline-none w-24 sm:w-64' type='text' placeholder=' Search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button><FaSearch className=' my-3  ' /></button>
            
        </form>
        <ul className='flex p-1 gap-1'>
            <li className='sm:inline hover:underline '><Link to="/">Home</Link></li>
            <li className='sm:inline hover:underline '><Link to="/about">About</Link></li>
           
         
            <Link to='/profile'>
            {currentUser ? (
              <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile' />
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link>
          
        </ul>
        
       </div>
    )
}

export default Header