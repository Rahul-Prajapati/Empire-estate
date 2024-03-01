import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom';

function Signup() {
  const [togglelogin, settogglelogin] = useState(true);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(e.target.value);
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
          console.log("try block");
          console.log(formData);
          setLoading(true);

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
            setLoading(false);
            setError(data.message);
            return;
          }
    
          setLoading(false);
          setError(null);
          navigate("/");
    
        } catch (error) {
          console.log("catch")
          setLoading(false);
          setError(error.message);
        }
        
      }
  };

  return (
    <div 
      className='p-3 mx-auto max-w-lg sm:place-items-center'>
      <h1 
          className='text-3xl text-center font-bold gap-2'> 
          {(togglelogin)? 'Signup' : 'Signin' }
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
            type='submit'>
              {togglelogin ? 'Signup' : 'Signin'}
        </button>
      </form>

          {error && <p className='text-red-500 ml-5'>{error}</p>}
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
    </div>
  )
}

export default Signup;