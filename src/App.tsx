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
          <a href="" className={path === "/wgu-tanitian-project/" ? "active" : "none"} onClick={(e) => visitPage(e,"/wgu-tanitian-project/")}>Home</a>
          <a href=""  className={path === "/wgu-tanitian-project/activities" ? "active" : "none"} onClick={(e) => visitPage(e,"/wgu-tanitian-project/activities")}>Activities</a>
          <a href="" className={path === "/wgu-tanitian-project/booking" ? "active" : "none"} onClick={(e) => visitPage(e,"/wgu-tanitian-project/booking")}>Booking</a>
          <a href="" className={path === "/wgu-tanitian-project/transportation" ? "active" : "none"} onClick={(e) => visitPage(e,"/wgu-tanitian-project/transportation")}>Transportation</a>
          <a href="" className={path === "/wgu-tanitian-project/important-information" ? "active" : "none"} onClick={(e) => visitPage(e,"/wgu-tanitian-project/important-information")}>Important Information</a>
        </div>
      </nav>
      <div id='views'>
        <Routes>
          <Route path='/wgu-tanitian-project/' element={<Home/>}/>
          <Route path='/wgu-tanitian-project/booking' element={<Booking/>} />
          <Route path='/wgu-tanitian-project/activities' element={<Activities/>} />
          <Route path="/wgu-tanitian-project/transportation" element={<Transportation/>} />
          <Route path='/wgu-tanitian-project/important-information' element={<ImportantInformation/>}/>
        </Routes>
      </div>
      <footer id='footer'>
        <small>
          Taniti Island 2025. All pictures and other media presented in this website are credited
          to <a href='https://www.pexels.com'>pexels.com</a>
        </small>
      </footer>
    </div>
  )
}

export default App
