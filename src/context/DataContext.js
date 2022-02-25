import { createContext, useState } from "react"
import USER_MAIN_DATA from "../services/mock/mockData"
import FetchFullData from "../services/fetchData/FetchFullData"

export const DataContext = createContext()

const DataContextProvider = props => {
    const userMainData = []
    userMainData.push(USER_MAIN_DATA.USER_MAIN_DATA)

    const AllUsersMainDataAPI = [FetchFullData(12)[0].data, FetchFullData(18)[0].data]

    // console.log(userMainData[0]);
    // console.log(AllUsersMainDataAPI);
    return (
        <DataContext.Provider value={userMainData[0]} >
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider