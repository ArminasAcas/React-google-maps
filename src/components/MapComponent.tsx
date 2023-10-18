import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"
import { useEffect, useState } from "react";
import {setKey, fromAddress} from 'react-geocode';
import "../css/MapComponent.css"

interface locationDataInterface {
    lat: number;
    lng: number;
}

export default function Map(props: {location:string}) {

    const [position, setPosition] = useState<locationDataInterface>({ lat: 0, lng: 0});

    const { isLoaded } = useLoadScript({ id: 'peaceful-tome-402312', googleMapsApiKey: "" });

    async function getGeoLocation() {
        setKey("");

        fromAddress(props.location)
        .then(({ results }) => {
        const { lat, lng } = results[0].geometry.location;

        const positionData = {
            lat: lat,
            lng: lng
        };

        setPosition(positionData);
        })
        .catch(console.error);
    }

    useEffect( () => {getGeoLocation();}, [isLoaded])
    
    if (isLoaded) return(
            <GoogleMap mapContainerClassName="map" center={position} zoom={15} >
                <MarkerF position={position}/>
            </GoogleMap>  
    )
    if (!isLoaded) return(
        <div>Kraunamas Žemėlapis. Palaukite...</div>
    )
}