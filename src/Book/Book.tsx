import type { JSX } from "react";
import FamilyOwned from "../assets/family-owned.jpg"
import CheapHotel from "../assets/cheap-hotel.jpg"
import ExpensiveHotel from "../assets/expensive-hotel.jpg"
import "./Book.css"

type LodgingProps = {
    Price : string,
    Image : string,
    Description : string
}

function Lodging(props : LodgingProps) : JSX.Element{
    return(
        <div className="book">
            <div className="general-info">
                <p>{props.Description}</p>
                <span>Price: {props.Price}</span>
            </div>
            <div className="hotel-image">
                <img src={props.Image} className="book-image" alt="" />
            </div>
            <div className="book-place">
                <span className="book-button">Book</span>
            </div>
        </div>
    )
}

export default function Booking() : JSX.Element{
    const options : LodgingProps[] = [
        {
            Price: "100usd",
            Image : FamilyOwned,
            Description: "Ideal for travelers on a budget, comfortable and provides really good value"
        },
        {
            Price: "250usd",
            Image: CheapHotel,
            Description: "Affordable hotel centered near the beach, exotic and ideal for adventurers",
        },
        {
            Price: "500usd",
            Image: ExpensiveHotel,
            Description: "The most luxurios hotel in all of Taniti Island, there is no better place to book your trip and enjoy in luxury"
        }
    ]
    return (
        <div id="book-page">
            <h2 id="choose-option">Choose One Option</h2>
            {
                options.map((props,index) => <Lodging Price={props.Price} Description={props.Description} Image={props.Image} key={index} />)
            }
        </div>
    )
}