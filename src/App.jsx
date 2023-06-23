import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Navbar'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={} /> */}
      </Routes>
    </div>
  )
}

export default App
