import React from 'react'
import Headers from './layout/Headers'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Accounts from './pages/Accounts'
import BlogDetails from './components/shared/BlogDetails'


const App = () => {
  return (
    <>
    <Headers/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails/>} />
        <Route path="/accounts" element={<Accounts />} />

      </Routes>
    </>
  )
}

export default App
