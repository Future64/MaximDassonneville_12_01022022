import { useState, useEffect, useContext, useRef } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import SideBar from '../../components/sideBar/SideBar'
import Hello from '../../components/hello/Hello'
import MyRadarChart from '../../components/myRadarChart/MyRadarChart'
import MyLineChart from '../../components/myLineChart/MyLinechart'
import MyBarChart from '../../components/myBarchart/MyBarChart'
import CardKeyInfo from '../../components/cardKeyInfo/CardKeyInfo'
import MyScoreChart from '../../components/myScoreChart/MyScoreChart'
import './Dashboard.css'
import calorieIcon from '../../assets/calories-icon.png'
import proteineIcon from '../../assets/protein-icon.png'
import glucideIcon from '../../assets/glucide-icon.png'
import lipideIcon from '../../assets/lipide-icon.png'
import DataContextProvider from '../../context/DataContext'
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../../services/mock/mockData'
import {
  fetchMainData,
  fetchActivity,
  fetchAverageSession,
  fetchPerformance,
} from '../../services/fetchData/fetchApiService'
import {
  getUserMainData,
  getUserPerformance,
  getAverageSession,
  getUserActivity,
} from '../../services/fetchData/DataMockedFormater'

const Dashboard = () => {
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
    getFullDataFormat(params.id)
  }, [])

  //   console.log(userMainData)
  //   console.log(userActivity)
  //   console.log(userAvergeSession)
  //   console.log(userPerformance)

  //DAta Mocked
  const userMainDataAPIMocked = getUserMainData(USER_MAIN_DATA, params.id)
  const userActivityDataAPIMocked = getUserActivity(USER_ACTIVITY, params.id)
  const userAverageSessionsDataAPIMocked = getAverageSession(
    USER_AVERAGE_SESSIONS,
    params.id
  )
  const userPerformanceDataAPIMocked = getUserPerformance(
    USER_PERFORMANCE,
    params.id
  )

  const dataFromMock = {
    mainData: userMainDataAPIMocked,
    activity: userActivityDataAPIMocked,
    averageSession: userAverageSessionsDataAPIMocked,
    performance: userPerformanceDataAPIMocked,
  }

  const dataFromAPI = {
    mainData: userMainData,
    activity: userActivity,
    averageSession: userAvergeSession,
    performance: userPerformance,
  }

  console.log(dataFromAPI.activity)

  // user Key Data
  let [dataCalories, setDataCalories] = useState(
    userMainDataAPIMocked.keyData.calorieCount
  )
  let [dataProteines, setDataProteines] = useState(
    userMainDataAPIMocked.keyData.proteinCount
  )
  let [dataGlucides, setDataGlucides] = useState(
    userMainDataAPIMocked.keyData.carbohydrateCount
  )
  let [dataLipides, setDataLipides] = useState(
    userMainDataAPIMocked.keyData.lipidCount
  )

  const infoCard = [
    { apport: 'Calories', icon: calorieIcon, type: 'kCal', data: dataCalories },
    { apport: 'Proteines', icon: proteineIcon, type: 'g', data: dataProteines },
    { apport: 'Glucides', icon: glucideIcon, type: 'g', data: dataGlucides },
    { apport: 'Lipides', icon: lipideIcon, type: 'g', data: dataLipides },
  ]

  return (
    <section className="dashboardPage">
      <Header />
      <SideBar /> {/* <BoxChart /> */}{' '}
      <section className="container-mainSection">
        <div className="sectionChart">
          <Hello data={userMainDataAPIMocked} />{' '}
          <div className="container-BarChart">
            <MyBarChart activity={userActivityDataAPIMocked} />{' '}
          </div>{' '}
          <div className="container-miniChart">
            <div className="box-Linechart">
              <MyLineChart averageSession={userAverageSessionsDataAPIMocked} />{' '}
            </div>{' '}
            <div className="box-Radarchart">
              <MyRadarChart performance={userPerformanceDataAPIMocked} />{' '}
            </div>{' '}
            <div className="box-Radialchart">
              <MyScoreChart mainData={userMainDataAPIMocked} />{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className="container-keyInfo">
          {' '}
          {infoCard.map((item, index) => (
            //Built CardKeyInfo with infoCard object
            <CardKeyInfo
              src={item.icon}
              keyInfo={`${item.data}${item.type}`}
              description={item.apport}
              key={`${item.data}-${index}`}
            />
          ))}{' '}
        </div>{' '}
      </section>{' '}
    </section>
  )
}
export default Dashboard
