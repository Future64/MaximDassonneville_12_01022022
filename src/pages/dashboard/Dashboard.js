import { useState, useEffect} from 'react'
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
import {
  fetchMainData,
  fetchActivity,
  fetchAverageSession,
  fetchPerformance,
} from '../../services/fetchData/fetchApiService'

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
    console.log(userMainData);
  }

  useEffect(() => {
    getFullDataFormat(params.id)
  }, [])

  //Store all Data from API
  const dataFromAPI = {
    mainData: userMainData,
    activity: userActivity,
    averageSession: userAvergeSession,
    performance: userPerformance,
    key: 'API',
  }

  //Final data to transfer everything to the dashboard
  let finalData = dataFromAPI

  // console.log(userMainData)

  //Object to build <CardKeyInfo/> component
  const infoCard = [
    {
      apport: 'Calories',
      icon: calorieIcon,
      type: 'kCal',
      data: finalData.mainData.keyData.calorieCount,
    },
    {
      apport: 'Proteines',
      icon: proteineIcon,
      type: 'g',
      data: finalData.mainData.keyData.proteinCount,
    },
    {
      apport: 'Glucides',
      icon: glucideIcon,
      type: 'g',
      data: finalData.mainData.keyData.carbohydrateCount,
    },
    {
      apport: 'Lipides',
      icon: lipideIcon,
      type: 'g',
      data: finalData.mainData.keyData.lipidCount,
    },
  ]

  return (
    <section className="dashboardPage">
      <Header />
      <SideBar />
      <section className="container-mainSection">
        <div className="sectionChart">
          <Hello data={finalData.mainData} />
          <div className="container-BarChart">
            <MyBarChart activity={finalData.activity} />
          </div>
          <div className="container-miniChart">
            <div className="box-Linechart">
              <MyLineChart averageSession={finalData.averageSession} />
            </div>
            <div className="box-Radarchart">
              <MyRadarChart performance={finalData.performance} />
            </div>
            <div className="box-Radialchart">
              <MyScoreChart mainData={finalData.mainData} />
            </div>
          </div>
        </div>
        <div className="container-keyInfo">
          {infoCard.map((item, index) => (
            //Built CardKeyInfo with infoCard object
            <CardKeyInfo
              src={item.icon}
              keyInfo={`${item.data}${item.type}`}
              description={item.apport}
              key={`${item.data}-${index}`}
            />
          ))}
        </div>
      </section>
    </section>
  )
}
export default Dashboard
