import React from 'react'
import Headers from './layout/Headers'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Accounts from './pages/Accounts'
import BlogDetails from './components/shared/BlogDetails'
import Footer from './layout/Footer'
import NewsLetter from './components/home/NewsLetter'
import ExplorePosts from './pages/ExplorePosts'
import Collaboration from './pages/Collaboration'


const App = () => {
  
  return (
    <>
    <Headers/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails/>} />
        <Route path="/explorecategories" element={<ExplorePosts />} />
        <Route path="/collaborate" element={<Collaboration/>} />
        <Route path="/accounts" element={<Accounts />} />
        

      </Routes>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default App
