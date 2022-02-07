import React from "react"
import './LeftNavBar.css'
import meditation from "../../assets/Meditation.png"
import musculation from "../../assets/Musculation.png"
import natation from "../../assets/natation.png"
import velo from "../../assets/Velo.png"
import Picto from "../picto/Picto"

const LeftNavBar = () => {

    const pictoArray = [meditation, natation, velo, musculation]
    return <div className="leftNavBar">
        {pictoArray.map(picto => {
            return <button className="picto" key={`button-${picto}`}>
                <Picto src={picto} key={`picto-${picto}`}/>
                {/* <img src={picto} alt="picto"></img> */}
            </button>
        })
        }
    </div>;
}

export default LeftNavBar