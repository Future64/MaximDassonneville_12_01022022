import React from "react"
import './CardKeyInfo.css'
import Picto from "../picto/Picto"

const CardKeyInfo = (props) => {
    return <div className="container-card">
        <div className="box-picto">
            <Picto src={props.src} />
        </div>
        <div className="box-info">
            <p className="keyInfo">{props.keyInfo}</p>
            <p className="keyDescription">{props.description}</p>
        </div>
    </div>
}

export default CardKeyInfo