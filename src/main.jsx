import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import ClubList from './components/ClubList.jsx'
import PlayerList from './components/PlayerList.jsx'
import Home from './components/Home.jsx'
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/clubs",
    element: <ClubList/>
  },
  {
    path: '/players',
    element: <PlayerList/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
