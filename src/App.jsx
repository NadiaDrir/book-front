import React from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from "./Pages/Home"
import { useState, useEffect } from 'react'
import Creation from "./Pages/Creation"
import Delete from "./Pages/Delete"
import Detailes from "./Pages/Detailes"
import HomeLayout from "./layouts/homelayouts"
import Miseajour from "./Pages/Miseajour"
import axios from 'axios';

// 


export default function App() {
  const [book, setbook] = useState([    
  ])
  useEffect(() => {
   
    axios.get('http://localhost:4200/api/book')  
      .then(res => {setbook(res.data.book)})
      .catch(err => console.log(err))

  },[])
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomeLayout />} >
        <Route index Component={() => <Home book={book} />} />
        <Route path="Creation" Component={Creation} />
        <Route path="Delete/:id" Component={Delete}/>
        <Route path="Miseajour/:id" Component={Miseajour}/>
        <Route path='Detailes/:id' Component={Detailes}/>
                    
        </Route>)
        )
        return(
        <RouterProvider  router={router}/>
        )
        }
