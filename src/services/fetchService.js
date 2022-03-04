import { useState, useEffect } from 'react'

const FetchService = (url) => {
  const baseURL = url

  let [fullData, setFullData] = useState([])

  useEffect(() => {
    fetch(baseURL)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setFullData((fullData = data))
      })
      .catch((error) => console.log(error))
  }, [])

  let dataAPI = [fullData]
  return dataAPI
}
export default FetchService
