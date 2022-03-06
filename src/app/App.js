import { useState, useEffect, useContext, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import DataContextProvider from '../context/DataContext'
import Dashboard from '../pages/dashboard/Dashboard'
import Home from '../pages/home/Home'
import Error404 from '../components/error404/Error404'
import {
  fetchMainData,
  fetchActivity,
  fetchAverageSession,
  fetchPerformance,
} from '../services/fetchData/fetchApiService'
// import {
//   getUserMainData,
//   getUserPerformance,
//   getAverageSession,
//   getUserActivity,
// } from '../../services/fetchData/DataMockedFormater'

const App = () => {
  const params = useParams()

  const [userMainData, setUserMainData] = useState([])
  const [userActivity, setUserActivity] = useState([])
  const [userAvergeSession, setUserAvergeSession] = useState([])
  const [userPerformance, setUserPerformance] = useState([])

  /**
   * Store data from API
   * @param {Number} id
   */
  const getFullDataFormat = async (id) => {
    const responseMainData = await fetchMainData(id)
    const responseActivity = await fetchActivity(id)
    const responseAverageSession = await fetchAverageSession(id)
    const responsePerformance = await fetchPerformance(id)
    setUserMainData(responseMainData)
    setUserActivity(responseActivity)
    setUserAvergeSession(responseAverageSession)
    setUserPerformance(responsePerformance)
  }

  useEffect(() => {
    getFullDataFormat(12)
  }, [])

  return (
    <div className="App">
      <DataContextProvider>
        <Routes>
          <Route path="/" element={<Home api={userMainData} />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </DataContextProvider>
    </div>
  )
}

export default App
