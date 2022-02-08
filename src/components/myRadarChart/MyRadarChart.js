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
        <ResponsiveContainer width="100%" height="100%" >
            <RadarChart cx="50%" cy="50%" data={data} outerRadius={window.innerWidth > 1340 ? "70%" : "60%"}>
                <PolarGrid gridType={"polygon"} radialLines={false} />
                <PolarAngleAxis tickLine={false} axisLine={true} dataKey="subject" stroke="#FFFFFF" dy={4} tick={{ fontSize: 12, fontWeight: 500, }} />
                {/* <PolarRadiusAxis /> */}
                <Radar name="Mike" dataKey="A" stroke="transparent" fill="rgba(255, 1, 1, 2)" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    )
}
export default MyRadarChart