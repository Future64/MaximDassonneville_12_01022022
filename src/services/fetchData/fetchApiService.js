import axios from 'axios'

export const fetchMainData = async(id) => {
    let results
    await axios({
            url: `http://localhost:3000/user/${id}`,
            method: 'GET',
        })
        .then((response) => (results = response.data.data))
        .catch((error) => console.log(error))
    return results
}

export const fetchActivity = async(id) => {
    let results
    await axios({
            url: `http://localhost:3000/user/${id}/activity`,
            method: 'GET',
        })
        .then((response) => (results = response.data.data))
        .catch((error) => console.log(error))
    return results
}

export const fetchAverageSession = async(id) => {
    let results
    await axios({
            url: `http://localhost:3000/user/${id}/average-sessions`,
            method: 'GET',
        })
        .then((response) => (results = response.data.data))
        .catch((error) => console.log(error))
    return results
}

export const fetchPerformance = async(id) => {
    let results
    await axios({
            url: `http://localhost:3000/user/${id}/performance`,
            method: 'GET',
        })
        .then((response) => (results = response.data.data))
        .catch((error) => console.log(error))
    return results
}