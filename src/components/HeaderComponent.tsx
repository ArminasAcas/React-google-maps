import "../css/HeaderComponent.css"

export default function Header(props: {headerText:string}){

    return (
        <span className="header">{props.headerText}</span>
    )
}