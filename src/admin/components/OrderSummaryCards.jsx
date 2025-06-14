import { FaShoppingCart, FaCreditCard, FaTruck, FaBan } from "react-icons/fa";

const SummaryCard = ({ icon, title, value, bgColor, borderColor }) => {
    return (
        <div className="flex-1 bg-white shadow rounded-xl p-4 relative overflow-hidden">
            <div
                className={`text-2xl mb-2 inline-block p-2 rounded-lg ${bgColor} border-2 ${borderColor}`}
            >
                {icon}
            </div>
            <h4 className="text-xl font-bold  text-gray-600">{title}</h4>
            <p className="text-2xl font-semibold text-gray-800 mt-1">{value}</p>

            {/* Decoration bubbles */}
            <div
                className={`absolute -bottom-4 -right-4 w-20 h-20 ${bgColor} rounded-full opacity-30`}
            ></div>
            <div
                className={`absolute -bottom-10 right-10 w-24 h-24 ${bgColor} rounded-full opacity-20`}
            ></div>
            <div
                className={`absolute bottom-3 -right-2 w-24 h-24 ${bgColor} rounded-full opacity-20`}
            ></div>
        </div>
    );
};

export default function OrderSummaryCards({
    totalOrders = 0,
    unpaidOrders = 0,
    deliveredOrders = 0,
    cancelledOrders = 0,
}) {
    return (
        <div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SummaryCard
                icon={<FaShoppingCart className="text-blue-600" />}
                title="All Orders"
                value={totalOrders}
                bgColor="bg-blue-300"
                borderColor="border-blue-400"
            />
            <SummaryCard
                icon={<FaCreditCard className="text-yellow-500" />}
                title="Need to Pay"
                value={unpaidOrders}
                bgColor="bg-yellow-300"
                borderColor="border-yellow-400"
            />
            <SummaryCard
                icon={<FaTruck className="text-green-600" />}
                title="Delivered"
                value={deliveredOrders}
                bgColor="bg-green-300"
                borderColor="border-green-400"
            />
            <SummaryCard
                icon={<FaBan className="text-red-500" />}
                title="Cancelled"
                value={cancelledOrders}
                bgColor="bg-red-300"
                borderColor="border-red-400"
            />
        </div>
    );
}
