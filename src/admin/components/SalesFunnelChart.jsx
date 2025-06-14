import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    LabelList,
} from "recharts";

const data = [
    { name: "Visited Site", people: 50110 },
    { name: "Add to Cart", people: 14500 },
    { name: "Purchased", people: 8549 },
];

const SalesFunnelChart = () => {
    return (
        <div className="bg-white rounded-xl  shadow-md lg:w-3/5">
            <div className="flex items-center justify-between p-5">
                <h2 className="text-lg font-semibold">Sales Funnel</h2>
                <div className="flex items-center space-x-8">
                    <button className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full">
                        People ⌄
                    </button>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="cursor-pointer">Day</span>
                        <span className="font-semibold text-black underline">
                            Week
                        </span>
                        <span className="cursor-pointer">Month</span>
                    </div>
                </div>
            </div>
            <hr className="text-gray-300 mb-3" />
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data} barSize={120} barGap={30}>
                    <defs>
                        <pattern
                            id="barPattern"
                            patternUnits="userSpaceOnUse"
                            width="6"
                            height="6"
                        >
                            <rect width="6" height="6" fill="#C6F6D5" />
                            <path
                                d="M0 6L6 0"
                                stroke="#A3E635"
                                strokeWidth="2"
                            />
                        </pattern>
                    </defs>

                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(val) => `${val / 1000}K`} />
                    <Bar
                        dataKey="people"
                        fill="url(#barPattern)"
                        radius={[8, 8, 0, 0]}
                    >
                        <LabelList
                            dataKey="people"
                            position="top"
                            formatter={(val) => val.toLocaleString()}
                            fill="#6B7280"
                            fontSize={12}
                            fontWeight="bold"
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SalesFunnelChart;
