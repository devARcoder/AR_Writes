import React from 'react'
import Headers from './layout/Headers'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Accounts from './pages/Accounts'


const App = () => {
  return (
    <>
    <Headers/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accounts" element={<Accounts />} />

      </Routes>
    </>
  )
}

export default App
