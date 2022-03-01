import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'


const ButtonSwitch = () => {
const {toggleFetch, fetch} = useContext(DataContext)

return (

    <button onClick={() => toggleFetch()}>
        Switch Data {fetch == "dataFromApi" ? "dataFromMock" : "dataFromApi" }
    </button>

)
}

export default ButtonSwitch