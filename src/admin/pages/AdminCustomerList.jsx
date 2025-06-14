import React, { useState } from "react";
import {
    FiEdit,
    FiTrash2,
    FiEye,
    FiChevronDown,
    FiChevronUp,
    FiSearch,
} from "react-icons/fi";
import { MdChevronRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import CustomerTable from "../components/CustomerTable";

// Example user data for AdminCustomerList

const AdminCustomerList = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className=" p-2 sm:p-5 w-full bg-white h-full rounded-lg  flex flex-col">
            {/* Table Header with Search */}
            <div className=" flex sm:flex-row gap-y-2 flex-col justify-between sm:items-center">
                <h2 className="text-2xl font-semibold">Customer List</h2>
                <div className="relative">
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search users..."
                        className="pl-10 pr-4  outline-[#3DA16C] border-gray-400 py-1 sm:py-2 border rounded-lg "
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Users Table */}
            <div className="overflow-auto productList flex-1 mt-10 sm:mt-5">
                <CustomerTable searchTerm={searchTerm} />
            </div>
            <div className="w-full flex items-center justify-center gap-x-6 pb-3">
                <div className="rounded-full p-2 bg-[#F6F6F6] text-xl text-gray-600">
                    <MdOutlineKeyboardArrowLeft />
                </div>
                <div className="rounded-full bg-[#F6F6F6] px-5 py-1  flex gap-x-4 text-gray-600">
                    <div className="rounded-full bg-green-500 px-3 py-1 cursor-pointer">
                        1
                    </div>
                    <div className="rounded-full bg-white px-3 py-1 cursor-pointer ">
                        2
                    </div>
                    <div className="rounded-full bg-white px-3 py-1 cursor-pointer ">
                        3
                    </div>
                    <div className="rounded-full bg-white px-3 py-1 cursor-pointer ">
                        4
                    </div>
                </div>
                <div className="rounded-full p-2 bg-[#F6F6F6] text-xl text-gray-600">
                    <MdChevronRight />
                </div>
            </div>
        </div>
    );
};

export default AdminCustomerList;
