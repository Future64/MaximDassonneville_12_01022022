import React from "react"
import "./MyScoreChart.css"
import {
PieChart,Cell,Pie, Label, ResponsiveContainer} from "recharts";
import PropTypes from "prop-types"


const MyScoreChart = (props) => {
  
  let dataScore
  
  props.mainData.todayScore === undefined 
  ? dataScore = props.mainData.score 
  : dataScore = props.mainData.todayScore
  
  const finnalyScore = dataScore * 100
  const data = [
      { name: "contentZone", value: dataScore },
      { name: "emptyZone", value: 1 - dataScore  }
    ];
    
    return ( 
        <ResponsiveContainer width="100%" height="100%">

            <PieChart width={160} height={160} >
                <Pie
                data={data}
                cx="50%"
                cy="50%"
                dataKey="value"
                innerRadius={60}
                outerRadius={80}
                startAngle={90}
                endAngle={450}
                // radius={50}
                >
                {data.map((name, value) => {
                    if (value === 1) {
                    return <Cell key={`cell-${value}`} fill="#FBFBFB" radius={[50, 50, 0, 0]}/>;
                    }
                    return <Cell key={`cell-${value}`} fill="#FF0000" radius={[50, 50, 0, 0]} cornerRadius="50%"/>;
                })}
                <Label
                    content={<ScoreLabel />}
                    // position="right"
                />
                <Label
                    content={<CustomLabel score={`${finnalyScore}%`} />}
                    position="center"
                />
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

MyScoreChart.propTypes = {
  mainData: PropTypes.object.isRequired,
  score: PropTypes.oneOf([PropTypes.number, undefined]),
  todayScore: PropTypes.oneOf([PropTypes.number, undefined]),
}
export default MyScoreChart



const CustomLabel = ({ viewBox, score = 0 }) => {
  const { cx, cy } = viewBox;
  return (
    <>
      <text x={cx - 15} y={cy - 5}>
        <tspan
          style={{
            fontWeight: 700,
            fontSize: "1.2em",
            fill: "#020203",
          }}
        >
          {score}
        </tspan>
      </text>
      <text x={cx - 20} y={cy + 15}>
        <tspan
          style={{
            fontSize: "0.9em",
            fill: "#A9A9A9",
          }}
        >
           de votre 
        </tspan>
      </text>
      <text x={cx - 19} y={cy + 35}>
        <tspan
          style={{
            fontSize: "0.9em",
            fill: "#A9A9A9",
            // fontFamily: "Roboto"
          }}
        >
           objectif
        </tspan>
      </text>
    </>
  );
};

const ScoreLabel = ({ viewBox }) => {
  const { cx, cy } = viewBox;
  return (
    <>
      <text x={cx - 80} y={cy - 95}>
        <tspan
          style={{
            fontSize: "0.9em",
            fontWeight: "bold" ,
            fill: "black",
          }}
        >
           Score
        </tspan>
      </text>
    </>
  );
};