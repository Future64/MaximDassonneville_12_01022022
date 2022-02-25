import { useState, useEffect } from "react"

const FetchFullData = (id) => {

    const baseURL = `http://localhost:3000/user/${id}`

    let [fullData, setFullData] = useState([])
    let [activityData, setActivityData] = useState([])
    let [averageSessionData, setAverageSessionData] = useState([])
    let [perfData, setPerfData] = useState([])

    useEffect(() => {
        fetch(baseURL)
            .then(response => { return response.json() })
            .then((data) => { setFullData(fullData = data) })
            .catch((error) => console.log(error))
    }, [])
    useEffect(() => {
        fetch(`${baseURL}/activity`)
            .then(response => { return response.json() })
            .then((activity) => { setActivityData(activityData = activity) })
            .catch((error) => console.log(error))
    }, [])
    useEffect(() => {
        fetch(`${baseURL}/average-sessions`)
            .then(response => { return response.json() })
            .then((averageSession) => { setAverageSessionData(averageSessionData = averageSession) })
            .catch((error) => console.log(error))
    }, [])
    useEffect(() => {
        fetch(`${baseURL}/performance`)
            .then(response => { return response.json() })
            .then((perf) => { setPerfData(perfData = perf) })
            .catch((error) => console.log(error))
    }, [])

    let dataAPI = [fullData, activityData, averageSessionData, perfData]
    return dataAPI
}
export default FetchFullData