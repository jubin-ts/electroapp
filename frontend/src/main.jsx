
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Gamepage from './pages/gamepage/Gamepage.jsx'
import About from './pages/gamepage/About.jsx'
import Privacy from './pages/gamepage/Privacy.jsx'
import Terms from './pages/gamepage/Terms.jsx'
import Cookies from './pages/Cookies.jsx'
import Profiles from './pages/Profiles.jsx'
import Walllet from './pages/Walllet.jsx'
import Buycoins from './pages/Buycoins.jsx'
import ReferEarn from './pages/ReferEarn.jsx'
import Settings from './pages/Settings.jsx'
import Login from './Components/Login/Login.jsx'


// import { BrowserRouter, Routes, Route } from 'react-router-dom';




import {
        createBrowserRouter,
         RouterProvider,
      } from "react-router-dom";
      const router = createBrowserRouter([
        {
          path: "/",
          element: <App/>,
        },
        {
          path: "gamepage",
          element: <Gamepage/>,
        },
        
        {
          path:"About",
          element:<About/>,
        },
        {
          path:"Privacy",
          element:<Privacy/>,
        },
        {
          path:"Terms",
          element:<Terms/>,
        },
        {
          path:"Cookies",
          element:<Cookies/>,
        },
        {
          path:"Profiles",
          element:<Profiles/>,
        },
        {
          path:"Walllet",
          element:<Walllet/>,
        },
        {
          path:"Buycoins",
          element:<Buycoins/>,
        },
        {
          path:"ReferEarn",
          element:<ReferEarn/>,
        },
        {
          path:"Settings",
          element:<Settings/>,
        },

        {
          path:"login",
          element:<Login/>,
        },
      
      
        
      ]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <BrowserRouter> */}
      {/* <Routes> */}
        {/* <Route path='login' element={<Login />} /> */}
        {/* <Route path='game' element={<Gamepage/>} /> */}
        {/* <Route path='/' element={<App />} /> */}
      {/* </Routes> */}
    {/* </BrowserRouter> */}

  </React.StrictMode>,
);
