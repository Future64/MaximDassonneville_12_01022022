import React from "react"
import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar"
import Hello from "../../components/hello/Hello"
import MyRadarChart from "../../components/myRadarChart/MyRadarChart"
import MyLineChart from "../../components/myLineChart/MyLinechart";
import MyBarChart from "../../components/myBarchart/MyBarChart";
import CardKeyInfo from "../../components/cardKeyInfo/CardKeyInfo";
import MyScoreChart from "../../components/myScoreChart/MyScoreChart";
import "./Dashboard.css"
import meditation from"../../assets/Meditation.png"
import calorieIcon from "../../assets/calories-icon.png"
import proteineIcon from "../../assets/protein-icon.png"
import glucideIcon from "../../assets/glucide-icon.png"
import lipideIcon from "../../assets/lipide-icon.png"

const Dashboard = () => {
  // const pictoKeyInfoArray = [meditation, natation, velo, musculation]
  const infoCard = [
    {apport:'Calories', icon:calorieIcon, type:"kCal", data:1.930},
    {apport:'Proteines', icon:proteineIcon, type:"g", data:155},
    {apport:'Glucides', icon:glucideIcon, type:"g", data:290},
    {apport:'Lipides', icon:lipideIcon, type:"g", data:50}
  ]

  

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
            <MyScoreChart />
          </div>
        </div>
      </div>
      <div className="container-keyInfo">{
        infoCard.map(item =>  (
           <CardKeyInfo 
            src={item.icon} 
            keyInfo={`${item.data}${item.type}`} 
            description={item.apport}
            key={item}
          />
        ))}
      </div>
    </section>
  </section>)
}

export default Dashboard