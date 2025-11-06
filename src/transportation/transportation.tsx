import type { JSX } from "react"
import tropicalAirplane from "../assets/airplane-tropical.jpg"
import cruise from "../assets/cruise.jpg"
import "./transportation.css"

type transportProps = {
    Image: string,
}

function Transport(props : transportProps) : JSX.Element{
    return(
        <div className="transport">
            <div className="transportation-image">
                <img src={props.Image} className="transportation-image" alt="" />
            </div>
            <form className="user-info">
                <div className="left-info">
                    <label className="form-label" htmlFor="passport">Passport Number</label>
                    <input type="number" name="passport" id="passport" maxLength={14}/>
                    <label className="form-label" htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" maxLength={130}/>
                    <label className="form-label" htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" maxLength={130} />
                </div>
                <div className="right-info">
                    <label className="form-label" htmlFor="date">Date</label>
                    <input type="datetime-local" name="date" id="date" />
                    <button className="form-button">Book</button>
                </div>
            </form>
        </div>
    )
}

export default function Transportation() : JSX.Element{
    const options : transportProps[] = [{Image: tropicalAirplane}, {Image: cruise}]
    return(
        <div id="transportation-page">
            <div id="transportation-header">
                <h2>Book your way to Taniti Island</h2>
            </div>
            <div id="transportation-bookings">
                {
                    options.map((val, index) => <Transport Image={val.Image} key={index}  />)
                }
            </div>
        </div>
    )
}