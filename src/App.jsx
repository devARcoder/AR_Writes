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
import { Toaster } from 'react-hot-toast';
import Work from './pages/Work'
import Travel from './pages/Travel'
import Technology from './pages/Technology'
import Business from './pages/Business'
import Health from './pages/Health'
import Startup from './pages/Startup'
import News from './pages/News'
import Finance from './pages/Finance'
import About from './pages/About'

const App = () => {
  
  return (
    <>
    <Headers/>
    <Toaster/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails/>} />
        <Route path="/explorecategories" element={<ExplorePosts />} />
        <Route path="/work" element={<Work />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/business" element={<Business />} />
        <Route path="/health" element={<Health />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/news" element={<News />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/collaborate" element={<Collaboration/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/accounts" element={<Accounts />} />
        

      </Routes>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default App
