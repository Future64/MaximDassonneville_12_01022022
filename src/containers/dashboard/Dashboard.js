import  {useState, useEffect} from "react"
import Header from "../../components/header/Header"
import SideBar from "../../components/sideBar/SideBar"
import Hello from "../../components/hello/Hello"
import MyRadarChart from "../../components/myRadarChart/MyRadarChart"
import MyLineChart from "../../components/myLineChart/MyLinechart"
import MyBarChart from "../../components/myBarchart/MyBarChart"
import CardKeyInfo from "../../components/cardKeyInfo/CardKeyInfo"
import MyScoreChart from "../../components/myScoreChart/MyScoreChart"
import "./Dashboard.css"
import meditation from "../../assets/Meditation.png"
import calorieIcon from "../../assets/calories-icon.png"
import proteineIcon from "../../assets/protein-icon.png"
import glucideIcon from "../../assets/glucide-icon.png"
import lipideIcon from "../../assets/lipide-icon.png"
import axios from 'axios';
// import fetchFullData from "../../services/fetchData/FetchFullData"
import FetchFullData from "../../services/fetchData/FetchFullData"



const Dashboard = () => {
  const data = new FetchFullData()
  let [dataCalories, setDataCalories] = useState()
  let [dataProteines, setDataProteines] = useState()
  let [dataGlucides, setDataGlucides] = useState()
  let [dataLipides, setDataLipides] = useState()


  data.getFullData(12)
  .then((response) => {
    setDataCalories(dataCalories = response.calories)
    setDataProteines(dataProteines = response.proteines)
    setDataGlucides(dataGlucides = response.glucides)
    setDataLipides(dataLipides = response.lipides)
  })


  // const pictoKeyInfoArray = [meditation, natation, velo, musculation]
  const infoCard = [
    { apport: 'Calories', icon: calorieIcon, type: "kCal", data: dataCalories },
    { apport: 'Proteines', icon: proteineIcon, type: "g", data: dataProteines },
    { apport: 'Glucides', icon: glucideIcon, type: "g", data: dataGlucides },
    { apport: 'Lipides', icon: lipideIcon, type: "g", data: dataLipides }
  ]


  return (
    <section className="dashboardPage">
      <Header />
      <SideBar />
      {/* <BoxChart /> */}
      <section className="container-mainSection">
        <div className="sectionChart">
          <Hello />
          <div className="container-BarChart">
            <MyBarChart />
          </div>
          <div className="container-miniChart">
            <div className="box-Linechart">
              <MyLineChart />
            </div>
            <div className="box-Radarchart">
              <MyRadarChart />
            </div>
            <div className="box-Radialchart">
              <MyScoreChart />
            </div>
          </div>
        </div>
        <div className="container-keyInfo">{
          infoCard.map((item, index) => (
            <CardKeyInfo
              src={item.icon}
              keyInfo={`${item.data}${item.type}`}
              description={item.apport}
              key={`${item.data}-${index}`}
            />
          ))}
        </div>
      </section>
    </section>)
}

export default Dashboard