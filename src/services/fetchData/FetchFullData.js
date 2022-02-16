import DataFormatter from "./DataFormater"

class FetchFullData {
    constructor() {
        this.baseUrl = "http://localhost:3000"
    }

    /**
     * Fetch USER_MAIN_DATA from API
     * @param {string} id - user id
     * @return {Object}
     */
    async getFullData(id) {
        let fullData = []
        await fetch(`${this.baseUrl}/user/${id}`)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => {
                console.log(data)
                fullData.push(data)
            })
            // let formatedData = DataFormatter.mainInfo(fullData[0].data)
        return {
            id: fullData[0].data.id,
            age: fullData[0].data.userInfos.age,
            firstName: fullData[0].data.userInfos.firstName,
            keyData: fullData[0].data.keyData,
            score: fullData[0].data.todayScore || fullData[0].data.score,
            calories: fullData[0].data.keyData.calorieCount,
            proteines: fullData[0].data.keyData.proteinCount,
            glucides: fullData[0].data.keyData.carbohydrateCount,
            lipides: fullData[0].data.keyData.lipidCount,
        }
    }

    /**
     * Fetch USER_ACTIVITY from API
     * @param {string} id - user id
     * @return {Array.Object}
     */
    async getDailyActivity(id) {
        let dailyActivity = []
        await fetch(`${this.baseUrl}/user/${id}/activity`)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => {
                console.log(data)
                dailyActivity.push(data)
            })
        return dailyActivity
    }

    /**
     * Fetch USER_AVERAGE_SESSIONS from API
     * @param {string} id - user id
     * @return {Array.Object}
     */
    async getAverageSession(id) {
        let averageSession = []
        await fetch(`${this.baseUrl}/user/${id}/average-sessions`)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => {
                console.log(data)
                averageSession.push(data)
            })
        return averageSession
    }

    /**
     * Fetch USER_PERFORMANCE from API
     * @param {string} id - user id
     * @return {Array.Object}
     */
    async getPerformance(id) {
        let performance = []
        await fetch(`${this.baseUrl}/user/${id}/performance`)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => {
                console.log(data)
                performance.push(data)
            })
        return performance
    }

}
export default FetchFullData


// const fetchFullData = () => {
//   const baseURL= "http://localhost:3000/user/12"
//   let fullData = []
//   fetch(baseURL)
//   .then(response =>  {
//     // console.log(response)
//     return response.json()
//   })
//   .then(data => {
//     // console.log(data)
//     fullData.push(data)
//   })
// return fullData
// }
// export default fetchFullData