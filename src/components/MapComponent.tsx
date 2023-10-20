import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"
import { useEffect, useState, useRef } from "react";
import {setKey, fromAddress} from 'react-geocode';
import "../css/MapComponent.css"

interface locationDataInterface {
    lat: number;
    lng: number;
}

export default function Map(props: {location:string}) {

    const [position, setPosition] = useState<locationDataInterface>({ lat: 0, lng: 0});
    const refMap = useRef<HTMLDivElement | null>(null);

    function handleLoad() {
        refMap.current?.scrollIntoView({ behavior: 'smooth' });
    };

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

    useEffect( () => {getGeoLocation();}, [isLoaded, props.location]);
    useEffect( () => {
        setTimeout( ()=> { handleLoad(); }, 300)
    }, [position]);
    
    if (isLoaded) return(
        <div ref={refMap} className="map">
            <GoogleMap mapContainerClassName="map-container" center={position} zoom={15} >
                <MarkerF position={position}/>
            </GoogleMap> 
        </div>
    )
    if (!isLoaded) return(
        <div>Kraunamas Žemėlapis. Palaukite...</div>
    )
}