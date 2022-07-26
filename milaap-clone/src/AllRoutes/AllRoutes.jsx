import React from 'react'
import { Routes,Route } from 'react-router-dom'
import  Navbar  from '../Components/Navbar'
import Home from '../Components/Pages/Home'
import Donate from '../Components/Pages/Donate'
import Lend from '../Components/Pages/Lend'
import Contact from '../Components/Pages/Contact'
import Pricing from '../Components/Pages/Pricing'
import Details from '../Components/Pages/Details'
import Login from '../Components/Pages/Login'
import Register from '../Components/Pages/Register'


const AllRoutes = () => {
  return (<>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/donate" element={<Donate/>}/>
    <Route path='/home/:id' element={<Details/>}/>
    <Route path="/lend" element={<Lend/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
  </Routes>
   </>
    
  )
}

export default AllRoutes