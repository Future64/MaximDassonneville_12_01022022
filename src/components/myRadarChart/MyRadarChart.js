import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './MyRadarChart.css'

const data = [
    {
        subject: 'Intensité',
        A: 120,
        B: 110,
        fullMark: 150,
    },
    {
        subject: 'Vitesse',
        A: 98,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Force',
        A: 86,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Endurence',
        A: 99,
        B: 100,
        fullMark: 150,
    },
    {
        subject: 'Energie',
        A: 85,
        B: 90,
        fullMark: 150,
    },
    {
        subject: 'Cardio',
        A: 65,
        B: 85,
        fullMark: 150,
    },
];

 const MyRadarChart = () => {
    return (
        <ResponsiveContainer width={270} height={250} >
            <RadarChart  cx="50%" cy="50%" outerRadius="80%" data={data} margin={{top:20,right:20,bottom:20,left:20}}>
                <PolarGrid gridType={"polygon"} />
                <PolarAngleAxis  tickLine={false} axisLine={true} dataKey="subject" stroke="#FFFFFF" />
                {/* <PolarRadiusAxis /> */}
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    )
}
export default MyRadarChart