import Map from "./MapComponent";
import Header from "./HeaderComponent";
import Location from "./LocationComponent";
import "../css/App.css"
import { useState} from "react"


const Locations = [
    {
        id: 1,
        imageSource: "/images/Gedimino_Pilis.jpg",
        locationName: "Gedimino Pilis",
        city: "Vilnius",
        adress: "Arsenalo g. 5, 01143 Vilnius",
        locationDescription: "Vilniuje esanti Gedimino pilis simbolizuoja Lietuvos istoriją. Gedimino pilies bokštas yra vienas iš labiausiai turistų lankomų vietų Vilniuje.",
    },
    {
        id: 2,
        imageSource: "/images/Geležinė_lapė.jpg",
        locationName: "Geležinė lapė",
        city: "Šiauliai",
        adress: "Talkšos ežero pietinė pakrantė",
        locationDescription: "Geležinė lapė Lietuvos rekordų knygoje laikoma didžiausia gyvūno skulptūra. Skulptūra sukurta Lietuvos vardo tūkstantmečiui paminėti.",
    },
    {
        id: 3,
        imageSource: "/images/trakų_pilis.jpg",
        locationName: "Trakų pilis",
        city: "Trakai",
        adress: "Karaimų g. 43C",
        locationDescription: "Trakų pilis buvo pastatyta XIV a. antroje pusėje – XV a. pirmajame dešimtmetyje. Ši pilis buvo viena iš LDK valdovų rezidencijų.",
    }
]



export default function App() {

    const [location, setLocation] = useState("");
    
    const locationList = Locations.map((location) => (
        <Location
            key={location.id}
            imageSource={location.imageSource}
            locationName={location.locationName}
            city={location.city}
            adress={location.adress}
            locationDescription={location.locationDescription}
            setState={setLocation}
        />
    ));

    return (
        <div className="app">
            <Header headerText="Lankytinos vietos Lietuvoje"></Header>
            <div className="app__locations">
                {locationList}
            </div>
            {location.length > 0 ? <Map location={location}></Map> : null}
        </div>
    )
}