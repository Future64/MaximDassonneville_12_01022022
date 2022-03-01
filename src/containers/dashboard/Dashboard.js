import { useState, useEffect, useContext } from 'react'
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
import FetchFullData from '../../services/fetchData/FetchFullData'
import USER_MAIN_DATA from '../../services/mock/mockData'
import {
  getUserMainData,
  getUserPerformance,
  getAverageSession,
  getUserActivity,
} from '../../services/fetchData/DataFormater'

const Dashboard = () => {
  const params = useParams()

  //DAta Mocked
  let userMainDataAPIMocked = getUserMainData(
    USER_MAIN_DATA.USER_MAIN_DATA,
    params.id
  )
  const userActivityDataAPIMocked = getUserActivity(
    USER_MAIN_DATA.USER_ACTIVITY,
    params.id
  )
  const userAverageSessionsDataAPIMocked = getAverageSession(
    USER_MAIN_DATA.USER_AVERAGE_SESSIONS,
    params.id
  )
  const userPerformanceDataAPIMocked = getUserPerformance(
    USER_MAIN_DATA.USER_PERFORMANCE,
    params.id
  )

  //DAta API
  const userMainDataAPI = FetchFullData(params.id)[0].data
  const userActivityDataAPI = FetchFullData(params.id)[1].data
  const userAverageSessionsDataAPI = FetchFullData(params.id)[2].data
  const userPerformanceDataAPI = FetchFullData(params.id)[3].data

  // console.log(userMainDataAPIMocked);
  // console.log(userActivityDataAPIMocked);
  // console.log(userAverageSessionsDataAPIMocked);
  // console.log(userPerformanceDataAPIMocked);

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
    // <DataContextProvider>
    <section className="dashboardPage">
      <Header />
      <SideBar />
      {/* <BoxChart /> */}
      <section className="container-mainSection">
        <div className="sectionChart">
          <Hello data={userMainDataAPIMocked} />
          <div className="container-BarChart">
            <MyBarChart
              mainData={userMainDataAPIMocked}
              activity={userActivityDataAPIMocked}
              averageSession={userAverageSessionsDataAPIMocked}
              performance={userPerformanceDataAPIMocked}
            />
          </div>
          <div className="container-miniChart">
            <div className="box-Linechart">
              <MyLineChart
                mainData={userMainDataAPIMocked}
                activity={userActivityDataAPIMocked}
                averageSession={userAverageSessionsDataAPIMocked}
                performance={userPerformanceDataAPIMocked}
              />
            </div>
            <div className="box-Radarchart">
              <MyRadarChart
                mainData={userMainDataAPIMocked}
                activity={userActivityDataAPIMocked}
                averageSession={userAverageSessionsDataAPIMocked}
                performance={userPerformanceDataAPIMocked}
              />
            </div>
            <div className="box-Radialchart">
              <MyScoreChart
                mainData={userMainDataAPIMocked}
                activity={userActivityDataAPIMocked}
                averageSession={userAverageSessionsDataAPIMocked}
                performance={userPerformanceDataAPIMocked}
              />
            </div>
          </div>
        </div>
        <div className="container-keyInfo">
          {infoCard.map((item, index) => (
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
    // </DataContextProvider>
  )
}

export default Dashboard
