import fetchFullData from "./FetchFullData"
import USER_MAIN_DATA from "../mock/mockData"



const getUserMainData = (data, id) => {
    const userMainData = []
    userMainData.push(data)
    let userMainDataMocked

    for (let i = 0; i < userMainData[0].length; i++) {
        if (userMainData[0][i].id == id) {
            userMainDataMocked = userMainData[0][i]
            break
        }
    }
    return userMainDataMocked
}



const getUserPerformance = (data, id) => {
    const userPerformance = []
    userPerformance.push(data)
    let userPerformanceMocked

    for (let j = 0; j < userPerformance[0].length; j++) {
        if (userPerformance[0][j].userId == id) {
            userPerformanceMocked = userPerformance[0][j]
            break
        }
    }
    return userPerformanceMocked
}


const getAverageSession = (data, id) => {
    const userAverageSession = []
    userAverageSession.push(data)
    let userAverageSessionMocked

    for (let j = 0; j < userAverageSession[0].length; j++) {
        if (userAverageSession[0][j].userId == id) {
            userAverageSessionMocked = userAverageSession[0][j]
            break
        }
    }
    return userAverageSessionMocked
}


const getUserActivity = (data, id) => {
    const userActivity = []
    userActivity.push(data)
    let userActivityMocked

    for (let j = 0; j < userActivity[0].length; j++) {
        // console.log(userAverageSession[0][j])
        if (userActivity[0][j].userId == id) {
            userActivityMocked = userActivity[0][j]
            break
        }
    }

    return userActivityMocked
}


export { getUserMainData, getUserPerformance, getAverageSession, getUserActivity }