import { LineChart, Line, Tooltip, XAxis, YAxis, ResponsiveContainer } from "recharts";
import ReactDOM from "react-dom";
import styled from "styled-components";
import React, { useState } from "react";
import "./MyLineChart.css"

const data = [
  { name: "L", uv: 4000, pv: 2400, amt: 2400 },
  { name: "M", uv: 3000, pv: 1398, amt: 2210 },
  { name: "M", uv: 2000, pv: 1800, amt: 2290 },
  { name: "J", uv: 2780, pv: 3908, amt: 2000 },
  { name: "V", uv: 1890, pv: 2800, amt: 2181 },
  { name: "S", uv: 2390, pv: 3800, amt: 2500 },
  { name: "D", uv: 3490, pv: 4300, amt: 2100 }
];

const MyLineChart = (props) => {
  let dataAverageSessions = []
  const objForSessions = (daysArray, sessionLength) => {
    let activity = {
      day: daysArray,
      sessionLength: sessionLength,
    }
    return activity
  }
  const daysArray = ["L", "M", "M", "J", "V", "S", "D"]

  for(let i = 0; i < props.averageSession.sessions.length; i++) {
    let obj = objForSessions(daysArray[i], props.averageSession.sessions[i].sessionLength)
    dataAverageSessions.push(obj)
  }


  const [perc, setPerc] = useState(0);
  const onMouseMove = hoveredData => {
    // console.log(hoveredData);
    // if (hoveredData && hoveredData.activePayload) {
    //   const hoveredX = hoveredData.activePayload[0].payload.day;
    //   const index = dataAverageSessions.findIndex(d => d.day);
    //   const percentage = ((dataAverageSessions.length - index - 1) * 100) / (dataAverageSessions.length - 1)

    //   setPerc(100 - percentage);
    // }
  };

  const onMouseOut = () => {
    // setPerc(0);
  };



console.log(dataAverageSessions)

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
            onMouseMove={onMouseMove}
            onMouseOut={onMouseOut}
            outerRadius="75%"
            margin={{ top: 20, right: 15, bottom: 14, left: 15 }}
          >
            {/* <defs>
              <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor="blue" />
                <stop offset={`${perc}%`} stopColor="blue" />
                <stop offset={`${perc}%`} stopColor="red" />
                <stop offset={`${100}%`} stopColor="red" />
              </linearGradient>
            </defs> */}
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="white"
              strokeWidth={2}
              dot={false}
              activeDot={{
                  stroke: "rgba(255,255,255, 0.6)",
                  strokeWidth: 10,
                  r: 5,
                }}
            />
            <XAxis tickLine={false} axisLine={false} dataKey="day" stroke="white" />
            {/* <YAxis dataKey="sessionLength" domain={[0, "dataMax + 60"]} hide={true}/> */}
            <Tooltip 
              content={<CustomTooltip />}
                cursor={{
                  stroke: "rgba(0, 0, 0, 0.1)",
                  strokeWidth: 32,
                }}
            />
          </LineChart>

        </ResponsiveContainer>

    </AverageSessionsChartContainer>
  );
};

export default MyLineChart 

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return <TooltipContainer>{`${payload[0].value} min`}</TooltipContainer>;
  }

  return null;
}

const TooltipContainer = styled.p`
  padding: 0.5rem;
  font-size: 0.7rem;
  font-weight: 500;
  background: white;
`;

const AverageSessionsChartContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  ${'' /* background: transparent; */}
`;

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
`;