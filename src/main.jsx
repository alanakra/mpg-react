import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import PlayerList from './components/PlayerList.jsx'
import Player from './components/Player.jsx'
import Home from './components/Home.jsx'
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: '/players',
    element: <PlayerList/>
  },
  {
    path: '/players/:id',
    element: <Player/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="p-8">
      <Navbar/>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)

// From https://github.com/vitejs/vite/discussions/3143
if (import.meta.hot) {
  import.meta.hot.on(
    "vite:beforeUpdate",
    /* eslint-disable-next-line no-console */
    () => console.clear()
  );
}