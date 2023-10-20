import "../css/LocationComponent.css"

export default function Location(props: {imageSource: string, locationName:string, city: string, locationDescription:string, setState: React.Dispatch<React.SetStateAction<any>>, adress: string}) {

    function handleClick() {
        props.setState(props.locationName);
    }

    return (
        <div className="location">
            <div className="location__image-container">
                <img className="location__image" src={props.imageSource}></img>
            </div>
            <h2 className="location__header">{props.locationName}</h2>
            <h3 className="location__city">{props.city + " (" + props.adress + ")"}</h3>
            <p className="location__text">{props.locationDescription}</p>
            <button className="location__button" onClick={handleClick}>Rodyti vietą žemėlapyje</button>
        </div>
    )
}