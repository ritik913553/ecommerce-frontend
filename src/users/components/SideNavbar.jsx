import React from "react";

const SideNavbar = ({ currentView, setCurrentView, logoutHandler }) => {
    return (
        <div className=" w-full md:min-h-[60vh]  md:w-64 bg-gray-300 p-4 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232]">
            {/* <h2 className="text-xl font-bold text-gray-800 mb-4">My Account</h2> */}
            <nav className="flex flex-col justify-between  gap-y-2 h-full ">
                <div className="w-full ">
                    <button
                        onClick={() => setCurrentView("profile")}
                        className={`w-full text-left p-2  rounded-md font-semibold ${
                            currentView === "profile"
                                ? "bg-gray-800 text-white"
                                : "hover:bg-gray-200"
                        }`}
                    >
                        Profile
                    </button>
                    <button
                        onClick={() => setCurrentView("orders")}
                        className={`w-full mt-4 text-left p-2 rounded-md font-semibold ${
                            currentView === "orders"
                                ? "bg-gray-800 text-white"
                                : "hover:bg-gray-200"
                        }`}
                    >
                        Orders
                    </button>
                    <button
                        onClick={() => setCurrentView("address")}
                        className={`w-full mt-4 text-left p-2 rounded-md font-semibold ${
                            currentView === "address"
                                ? "bg-gray-800 text-white"
                                : "hover:bg-gray-200"
                        }`}
                    >
                        Address
                    </button>
                </div>
                <button
                    onClick={logoutHandler}
                    className="w-full bg-red-100 text-red-500 md:text-black md:bg-gray-300 text-left p-2 rounded-md font-semibold sm:hover:bg-red-100 sm:hover:text-red-700 mt-4"
                >
                    Logout
                </button>
            </nav>
        </div>
    );
};
export default SideNavbar;
