import { FaSearch, FaMoon, FaSun  } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch  } from 'react-redux';
import { useEffect, useState } from 'react';
//import { toggleTheme } from '../slice/themeSlice.js'

const Header = () =>{
   const { currentUser }  = useSelector((store) => store.user);
   const [searchTerm, setSearchTerm] = useState('');
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const {theme} = useSelector((store) => store.theme);

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
       <div className='flex justify-between bg-slate-200 m-1 p-1' >
        <h1>
            <span className='font-bold text-xl text-red-500 sm:text-3xl ' >Empire Estate</span>
        </h1>
        <form className='flex bg-slate-100 rounded-xl p-1'
        onSubmit={handleSubmit}>
            <input className='bg-transparent py-1 rounded-lg focus:outline-none w-24 sm:w-64' type='text' placeholder=' Search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button><FaSearch className='my-3' /></button>      
        </form>
        {/* <button 
          className='w-12 h-10 hidden sm:inline py-4' onClick={()=>dispatch(toggleTheme())}> 
          {theme === 'light' ? <FaSun /> : <FaMoon/>}    
        </button> */}
        <ul className='flex p-3 gap-1'>
            <li className='sm:inline hover:underline '><Link to="/">Home</Link></li>
            <li className='sm:inline hover:underline '><Link to="/about">About</Link></li>
            {currentUser ? (
              <Link to='/profile'>
              <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile' />
              </Link>
            ) : (
              <Link to='/Signup'>
              <li className=' text-slate-700 hover:underline'>Signup</li>
              </Link>
            )} 
        </ul>
       </div>
    )
}

export default Header