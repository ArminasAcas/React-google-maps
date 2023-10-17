import "../css/App.css";
import Map from "./Map";
import Header from "./Header";


export default function App() {

    return (
        <div className="map-container">
            <Map location="Vilnius"></Map>
        </div>  
    )
}