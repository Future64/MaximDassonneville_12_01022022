import React, { PureComponent } from 'react';
import PropTypes from "prop-types"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './MyRadarChart.css'



const MyRadarChart = (props) => {
    let dataPerf = []
    const objForSessions = (activity, value) => {
        let performance = {
        activity: activity,
        value: value,
        }
        return performance
    }
    let ActivityArray = ['Intensité', 'Vitesse', 'Force', 'Endurence', 'Energie', 'Cardio']

    for(let i = 0; i < props.performance.data.length; i++) {
        let obj = objForSessions(ActivityArray[i], props.performance.data[i].value)
        dataPerf.push(obj)
    }

    // console.log(  props.performance.data);

    return (
        <ResponsiveContainer width="100%" height="100%" >
            <RadarChart cx="50%" cy="50%" data={dataPerf} outerRadius={window.innerWidth > 1340 ? "70%" : "60%"}>
                <PolarGrid gridType={"polygon"} radialLines={false} />
                <PolarAngleAxis tickLine={false} axisLine={true} dataKey="activity" stroke="#FFFFFF" dy={4} tick={{ fontSize: 12, fontWeight: 500, }} />
                {/* <PolarRadiusAxis /> */}
                <Radar name="Mike" dataKey="value" stroke="transparent" fill="rgba(255, 1, 1, 2)" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    )
}
MyRadarChart.propTypes = {
    performance: PropTypes.shape({
        data: PropTypes.array,
    }),
  }
export default MyRadarChart