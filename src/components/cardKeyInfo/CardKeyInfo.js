import React from "react"
import './CardKeyInfo.css'
import Picto from "../picto/Picto"
import calorieIcon from "../../assets/calories-icon.png"
import proteineIcon from "../../assets/protein-icon.png"
import glucideIcon from "../../assets/glucide-icon.png"
import lipideIcon from "../../assets/lipide-icon.png"

const CardKeyInfo = (props) => {
    const icons = [calorieIcon, proteineIcon, glucideIcon, lipideIcon]
    console.log(props.src);
    return <div className="container-card">
        <div className="box-picto">
            <Picto src={icons.map(icon => icon)} />
        </div>
        <div className="box-info">
            <p className="keyInfo">{props.keyInfo}</p>
            <p className="keyDescription">{props.description}</p>
        </div>
    </div>
}

export default CardKeyInfo