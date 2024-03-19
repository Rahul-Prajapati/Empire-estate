import React, { useState, useEffect } from 'react'
import { Link , useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../slice/userSlice.js'
import OAuth from '../components/OAuth';
import { validateData } from '../utils/validate.js';

function Signup() {

  const { currentUser } = useSelector((store)=> store.user);
  const [togglelogin, settogglelogin] = useState(true);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errMessage, seterrMessage] = useState("");
  const [mandatory, setMandatory] = useState(false);
 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
      
    });

    if (togglelogin) {
      const message = validateData(formData.username, formData.email,formData.password );
    seterrMessage(message);

    if (message) {
      // seterrMessage;
      setMandatory(false);
      
    } else {
      setMandatory(true)
      seterrMessage
      
    }
    console.log(e.target.value);
      
    } else {
      setMandatory(true);
    }

    
   
  };

  const handleLogin = () => {   
    settogglelogin(!togglelogin);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();  
      if (togglelogin) {
        try {
          console.log("try block");
          console.log(formData);
          setLoading(true);

          const res = await fetch('/api/auth/signup', {
            method:'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          const data = await res.json();
          console.log("data:",data);
    
          if (data.success === false){
            console.log("false")
            setLoading(false);
            setError(data.message);
            return;
          }
    
          setLoading(false);
          setError(null);
          handleLogin();
    
        } catch (error) {
          console.log("catch")
          setLoading(false);
          setError(error.message);
        }
        
        
      } else {

        try {
          // console.log("try block");
          console.log(formData);
          dispatch(signInStart());

          const res = await fetch('/api/auth/signin', {
            method:'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          const data = await res.json();
          console.log("data:",data);
    
          if (data.success === false){
            console.log("false")
            // setLoading(false);
            // setError(data.message);
            dispatch(signInFailure(data.message));
            return;
          }
    
          // setLoading(false);
          // setError(null);
          dispatch(signInSuccess(data));
          navigate("/");
    
        } catch (error) {
          console.log("catch")
          // setLoading(false);
          // setError(error.message);
          dispatch(signInFailure(error.message));
        }
        
      }
  };

  useEffect(()=>{
    // const { currentUser } = useSelector((store)=> store.user);
    { currentUser ? navigate("../profile"):<></>}
  },[])

  return (
    <div 
      className='p-3 mx-auto max-w-lg sm:place-items-center'>
      <h1 
          className='text-3xl text-center font-bold gap-2'> 
          {(togglelogin)? 'Sign Up' : 'Sign In' }
      </h1>
      <form 
          className='flex flex-col gap-1 p-4' 
          onSubmit={
            handleSubmit
            } 
          >

        { (togglelogin)
           ? 
           <input
            type="text" 
            placeholder='username' 
            id='username' 
            className='border p-3 rounded-lg' 
            onChange={handleChange} />
           : <></> 
        }
        <input 
            type="email" 
            placeholder='email' 
            id='email' 
            className='border p-3 rounded-lg ' 
            onChange={handleChange}
        />
        <input 
            type="password" 
            placeholder='password' 
            id='password' 
            className='border p-3 rounded-lg' 
            onChange={handleChange}
        />
        <button 
            className='text-slate-800 rounded-lg border p-3 bg-green-800 hover:opacity-90' 
            type='submit' disabled={!mandatory} >
              {togglelogin ? 'Sign Up' : 'Sign In'}
        </button>
        <OAuth/>
        <p className="text-red-500 p-1">{errMessage}</p>
      </form>
            <div 
                  className='flex ml-5 cursor-pointer ' 
                  onClick={handleLogin} 
            >
            {togglelogin
                   ? 
                   "Already registerd? Sign In now" 
                   :"New to website? Sign Up now "
            }
            </div>
            {error && <p className='text-red-500 ml-5'>{error}</p>}
    </div>
  )
}

export default Signup;