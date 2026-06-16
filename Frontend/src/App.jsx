import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Services from './pages/Services'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Error404 from './pages/Error404'
import Footer from './components/Footer'
import Logout from './pages/Logout'

function App() {

  return (
    <>
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error404/>} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
