import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { FrontPage } from './components/FrontPage'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<FrontPage />} />
      </Routes>
    </>
  )
}

export default App
