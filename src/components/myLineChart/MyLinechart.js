import {
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import React, { useState } from 'react'
import './MyLineChart.css'

const MyLineChart = (props) => {
  let dataAverageSessions = []

  /**
   * Built objects's array to format data of Average Sessions with week's days
   * @param {Array} daysArray
   * @param {Number} sessionLength
   * @returns {Array}
   */
  const objForSessions = (daysArray, sessionLength) => {
    let activity = {
      day: daysArray,
      sessionLength: sessionLength,
    }
    return activity
  }

  // Week's days array
  const daysArray = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

  // Push data formated in dataAverageSessions
  for (let i = 0; i < props.averageSession.sessions.length; i++) {
    let obj = objForSessions(
      daysArray[i],
      props.averageSession.sessions[i].sessionLength
    )
    dataAverageSessions.push(obj)
  }

  /**
   * Built Tooltip's LineChart with time value
   * @param {Boolean} active
   * @param {Array} payload
   * @returns {ReactElement |  null }
   */
  function CustomTooltip({ active, payload }) {
    if (active && payload) {
      return <TooltipContainer>{`${payload[0].value} min`}</TooltipContainer>
    }

    return null
  }

  return (
    <AverageSessionsChartContainer>
      <AverageSessionsChartTitle>
        Durée moyenne des
        <br />
        sessions
      </AverageSessionsChartTitle>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={320}
          height={320}
          data={dataAverageSessions}
          outerRadius="75%"
          margin={{ top: 0, right: 15, bottom: 15, left: 15 }}
        >
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: 'rgba(255,255,255, 0.6)',
              strokeWidth: 10,
              r: 5,
            }}
          />
          <XAxis
            tickLine={false}
            axisLine={false}
            dataKey="day"
            stroke="white"
            // dy={10}
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, 'dataMax + 50']}
            hide={true}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: 'rgba(0, 0, 0, 0.1)',
              strokeWidth: 52,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </AverageSessionsChartContainer>
  )
}
export default MyLineChart

MyLineChart.propTypes = {
  averageSession: PropTypes.object.isRequired,
}

/* ---------------------------------- */
/* -- Styles for styled-components -- */
/* ---------------------------------- */

const TooltipContainer = styled.p`
  padding: 0.5rem;
  font-size: 0.7rem;
  font-weight: 500;
  background: white;
`

const AverageSessionsChartContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
`

const AverageSessionsChartTitle = styled.h2`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  font-weight: 500;
  text-align: start;
  @media (max-width: 1340px) {
    top: 1rem;
    left: 1.5rem;
  }
`
