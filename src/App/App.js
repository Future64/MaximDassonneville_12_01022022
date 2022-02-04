import React from "react"
import { Routes, Route } from "react-router-dom"
import './App.css';
import Dashboard from '../containers/dashboard/Dashboard'
import Error404 from '../components/error404/Error404'

// let DATA = []
// let data = []


// fetch("http://localhost:3000/user/12/")
//     .then((response) => {
//         return response.json()
//     })
//     .then((JSONDATA) => {
//         DATA = JSONDATA

//         data.push(DATA.data)

//     })

const App = () => {
    // let userId
    // let todayScore
    //     //ketData
    // let calorieCount
    // let carbohydrateCount
    // let lipidCount
    // let proteinCount

    // //userInfos
    // let age
    // let firstName
    // let lastName

    // data.map(item => {
    //     userId = item.id
    //     todayScore = item.todayScore
    //         //ketData
    //     calorieCount = item.keyData.calorieCount
    //     carbohydrateCount = item.keyData.carbohydrateCount
    //     lipidCount = item.keyData.lipidCount
    //     proteinCount = item.keyData.proteinCount
    //         //userInfos
    //     age = item.userInfos.age
    //     firstName = item.userInfos.firstName
    //     lastName = item.userInfos.lastName

    // })
    // console.log(todayScore);
    return ( 
        <div className = "App" > 
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
    );
}

export default App;