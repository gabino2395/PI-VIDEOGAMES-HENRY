import { useState } from 'react'
import LandingPage from "./components/landing/landingPage"
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './components/home/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/home" element={<Home/>} />

      </Routes>
    </>
  )
}

export default App
