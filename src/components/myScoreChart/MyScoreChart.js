import React from 'react'
import './MyScoreChart.css'
import { PieChart, Cell, Pie, Label, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'

const MyScoreChart = ({ mainData }) => {
  /**
   * Test keyValue name and return userScore
   * @param {number} todayScore
   * @param {number} score
   * @returns {number}
   */
  const formatScore = (todayScore, score) => {
    let userScore
    todayScore === undefined ? (userScore = score) : (userScore = todayScore)

    if (userScore === undefined) {
      userScore = 0
    }
    return userScore
  }

  // Store value of formatScore()
  const scoreOriginValue = formatScore(mainData.todayScore, mainData.score)

  // Increase scoreOriginValue by 100
  const finalScore = scoreOriginValue * 100

  const data = [
    { name: 'contentZone', value: scoreOriginValue },
    { name: 'emptyZone', value: 1 - scoreOriginValue },
  ]

  /**
   * Built score zone with central text
   * @param {object} viewBox
   * @param {number} score = 0
   * @returns { HTMLElement }
   */
  const CustomLabel = ({ viewBox, score = 0 }) => {
    const { cx, cy } = viewBox
    return (
      <>
        <text x={cx - 15} y={cy - 5}>
          <tspan className="score">{score}</tspan>
        </text>
        <text x={cx - 20} y={cy + 15}>
          <tspan className="firstTxt">de votre</tspan>
        </text>
        <text x={cx - 19} y={cy + 35}>
          <tspan className="secondTxt">objectif</tspan>
        </text>
      </>
    )
  }

  /**
   * Built header title
   * @param {object} viewBox
   * @returns { HTMLElement }
   */
  const ScoreLabel = ({ viewBox }) => {
    const { cx, cy } = viewBox
    return (
      <>
        <text x={cx - 80} y={cy - 95}>
          <tspan className="titleScore">Score</tspan>
        </text>
      </>
    )
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={100} height={100}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          dataKey="value"
          innerRadius={60}
          outerRadius={75}
          startAngle={90}
          endAngle={450}
          fill="#FFFFFF"
        >
          {data.map((name, value) => {
            // Display graph score with data
            if (value === 1) {
              return (
                <Cell
                  key={`cell-${value}`}
                  fill="#FBFBFB"
                  radius={[50, 50, 0, 0]}
                  stroke="transparent"
                />
              )
            }
            return (
              <Cell
                key={`cell-${value}`}
                fill="#FF0000"
                radius={[50, 50, 0, 0]}
                cornerRadius="50%"
              />
            )
          })}
          <Label content={<ScoreLabel />} />
          <Label
            content={<CustomLabel score={`${finalScore}%`} />}
            position="center"
          />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}
export default MyScoreChart

MyScoreChart.propTypes = {
  mainData: PropTypes.object.isRequired,
}
