import type { JSX } from "react";
import "./Home.css"
import taniti1 from "../assets/taniti1.jpg";
import boatSailing from "../assets/boat-sailing.jpg"
import airplane from "../assets/airplane.jpg"
//import { Link } from "react-router";

export default function Home() : JSX.Element{
    return(
        <div id="home">
            <div id="intro">
                <h2 className="welcome-message">Welcome to Taniti Island</h2>
                <p className="welcome-message">
                    Taniti is a small, tropical island in the Pacific. While the island has an
                    area of less than 500 square miles, the terrain is varied and includes both
                    sandy and rocky beaches, a small but safe harbor, lush tropical rainforests,
                    and a mountainous interior that includes a small, active volcano. 
                </p>
                <img src={taniti1} alt="Taniti Island" width="35%" height="60%" />
            </div>
            <div id="links">
                <div id="activities-transportation">
                    <div id="activities">
                        <img src={boatSailing} className="generic-image" alt="" />
                        <p className="activities-presentation">
                            There are many activities people visiting Taniti Island can enjoy,
                            From exploring volcanos, enjoying the beaches and fishing tours,
                            opportunities for a memorable time are abundant in taniti island.
                        </p>
                    </div>
                    <div id="transportation">
                        <img src={airplane} alt="airplane" className="generic-image" />
                        <p className="transportation">
                            Almost all visitors arrive to Taniti by air, though some arrive on a
                            small cruise ship that docks in Yellow Leaf Bay for one night
                            per week. Taniti is served by a small airport that can accommodate
                            small jets and propeller planes. Taniti is in the process of
                            expanding the airport so larger jets will be able to land on the
                            island within the next few years. 
                        </p>
                    </div>
                </div>
                <div id="booking">
                    <a>Book</a>
                </div>
            </div>
        </div>
    )
}