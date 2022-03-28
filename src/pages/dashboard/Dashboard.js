import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()

  const [userMainData, setUserMainData] = useState()
  const [userActivity, setUserActivity] = useState()
  const [userAvergeSession, setUserAvergeSession] = useState()
  const [userPerformance, setUserPerformance] = useState()

  /**
   * This function is used to fetch the datas from the API and stores it in the states
   * @param {Number} id
   */
  const getFullDataFormat = async (id) => {
    const responseMainData = await fetchMainData(id)
    setUserMainData(responseMainData)
    const responseActivity = await fetchActivity(id)
    setUserActivity(responseActivity)
    const responseAverageSession = await fetchAverageSession(id)
    setUserAvergeSession(responseAverageSession)
    const responsePerformance = await fetchPerformance(id)
    setUserPerformance(responsePerformance)
  }

  useEffect(() => {
    if(params.id == 12 || params.id == 18){
      getFullDataFormat(params.id)
    } else {
      navigate("*")
    }
  }, [])
  
  return (
    <section className="dashboardPage">
      <Header />
      <SideBar />
      <section className="container-mainSection">
        <div className="sectionChart">
          {userMainData && <Hello data={userMainData} />}
          <div className="container-BarChart">
            {userActivity && <MyBarChart activity={userActivity} />}
          </div>
          <div className="container-miniChart">
            <div className="box-Linechart">
              {userAvergeSession && (
                <MyLineChart averageSession={userAvergeSession} />
              )}
            </div>
            <div className="box-Radarchart">
              {userPerformance && (
                <MyRadarChart performance={userPerformance} />
              )}
            </div>
            <div className="box-Radialchart">
              {userMainData && <MyScoreChart mainData={userMainData} />}
            </div>
          </div>
        </div>
        <div className="container-keyInfo">
          {userMainData && (
            <CardKeyInfo
              src={calorieIcon}
              keyInfo={`${userMainData.keyData.calorieCount}kCal`}
              description="Calories"
            />
          )}
          {userMainData && (
            <CardKeyInfo
              src={proteineIcon}
              keyInfo={`${userMainData.keyData.proteinCount}g`}
              description="Calories"
            />
          )}
          {userMainData && (
            <CardKeyInfo
              src={glucideIcon}
              keyInfo={`${userMainData.keyData.carbohydrateCount}g`}
              description="Calories"
            />
          )}
          {userMainData && (
            <CardKeyInfo
              src={lipideIcon}
              keyInfo={`${userMainData.keyData.lipidCount}g`}
              description="Calories"
            />
          )}
        </div>
      </section>
    </section>
  )
}
export default Dashboard
