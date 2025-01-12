import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Router from './Router.jsx'
import HomePage from './Components/Home.jsx'
import Post from './Components/Post.jsx'
import ContextProvider from './Context/Context.jsx'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Router/>}>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/blog' element={<App/>}/>
      <Route path='/post' element={<Post/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router = {routes}/>
    </ContextProvider>
  </React.StrictMode>
)
