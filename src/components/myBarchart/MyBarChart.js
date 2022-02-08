
import React from "react";
import styled from "styled-components"
import "./MyBarChart.css"
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: "1",
        uv: 69,
        pv: 72,
        amt: 2400
    },
    {
        name: "2",
        uv: 75,
        pv: 70,
        amt: 2210
    },
    {
        name: "3",
        uv: 74,
        pv: 69,
        amt: 2290
    },
    {
        name: "4",
        uv: 69,
        pv: 76,
        amt: 2000
    },
    {
        name: "5",
        uv: 78,
        pv: 69,
        amt: 2181
    },
    {
        name: "6",
        uv: 71,
        pv: 70,
        amt: 2500
    },
    {
        name: "7",
        uv: 73,
        pv: 76,
        amt: 2100
    },
    {
        name: "8",
        uv: 70,
        pv: 75,
        amt: 2181
    },
    {
        name: "9",
        uv: 71,
        pv: 70,
        amt: 2500
    },
    {
        name: "10",
        uv: 78,
        pv: 69,
        amt: 2100
    }
];

const MyBarChart = () => {
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
                data={data}
                margin={{ top: 80, right: 48, bottom: 32, left: 48 }}
                barGap={8}
                barCategoryGap="25%"
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" dy={16} tickLine={false} tick={{ fontSize: 14, fontWeight: 500 }} />
                <YAxis orientation="right" axisLine={false} tickLine={false} domain={["dataMin - 1", "dataMax + 2"]} allowDecimals={false} dx={18} />
                <Tooltip cursor={{ fill: "rgba(0, 0, 0, 0.1)", }} content={<CustomTooltip />} />
                <Bar dataKey="pv" fill="#282D30" radius={[50, 50, 0, 0]} maxBarSize={8} />
                <Bar dataKey="uv" fill="#E60000" radius={[50, 50, 0, 0]} maxBarSize={8} />
            </BarChart>
            </ResponsiveContainer>
        </MyBarChartContainer>
    );
}
export default MyBarChart

// DailyActivityChart.propTypes = {
//     userId: PropTypes.string.isRequired,
//   };
  
  function CustomTooltip({ active, payload }) {
    if (active && payload) {
      return (
        <TooltipContainer>
          <TooltipLine background="#E60000">
            {`${payload[0].value} kg`}
          </TooltipLine>
          <TooltipLine background="#E60000">
            {`${payload[1].value} kCal`}
          </TooltipLine>
        </TooltipContainer>
      );
    }
  
    return null;
  }
  
//   CustomTooltip.propTypes = {
//     active: PropTypes.bool,
//     payload: PropTypes.array,
//   };
  
  const MyBarChartContainer = styled.div`
    position: relative;
    height: 100%;
    ${'' /* background: ${styleVar.neutral100}; */}
  `;
  
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
  `;
  
  const MyBarChartLegend = styled.div`
    display: flex;
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    ${'' /* color: ${styleVar.neutral500}; */}
    @media (max-width: 1340px) {
      top: 1rem;
      right: 1.5rem;
    }
  `;
  
  const LegendDetail = styled.p`
    margin: 0 0 0 2rem;
  `;
  
  const ColorBullet = styled.span`
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    margin: 0 0.5rem 0 0;
    border-radius: 50%;
    background: ${(props) => props.background};
  `;
  
  const TooltipContainer = styled.div`
    border: none;
    background-color: #E60000;
    opacity: 90%;
    margin-right: 50px;
  `;
  
  const TooltipLine = styled.p`
    padding: 0.75rem;
    margin: 0;
    color: white;
    font-size: 0.7rem;
    font-weight: 500;
    ${'' /* background: ${(props) => props.background}; */}
  `;