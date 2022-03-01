import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'
import './MyRadarChart.css'

const MyRadarChart = (props) => {
  let dataPerf = []

  /**
   * Built objects's array to format data of performances with activities
   * @param {Array} activity
   * @param {Number} value
   * @returns {Array}
   */
  const objForSessions = (activity, value) => {
    let performance = {
      activity: activity,
      value: value,
    }
    return performance
  }

  // Activities array
  let ActivityArray = [
    'Intensité',
    'Vitesse',
    'Force',
    'Endurence',
    'Energie',
    'Cardio',
  ]

  // Push data formated in dataPerf
  for (let i = 0; i < props.performance.data.length; i++) {
    let obj = objForSessions(ActivityArray[i], props.performance.data[i].value)
    dataPerf.push(obj)
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        data={dataPerf}
        outerRadius={window.innerWidth > 1340 ? '70%' : '60%'}
      >
        <PolarGrid gridType={'polygon'} radialLines={false} />
        <PolarAngleAxis
          tickLine={false}
          axisLine={true}
          dataKey="activity"
          stroke="#FFFFFF"
          dy={4}
          tick={{ fontSize: 12, fontWeight: 500 }}
        />
        {/* <PolarRadiusAxis /> */}
        <Radar
          name="Mike"
          dataKey="value"
          stroke="transparent"
          fill="rgba(255, 1, 1, 2)"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}
export default MyRadarChart

MyRadarChart.propTypes = {
  performance: PropTypes.shape({
    data: PropTypes.array.isRequired,
  }),
}
