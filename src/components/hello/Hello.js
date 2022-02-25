import React, { useState, useEffect } from 'react';
import "./Hello.css"
import FetchFullData from "../../services/fetchData/FetchFullData"


const Hello = (props) => {
    let [firstname, setFirstname] = useState(props.data.userInfos.firstName)


    return <div className='container-hello'>
        <h1>Bonjour <span>{firstname}</span></h1>
        <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏 </h2>
    </div>;
}

export default Hello