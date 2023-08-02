import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home'

const Rout = () => {
    React
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default Rout