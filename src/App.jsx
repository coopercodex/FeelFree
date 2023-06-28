import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import {Justin} from './components/Justin'
import { Featured } from './components/Featured'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
        <>
        <Justin />
        <Featured />
        </>
        } />
      </Routes>
    </>
  )
}

export default App
