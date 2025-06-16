import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Label,
} from "recharts";

// Sample data
const data = [
    { name: "GTA Collection", value: 1153, color: "#4285F4" },
    { name: "Harry Potter Collection", value: 2253, color: "#34A853" },
    { name: "Barbie Collection", value: 2253, color: "#FBBC05" },
    { name: "Other", value: 2253, color: "#EA4335" },
];

// Custom tooltip to show percentage
const CustomTooltip = ({ active, payload, total }) => {
    if (active && payload && payload.length) {
        const { name, value } = payload[0].payload;
        const percentage = ((value / total) * 100).toFixed(1);
        return (
            <div className=" bg-white p-2 rounded shadow text-sm">
                {/* <p className="font-medium text-gray-700">{name}</p> */}
                <p className="text-gray-500">{percentage}% of total sales</p>
            </div>
        );
    }
    return null;
};

const SalesPieChart = () => {
    const total = data.reduce((sum, item) => sum + item.value, 0);

    return (
        <div className="bg-white p-6 rounded-xl shadow-md lg:w-1/3">
            <h2 className="text-lg font-semibold mb-4">Sales by Collection</h2>
            <div className="flex  items-center gap-4">
                {/* Pie Chart */}
                    <PieChart width={200} height={200}  >
                        <Pie
                            isAnimationActive={true}
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={90}
                            dataKey="value"
                            stroke="none"
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    className="cursor-pointer"
                                    key={`cell-${index}`}
                                    fill={entry.color}
                                />
                            ))}
                            <Label
                                position="center"
                                fontSize={18}
                                fontWeight="bold"
                                fill="#333"
                            />
                        </Pie>
                        <Tooltip
                            content={<CustomTooltip total={total} />}
                            cursor={{ fill: "rgba(0,0,0,0.05)" }}
                        />
                    </PieChart>
                {/* Labels */}
                <div className="flex flex-col justify-center gap-3 text-sm">
                    {data.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <span
                                className="w-2 h-4 rounded-sm"
                                style={{ backgroundColor: item.color }}
                            ></span>
                            <span className="text-gray-700">{item.name}</span>
                            <span className="ml-auto font-medium">
                                ${item.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SalesPieChart;
