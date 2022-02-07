import React from "react"
import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar"
import Hello from "../../components/hello/Hello"
import MyRadarChart from "../../components/myRadarChart/MyRadarChart"
import CardKeyInfo from "../../components/cardKeyInfo/CardKeyInfo";
import meditation from"../../assets/Meditation.png"
import "./Dashboard.css"

const Dashboard = () => {
  // const pictoKeyInfoArray = [meditation, natation, velo, musculation]
  const keyInfo = ["Calories", "Proteines", "Glucides", "Lipides"]
  //  [
  //   {Calories: "1,930kCal"}, 
  //   {Proteines: "155g"},
  //   {Glucides: "290g"}, 
  //   {Lipides: "50g"}]
  
  return (
  <section className="dashboardPage">
    <Header />
    <SideBar />
    {/* <BoxChart /> */}
    <section className="container-mainSection">
      <div className="sectionChart">
      <Hello />
        <div className="container-BarChart">
          {/* <BarChart /> */}
        </div>
        <div className="container-miniChart">
          <div className="box-Linechart">
            {/* <LineChart /> */}
          </div>
          <div className="box-Radarchart">
            <MyRadarChart />
          </div>
          <div className="box-Radialchart">
            {/* <MyRadarChart /> */}
          </div>
        </div>
      </div>
      <div className="container-keyInfo">{keyInfo.map(item =>  <CardKeyInfo src={meditation} keyInfo={"150g"} description={item}/>)}</div>
    </section>
  </section>)
}

export default Dashboard