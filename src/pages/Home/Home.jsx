import React from 'react'
import Announcement from '../../Components/Announcement/Announcement'
import Navbar from '../../Components/Navbar/Navbar'
import Slider from '../../Components/Slider/Slider'
import Categories from '../../Components/Categories'
import Footer from '../../Components/Footer/Footer'
import Products from '../../Components/Products'
import Newsletter from '../../Components/Newsletter'


const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
