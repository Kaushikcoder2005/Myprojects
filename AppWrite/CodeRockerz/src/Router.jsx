import React,{useContext} from 'react'
import Navbar from './Components/Navbar'
import { Route } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Post from './Components/Post'
import ContextProvider, { Context } from './Context/Context'




function Router() {
  
  
  return (
    <>
    
      <Navbar/>
    
      <Outlet/>  

    </>
  
  )
}

export default Router
