import React from 'react'
import Headers from './layout/Headers'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Accounts from './pages/Accounts'
import CategoryPage from './components/home/CategoryPage'
// import MediumForYou from './components/MediumForYou'

const App = () => {
  return (
    <>
    <Headers/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accounts" element={<Accounts />} />
                <Route path="/category/:categoryName" element={<CategoryPage/>} />

      </Routes>
    </>
  )
}

export default App
