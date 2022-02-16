class DataFormatter {

    static mainInfo(data) {
        return {
            id: data.id,
            age: data.userInfos.age,
            firstName: data.userInfos.firstName,
            keyData: data.keyData,
            score: data.todayScore || data.score,
        }
    }
}

export default DataFormatter