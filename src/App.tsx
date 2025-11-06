import './App.css'
import { Routes, Route } from 'react-router'
import Home from './Home/Home'
import Booking from './Book/Book'
import Activities from './Activities/Activities'
import Transportation from './transportation/transportation'

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
          <Route path='/booking' element={<Booking/>} />
          <Route path='/activities' element={<Activities/>} />
          <Route path="transportation" element={<Transportation/>} />
        </Routes>
      </div>
      <footer id='footer'>
        <small>Tanitian Island 2025</small>
      </footer>
    </div>
  )
}

export default App
