import './App.css'
import { Routes, Route, useLocation, useNavigate } from 'react-router'
import Home from './Home/Home'
import Booking from './Book/Book'
import Activities from './Activities/Activities'
import Transportation from './Transportation/Transportation'
import ImportantInformation from './ImportantInformation/ImportantInformation'

function App() {
  const path = useLocation().pathname
  const navigator = useNavigate()
  const visitPage = (event : React.MouseEvent,newPath : string) : void => {
    event.preventDefault()
    navigator(newPath)
  }
  return (
    <div id='app'>
      <nav id='navbar'>
        <div id='navigational-links'>
          <a href="" className={path === "/" ? "active" : "none"} onClick={(e) => visitPage(e,"/")}>Home</a>
          <a href=""  className={path === "/activities" ? "active" : "none"} onClick={(e) => visitPage(e,"/activities")}>Activities</a>
          <a href="" className={path === "/booking" ? "active" : "none"} onClick={(e) => visitPage(e,"/booking")}>Booking</a>
          <a href="" className={path === "/transportation" ? "active" : "none"} onClick={(e) => visitPage(e,"/transportation")}>Transportation</a>
          <a href="" className={path === "/important-information" ? "active" : "none"} onClick={(e) => visitPage(e,"/important-information")}>Important Information</a>
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
