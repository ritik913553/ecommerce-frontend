import React from "react";
import { Bell, MessageCircle, CreditCard, Zap } from "lucide-react";

const NotificationModal = ({ setIsNotiOpen }) => {
    return (
        <div className="productList w-[85%] sm:w-full absolute top-2 right-6 sm:right-40 max-w-sm mx-auto bg-white rounded-xl shadow-xl shadow-black overflow-y-auto font-sans inset-shadow-sm inset-shadow-[#172233] h-[70vh] md:h-[30vw] ">
            {/* Header */}
            <div className="flex sticky-0 top-0 items-center justify-between px-4 py-3 border-b border-gray-300">
                <h2 className="font-semibold text-lg">Notifications</h2>
                <button
                    onClick={() => setIsNotiOpen((prev) => !prev)}
                    className="text-red-500  hover:text-red-900 transition-colors duration-200 ease-in-out cursor-pointer p-2 rounded-full hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                    aria-label="Close"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8" // Slightly larger icon
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5} // Thicker stroke
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>

            {/* Tabs */}
            <div className="flex  px-4 py-2 gap-x-7 border-b border-gray-300 text-sm">
                <button className="text-green-600 font-semibold ">
                    All{" "}
                    <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full text-xs">
                        8
                    </span>
                </button>
                <button className="text-gray-500 ">
                    Orders{" "}
                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">
                        2
                    </span>
                </button>
                <button className="text-gray-500">
                    New Reviews
                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">
                        1
                    </span>
                </button>
            </div>

            {/* Today */}
            <div className="px-4 py-2 text-xs text-gray-500 font-medium">
                TODAY
            </div>
            <div className="space-y-3 px-4 ">
                {/* Paid Order */}
                <div className="bg-green-50 p-3 rounded-lg flex gap-3 items-start">
                    <div className="bg-green-100 p-2 rounded-full">
                        <CreditCard className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-700">
                            Order ID{" "}
                            <span className="text-green-600 font-medium">
                                #A12367J
                            </span>{" "}
                            has been paid by{" "}
                            <span className="font-semibold">Katarina</span>
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            1h ago • Orders
                        </p>
                    </div>
                </div>

                <div className="bg-green-50 p-3 rounded-lg flex gap-3 items-start">
                    <div className="bg-green-100 p-2 rounded-full">
                        <CreditCard className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-700">
                            Order ID{" "}
                            <span className="text-green-600 font-medium">
                                #A12366J
                            </span>{" "}
                            has been paid by{" "}
                            <span className="font-semibold">Rika</span>
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            1h ago • Orders
                        </p>
                    </div>
                </div>

                {/* Sandy Review Notification */}
                <div className="bg-gray-50 p-3 rounded-lg flex gap-3 items-start">
                    <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        className="w-10 h-10 rounded-full"
                        alt="Sandy"
                    />
                    <div>
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold text-green-600">
                                Sandy
                            </span>{" "}
                            gave a review on{" "}
                            <span className="font-medium">T-Shirt</span>
                        </p>

                        {/* Star Rating */}
                        <div className="flex items-center text-yellow-400 mt-1">
                            {Array(4)
                                .fill()
                                .map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-4 h-4 fill-current"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 15l-5.878 3.09L5.804 12 .5 7.91l6.313-.91L10 1.5l3.187 5.5 6.313.91L14.196 12l1.682 5.09z" />
                                    </svg>
                                ))}
                            <svg
                                className="w-4 h-4 fill-gray-300"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 15l-5.878 3.09L5.804 12 .5 7.91l6.313-.91L10 1.5l3.187 5.5 6.313.91L14.196 12l1.682 5.09z" />
                            </svg>
                            <span className="ml-2 text-xs text-gray-500">
                                (4.0)
                            </span>
                        </div>

                        {/* Review Message */}
                        <p className="text-xs text-gray-600 mt-1 italic">
                            “Really comfortable fabric and fits well. Worth the
                            price!”
                        </p>

                        <p className="text-xs text-gray-400 mt-1">
                            2h ago • Review
                        </p>
                    </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg flex gap-3 items-start">
                    <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        className="w-10 h-10 rounded-full"
                        alt="Sandy"
                    />
                    <div>
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold text-green-600">
                                Sandy
                            </span>{" "}
                            send a message for admin
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            2h ago • Messages
                        </p>
                    </div>
                </div>
            </div>

            {/* Yesterday */}
            <div className="px-4 py-2 mt-4 text-xs text-gray-500 font-medium">
                YESTERDAY
            </div>
            <div className="px-4 space-y-2 pb-4">
                <div className="bg-yellow-50 p-3 rounded-lg flex gap-3 items-start">
                    <div className="bg-yellow-100 p-2 rounded-full">
                        <Zap className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-700">
                            Check out new feature of our platform
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            1d ago • Notification
                        </p>
                    </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg flex gap-3 items-start">
                    <div className="bg-green-100 p-2 rounded-full">
                        <CreditCard className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-700">
                            Order ID{" "}
                            <span className="text-green-600 font-medium">
                                #A12366J
                            </span>{" "}
                            has been paid by{" "}
                            <span className="font-semibold">Rika</span>
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            1h ago • Orders
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationModal;
