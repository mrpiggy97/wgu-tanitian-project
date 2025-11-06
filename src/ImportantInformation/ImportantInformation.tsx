import type { JSX } from "react";
import "./ImportantInformation.css"

export default function ImportantInformation() : JSX.Element{
    return(
        <div id="important-information-page">
            <div className="important-info">
                <h2 className="information-header">Transportation</h2>
                <p className="info">
                    Public buses serve Taniti City and run from 5 a.m. to 11 p.m. every day.
                    Private buses serve the rest of the island. Taxis are available in Taniti
                    City, and rental cars can be rented from a local rental agency near the
                    airport. Bikes and helmets are available to rent from several vendors
                    (helmets are required by law). Taniti City is fairly flat and very walkable.
                    Many tourists stay in the area surrounding Merriton Landing: this area is
                    easy to explore on foot.
                </p>
            </div>
            <div className="important-info">
                <h2 className="information-header">Frequently Asked Questions</h2>
                <p className="info">
                    - Power outlets are 120 volts (the same as in the United States).
                <br/>
                    - Alcohol is not allowed to be served or sold between the hours of midnight and 9:00 a.m.
                <br/>
                    - The drinking age on Taniti is 18 and the drinking age is not strictly enforced.
                <br/>
                    - Many younger Tanitians speak fluent English. Very little English is spoken in rural areas, especially by the older residents.
                <br/>
                    - There is one hospital and several clinics. The hospital has many multilingual employees.
                <br/>
                    - Violent crime is very rare on Taniti, but as tourism increases, there are more reports of pickpocketing and other petty crimes.
                <br/>
                    - Taniti enjoys a large number of national holidays, and many tourist attractions and restaurants will be closed on holidays, so visitors should plan accordingly.
                <br/>
                    - Taniti uses the U.S. dollar as its currency, but many businesses will also accept euros and yen. Several banks facilitate currency exchange, and many businesses accept major credit cards.
                </p>
            </div>
            <div className="important-info">
                <h2 className="information-header">About the Island</h2>
                <p className="info">
                    Taniti is a small, tropical island in the Pacific. While the island has an
                    area of less than 500 square miles, the terrain is varied and includes both
                    sandy and rocky beaches, a small but safe harbor, lush tropical rainforests,
                    and a mountainous interior that includes a small, active volcano.
                    Taniti has an indigenous population of about 20,000. Until a recent increase
                    in tourism, most the Tanitian economy was dominated by fishing or agriculture.
                </p>
            </div>
        </div>
    )
}