
import React from "react";
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
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
            // width={1200}
            // height={400}
            data={data}
            margin={{ top: 80, right: 48, bottom: 32, left: 48 }}
            barGap={8}
            barCategoryGap="25%"
        >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" dy={16} tickLine={false} tick={{ fontSize: 14, fontWeight: 500 }} />
            <YAxis orientation="right" axisLine={false} tickLine={false} domain={["dataMin - 1", "dataMax + 2"]} allowDecimals={false} dx={18} />
            <Tooltip cursor={{ fill: "rgba(0, 0, 0, 0.1)", }} />
            <Legend />
            <Bar dataKey="pv" fill="#282D30" radius={[50, 50, 0, 0]} maxBarSize={8} />
            <Bar dataKey="uv" fill="#E60000" radius={[50, 50, 0, 0]} maxBarSize={8} />
        </BarChart>

        </ResponsiveContainer>
    );
}
export default MyBarChart