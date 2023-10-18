import Map from "./MapComponent";
import Header from "./HeaderComponent";
import Location from "./LocationComponent";
import "../css/App.css"
import { useState } from "react"

export default function App() {

    const [location, setLocation] = useState("");

    console.log(location.length);

    console.log(location);
    return (
        <div className="app">
            <Header headerText="Lankytinos vietos Lietuvoje"></Header>
            <div className="app__locations">
                <Location imageSource="/images/Gedimino_Pilis.jpg" locationName="Gedimino pilis" city="Vilnius" locationDescription="Vilniuje esanti Gedimino pilis simbolizuoja Lietuvos istoriją." setState={setLocation} adress="Arsenalo g. 5, 01143 Vilnius"></Location>
                <Location imageSource="/images/Gedimino_Pilis.jpg" locationName="Gedimino pilis" city="Vilnius" locationDescription="Atatata" setState={setLocation} adress="Arsenalo g. 5, 01143 Vilnius"></Location>
                <Location imageSource="/images/Gedimino_Pilis.jpg" locationName="Gedimino pilis" city="Vilnius" locationDescription="Atatata" setState={setLocation} adress="Arsenalo g. 5, 01143 Vilnius"></Location>
            </div>
            {location.length > 0 ? <div className="app_map-container"> <Map location={location}></Map> </div> : null}
        </div>
    )

   
}