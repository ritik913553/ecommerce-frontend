import React, { useState } from "react";
import OrderSummaryCards from "../components/OrderSummaryCards";
import OrderTable from "../components/OrderTable";
import { MdChevronRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import ManageOrderModal from "../components/ManageOrderModal";

const AdminOrderList = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);
    return (
        <div className="h-full w-full">
            <h1 className="font-semibold text-xl">Today,23 March 2025</h1>
            <div>Orders</div>
            <OrderSummaryCards
                totalOrders={50}
                unpaidOrders={30}
                deliveredOrders={10}
                cancelledOrders={5}
            />
            <div className="mt-3 p-4 2xl:h-[29vw]  bg-white rounded-xl shadow">
                <OrderTable setSelectedOrder={setSelectedOrder} />
                <div className=" w-full mt-4 flex items-center justify-center gap-x-6">
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

            {selectedOrder && (
                <ManageOrderModal
                    order={selectedOrder}
                    onClose={() => setSelectedOrder(null)}
                />
            )}
        </div>
    );
};

export default AdminOrderList;
