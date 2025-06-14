import React from "react";
import { ShoppingCart, BadgeDollarSign, Users, PackagePlus } from "lucide-react";

const stats = [
  {
    title: "TOTAL REVENUE MADE",
    value: "$27,450",
    icon: <BadgeDollarSign className="w-5 h-5 text-green-600" />,
    change: "5.2%",
    description: "vs Last Month",
    light: true,
  },
  {
    title: "TOTAL ORDERS",
    value: "1000",
    icon: <ShoppingCart className="w-5 h-5 text-green-400" />,
    change: "5.2%",
    description: "vs Last Month",
    light: false,
  },
  {
    title: "TOTAL VISITORS",
    value: "18,900",
    icon: <Users className="w-5 h-5 text-blue-500" />,
    change: "3.7%",
    description: "vs Last Month",
    light: true,
  },
  {
    title: "TOTAL PRODUCTS ADDED",
    value: "320",
    icon: <PackagePlus className="w-5 h-5 text-purple-500" />,
    change: "8.1%",
    description: "vs Last Month",
    light: false,
  },
];

const StatsCard = () => {
  return (
    <div className="flex flex-wrap gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`sm:w-64 w-full p-6 rounded-xl shadow-md ${
            stat.light ? "bg-white text-gray-900" : "bg-gray-900 text-white"
          }`}
        >
          <div className="flex items-center justify-between">
            <div
              className={`p-2 rounded-md ${
                stat.light ? "bg-green-100" : "bg-green-900"
              }`}
            >
              {stat.icon}
            </div>
            <div className="text-sm font-medium text-right">{stat.title}</div>
          </div>

          <div className="mt-4 text-3xl font-bold">{stat.value}</div>

          <div className="mt-2 text-sm text-green-500 flex items-center gap-1">
            <span>↑ {stat.change}</span>
            <span className={`${stat.light ? "text-gray-600" : "text-gray-400"}`}>
              {stat.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
