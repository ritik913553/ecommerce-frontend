import React from "react";
import StatsCard from "../components/StatsCard";
import SalesPieChart from "../components/SalesPieChart";
import TopSellingProduct from "../components/TopSellingProduct";
import CustomerSegmentationChart from "../components/CustomerSegmentationChart";
import SalesFunnelChart from "../components/SalesFunnelChart";
import TransactionTable from "../components/TransactionTable";
import SalesSummaryChart from "../components/SalesSummaryChart";

const AdminDashboard = () => {
    return (
        <div className="w-[100%]">
            <h1>Today,23 March 2024</h1>
            <div className="mt-5">
                <StatsCard />
            </div>
            <div className="mt-5 flex flex-col lg:flex-row justify-between gap-x-20 gap-y-5">
                <SalesSummaryChart />
                <SalesPieChart />
            </div>
            <div className="mt-5 flex flex-col lg:flex-row gap-y-3 gap-x-3 justify-between">
                <TransactionTable />
                <TopSellingProduct />
            </div>
            <div className="mt-5 flex flex-col lg:flex-row gap-y-3  gap-x-5 justify-between">
                <SalesFunnelChart />
                <CustomerSegmentationChart />
            </div>
        </div>
    );
};

export default AdminDashboard;
