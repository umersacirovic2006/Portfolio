import './App.css'
import { Routes, Route } from 'react-router-dom'
import Demo from './pages/Demo/Demo'
import Home from './pages/Home/Home'
import About from './pages/About/About'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Demo />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
