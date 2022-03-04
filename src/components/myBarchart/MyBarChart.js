import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import './MyBarChart.css'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

const MyBarChart = (props) => {
  let dataActivity = []

  /**
   * Built object to format data of activities
   * @param {Number} count
   * @param {Number} kilo
   * @param {Number} calories
   * @returns {Object}
   */
  const objForActivity = (count, kilo, calories) => {
    let activity = {
      day: count,
      kg: kilo,
      kCalFormat: calories / 7,
      kCal: calories,
    }
    return activity
  }

  // Push data formated in dataActivity
  for (let i = 0; i < props.activity.sessions.length; i++) {
    let count = i + 1
    let obj = objForActivity(
      count,
      props.activity.sessions[i].kilogram,
      props.activity.sessions[i].calories
    )
    dataActivity.push(obj)
  }

  /**
   * Customize tooltip
   * @param {Boolean} active
   * @param {Array} payload
   * @returns {Null}
   */
  function CustomTooltip({ active, payload }) {
    if (active && payload) {
      return (
        <TooltipContainer>
          <TooltipLine background="#282D30">
            {`${payload[0].value} kg`}
          </TooltipLine>
          <TooltipLine background="#E60000">
            {`${payload[1].payload.kCal} kCal`}
          </TooltipLine>
        </TooltipContainer>
      )
    }
    return null
  }
  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
  }

  return (
    <MyBarChartContainer>
      <MyBarChartTitle>Activité quotidienne</MyBarChartTitle>
      <MyBarChartLegend>
        <LegendDetail>
          <ColorBullet background="#282D30"></ColorBullet>
          Poids (kg)
        </LegendDetail>
        <LegendDetail>
          <ColorBullet background="#E60000"></ColorBullet>
          Calories brûlées (kCal)
        </LegendDetail>
      </MyBarChartLegend>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={dataActivity}
          margin={{ top: 80, right: 48, bottom: 32, left: 48 }}
          barGap={8}
          barCategoryGap="25%"
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            dy={16}
            tickLine={false}
            tick={{ fontSize: 14, fontWeight: 500 }}
          />
          <YAxis
            dataKey="kg"
            orientation="right"
            axisLine={false}
            tickLine={false}
            allowDecimals={false}
            dx={18}
          />
          <Tooltip
            cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
            content={<CustomTooltip />}
          />
          <Bar
            dataKey="kg"
            fill="#282D30"
            radius={[50, 50, 0, 0]}
            maxBarSize={8}
          />
          <Bar
            dataKey="kCalFormat"
            fill="#E60000"
            radius={[50, 50, 0, 0]}
            maxBarSize={8}
          />
        </BarChart>
      </ResponsiveContainer>
    </MyBarChartContainer>
  )
}

export default MyBarChart

MyBarChart.propTypes = {
  activity: PropTypes.object.isRequired,
}

/* ---------------------------------- */
/* -- Styles for styled-components -- */
/* ---------------------------------- */

const MyBarChartContainer = styled.div`
  position: relative;
  height: 100%;
`

const MyBarChartTitle = styled.h2`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  @media (max-width: 1340px) {
    top: 1rem;
    left: 1.5rem;
  }
`

const MyBarChartLegend = styled.div`
  display: flex;
  position: absolute;
  top: 1.5rem;
  right: 3rem;
  ${'' /* color: ${styleVar.neutral500}; */}
  @media (max-width: 1340px) {
    top: 1rem;
    right: 3rem;
  }
`

const LegendDetail = styled.p`
  margin: 0 0 0 2rem;
`

const ColorBullet = styled.span`
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 0.5rem 0 0;
  border-radius: 50%;
  background: ${(props) => props.background};
`

const TooltipContainer = styled.div`
  border: none;
  background-color: #e60000;
  opacity: 90%;
  margin-right: 50px;
`

const TooltipLine = styled.p`
  padding: 0.75rem;
  margin: 0;
  color: white;
  font-size: 0.7rem;
  font-weight: 500;
`
