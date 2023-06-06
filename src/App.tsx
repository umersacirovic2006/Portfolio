import './App.css'
import { Routes, Route } from 'react-router-dom'
import Demo from './pages/Demo/Demo'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Demo />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </div>
  )
}

export default App
