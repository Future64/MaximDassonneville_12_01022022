import FetchService from './fetchService'

export const getData = (baseURL, id, endPoint) => {
    endPoint = endPoint || ''
    const userMainData = FetchService(`${baseURL}/${id}/${endPoint}`)
    return userMainData
}