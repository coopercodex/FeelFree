import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { FrontPage } from './components/FrontPage'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<FrontPage />} /> */}
      </Routes>
    </>
  )
}

export default App
