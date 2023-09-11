import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Gamepage from './pages/gamepage/Gamepage.jsx'
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
      ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
