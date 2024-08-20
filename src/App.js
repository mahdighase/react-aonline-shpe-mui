import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Announcement from './Components/Announcement/Announcement'

export default function App() {
  return (
    <div>
    <Announcement/>
     <Navbar/>
      <Home/>
      
    </div>
  )
}
