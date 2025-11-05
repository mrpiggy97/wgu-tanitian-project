import type { JSX } from "react"
import Sightseeing from "../assets/sightseeing.jpg"
import Restaurant from "../assets/restaurants.jpg"
import "./Activities.css"

type ActivityProp = {
    Title : string,
    Image : string,
    Message : string
}

function Activity(props : ActivityProp) : JSX.Element{
    return (
        <div className="activity">
            <div className="activity-title">
                <h2>{props.Title}</h2>
            </div>
            <div className="activity-image">
                <img src={props.Image} className="activity-image" alt="" />
            </div>
            <div className="activity-message">
                <p>{props.Message}</p>
            </div>
        </div>
    )
}

export default function Activities() : JSX.Element{
    const activities : ActivityProp[] = [
        {
            Title : "Sightseeing & Restaurants",
            Image: Sightseeing,
            Message: "Most tourists spend most of their time in Taniti City, which boasts native architecture and nearby white, sandy beaches that encircle Yellow Leaf Bay. Other popular activities include boat or bus tours of the island, hikes in the rainforest, or visits to Taniti’s active volcano. Taniti currently has 10 restaurants: five serve mostly local fish and rice, three serve American-style meals, and two serve Pan-Asian cuisine.",

        },
        {
            Title: "Entretainment",
            Image: Restaurant,
            Message: "Most people visit Taniti to enjoy the beaches, explore the rainforest, and to visit the volcano. However, there are other things to do, including visiting a local history museum, going on chartered fishing tours, snorkeling, zip-lining in the rainforest, visiting several pubs, including a microbrewery, dancing at a new dance club, seeing a movie, taking helicopter rides, playing at an arcade, visiting art galleries, and bowling. Also, a nine-hole golf course should be operational by next year. Many of these activities are located in Merriton Landing, which is a rapidly developing area on the north side of Yellow Leaf Bay." 
        }
    ]
    return (
        <div id="activities-page">
            <div id="title">
                <h2>Activities</h2>
            </div>
            <div id="activities-section">
                {
                    activities.map((act, index) => <Activity Title={act.Title} Image={act.Image} Message={act.Message} key={index} />)
                }
            </div>
        </div>
    )
}