import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Login from './Login';


const Body = () =>{
    

    const appRouter = createBrowserRouter([
        {
          path: "/",
          element : <Login/>
        },
        {
          path: "/home",
          element: <Home />
        },
        {
            path: "/profile",
            element: <Profile />
        },
        {
            path: "/about",
            element: <About />
        },

      ]);


  return (
    <div>
        <RouterProvider router={appRouter} /> 
    </div>
  )
}

export default Body