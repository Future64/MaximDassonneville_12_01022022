import React from "react"
import "./MyScoreChart.css"
import {
PieChart,Cell,Pie, Label, ResponsiveContainer
} from "recharts";

const data = [
    { name: "de votre objectif", value: 10 },
    { name: "de votre objectif", value: 4 }
  ];
  
  const CustomLabel = ({ viewBox, noOfBubbleTeaSold = 0 }) => {
    const { cx, cy } = viewBox;
    return (
      <React.Fragment>
        <text x={cx - 15} y={cy - 5}>
          <tspan
            style={{
              fontWeight: 700,
              fontSize: "1.5em",
              fill: "#020203",
              fontFamily: "Roboto"
            }}
          >
            {noOfBubbleTeaSold}
          </tspan>
        </text>
        <text x={cx - 50} y={cy + 15}>
          <tspan
            style={{
              fontSize: "0.8em",
              fill: "#A9A9A9",
              fontFamily: "Roboto"
            }}
          >
             de votre objectif
          </tspan>
        </text>
      </React.Fragment>
    );
  };

const MyScoreChart = () => {

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
                {data.map((entry, index) => {
                    if (index === 1) {
                    return <Cell key={`cell-${index}`} fill="#FBFBFB" radius={[50, 50, 0, 0]}/>;
                    }
                    return <Cell key={`cell-${index}`} fill="#FF0000" radius={[50, 50, 0, 0]} cornerRadius="50%"/>;
                })}
                <Label
                    content={<CustomLabel noOfBubbleTeaSold={data[0].value} />}
                    position="center"
                />
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}
export default MyScoreChart