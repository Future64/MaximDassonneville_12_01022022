import React, {useState, useEffect} from 'react';
import "./Hello.css"
import FetchFullData from "../../services/fetchData/FetchFullData"


const Hello = () => {
    const data = new FetchFullData()
    let [firstname, setFirstname] = useState()

    data.getFullData(12)
    .then((response) => {
        setFirstname(firstname = response.firstName)
    })

    return <div className='container-hello'>
        <h1>Bonjour <span>{firstname}</span></h1>
        <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏 </h2>
    </div>;
}

export default Hello