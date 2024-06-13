import { useState } from 'react'

import './App.css'
import Header from './Components/Header'
import Main from './Pages/Main/Main'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import ExploreNow from './Pages/Explore/ExploreNow'

function App() {
  

  return (
    <>
     
     <Router>
     <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/explore" element={<ExploreNow />} />

      </Routes>
      <Footer/>
     </Router>

    </>
  )
}

export default App
