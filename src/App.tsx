import './App.css'
import { Routes, Route, useLocation } from 'react-router'
import Home from './Home/Home'
import Booking from './Book/Book'
import Activities from './Activities/Activities'
import Transportation from './Transportation/Transportation'
import ImportantInformation from './ImportantInformation/ImportantInformation'

function App() {
  const path = useLocation().pathname
  return (
    <div id='app'>
      <nav id='navbar'>
        <div id='navigational-links'>
          <a href="/" className={path === "/" ? "active" : "none"}>Home</a>
          <a href="/activities"  className={path === "/activities" ? "active" : "none"}>Activities</a>
          <a href="/booking" className={path === "/booking" ? "active" : "none"}>Booking</a>
          <a href="/transportation" className={path === "/transportation" ? "active" : "none"}>Transportation</a>
          <a href="/important-information" className={path === "/important-information" ? "active" : "none"}>Important Information</a>
        </div>
      </nav>
      <div id='views'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/booking' element={<Booking/>} />
          <Route path='/activities' element={<Activities/>} />
          <Route path="/transportation" element={<Transportation/>} />
          <Route path='/important-information' element={<ImportantInformation/>}/>
        </Routes>
      </div>
      <footer id='footer'>
        <small>Taniti Island 2025</small>
      </footer>
    </div>
  )
}

export default App
