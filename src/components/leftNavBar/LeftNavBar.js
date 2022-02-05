import React from "react"
import './LeftNavBar.css'

const LeftNavBar = () => {
    const meditation = "../../assets/Meditation.png"
    const musculation = "../../assets/Musculation.png"
    const natation = "../../assets/natation.png"
    const velo = "../../assets/Velo.png"

    const pictoArray = [meditation, natation, velo, musculation ]
    return <div className="leftNavBar">
        {pictoArray.map(picto => {
            return <div className="picto">
            <img src={picto} alt="picto"></img>
            </div>})
            }
    </div>;
}

export default LeftNavBar