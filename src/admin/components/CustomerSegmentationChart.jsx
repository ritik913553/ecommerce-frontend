import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

const data = [
    { age: "13-17", man: 8000, woman: 6000 },
    { age: "18-24", man: 16000, woman: 30000 },
    { age: "25-34", man: 24000, woman: 12000 },
    { age: "35-50", man: 28000, woman: 18000 },
    { age: ">50", man: 12000, woman: 9000 },
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const total = payload[0].value;
        return (
            <div className="bg-white shadow px-3 py-1 rounded text-sm text-green-600 font-semibold">
                {total > 1000 ? total / 1000 + "k" : total.toLocaleString()}{" "}
                People
            </div>
        );
    }
    return null;
};

const CustomerSegmentationChart = () => {
    return (
        <div className="bg-white rounded-xl p shadow-md lg:w-2/5">
            <div className="flex items-center justify-between p-5">
                <h2 className="text-lg font-semibold">Customer Segmentation</h2>
            </div>
            <hr className="text-gray-300 mb-3" />

            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data} barGap={8} barSize={12}>
                    <CartesianGrid strokeDasharray="2 2" />
                    <XAxis dataKey="age" />
                    <YAxis tickFormatter={(val) => `${val / 1000}K`} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        verticalAlign="top"
                        align="left"
                        iconType="circle"
                        iconSize={8}
                        wrapperStyle={{ marginTop: -12 }}
                    />
                    <Bar
                        dataKey="man"
                        fill="#4285F4"
                        name="Man"
                        radius={[4, 4, 0, 0]}
                    />
                    <Bar
                        dataKey="woman"
                        fill="#EA4335"
                        name="Woman"
                        radius={[4, 4, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomerSegmentationChart;
