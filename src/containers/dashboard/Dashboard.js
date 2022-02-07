import React from "react"
import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar"
import Hello from "../../components/hello/Hello"
import MyRadarChart from "../../components/myRadarChart/MyRadarChart"
import MyLineChart from "../../components/myLineChart/MyLinechart";
import MyBarChart from "../../components/myBarchart/MyBarChart";
import CardKeyInfo from "../../components/cardKeyInfo/CardKeyInfo";
import "./Dashboard.css"
import meditation from"../../assets/Meditation.png"
import calorieIcon from "../../assets/calories-icon.png"
import proteineIcon from "../../assets/protein-icon.png"
import glucideIcon from "../../assets/glucide-icon.png"
import lipideIcon from "../../assets/lipide-icon.png"

const Dashboard = () => {
  // const pictoKeyInfoArray = [meditation, natation, velo, musculation]
  const keyInfo = ["Calories", "Proteines", "Glucides", "Lipides"]
  const icons = [calorieIcon, proteineIcon, glucideIcon, lipideIcon]
  

  // icons.map(icon => console.log(icon))
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
            {/* <MyRadarChart /> */}
          </div>
        </div>
      </div>
      <div className="container-keyInfo">{
        keyInfo.map((item) =>  {
          return <CardKeyInfo 
            src={icons.forEach(icon => icon)} 
            keyInfo={"150g"} 
            description={item}
            key={item}
          />
        })}
      </div>
    </section>
  </section>)
}

export default Dashboard