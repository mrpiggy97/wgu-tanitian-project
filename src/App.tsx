import './App.css'
import { Routes, Route } from 'react-router'
import Home from './Home/Home'

function App() {

  return (
    <div id='app'>
      <nav id='navbar'>
        <a href="">Home</a>
        <a href="">Activities</a>
        <a href="">Booking</a>
        <a href="">Transportation</a>
        <a href="">Important Information</a>
      </nav>
      <div id='views'>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
      <footer id='footer'>
        <small>Tanitian Island 2025</small>
      </footer>
    </div>
  )
}

export default App
