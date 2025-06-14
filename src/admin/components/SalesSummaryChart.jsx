import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    { date: "17 Mar", current: 10000, week1: 8000, week2: 12000, week3: 30000 },
    {
        date: "18 Mar",
        current: 18000,
        week1: 12000,
        week2: 15000,
        week3: 28000,
    },
    {
        date: "19 Mar",
        current: 15000,
        week1: 25000,
        week2: 10000,
        week3: 24000,
    },
    { date: "20 Mar", current: 13000, week1: 9000, week2: 30000, week3: 22000 },
    {
        date: "21 Mar",
        current: 18000,
        week1: 16000,
        week2: 27000,
        week3: 19000,
    },
    {
        date: "22 Mar",
        current: 28000,
        week1: 15000,
        week2: 35000,
        week3: 26000,
    },
    {
        date: "23 Mar",
        current: 33000,
        week1: 10000,
        week2: 32000,
        week3: 29000,
    },
];

const SalesSummaryChart = () => {
    return (
        <div className="bg-white rounded-xl shadow-md lg:w-2/3">
            <div className="flex justify-between items-center p-5">
                <h2 className="text-lg font-semibold">Sales Summary</h2>
                <div className="space-x-8 text-sm text-gray-500">
                    <button className="font-medium">Day</button>
                    <button className="text-black font-semibold border-b-2 border-black">
                        Week
                    </button>
                    <button className="">Month</button>
                </div>
            </div>
            <hr className="text-gray-300" />
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <XAxis dataKey="date" />
                    <YAxis tickFormatter={(v) => `${v / 1000}K`} />
                    <Tooltip formatter={(value) => [`$${value / 1000}K`, ""]} />
                    <Legend verticalAlign="top" height={36} />

                    <Line
                        type="monotone"
                        dataKey="current"
                        stroke="#3b82f6"
                        dot={false}
                        name="Current Week"
                    />
                    <Line
                        type="monotone"
                        dataKey="week1"
                        stroke="#10b981"
                        dot={false}
                        name="Week 1"
                    />
                    <Line
                        type="monotone"
                        dataKey="week2"
                        stroke="#fbbf24"
                        dot={false}
                        name="Week 2"
                    />
                    <Line
                        type="monotone"
                        dataKey="week3"
                        stroke="#ef4444"
                        dot={false}
                        name="Week 3"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SalesSummaryChart;
