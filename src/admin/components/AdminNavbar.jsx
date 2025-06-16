import {
    Bell,
    ChevronDown,
    PanelLeftDashed,
    Search,
    Settings,
} from "lucide-react"; // Optional, use any icon lib or SVGs
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import profilePic from "../assets/admin.jpg"; // Replace with your correct image path

const getHeaderFromPath = (pathname) => {
    if (pathname === "/admin") return "Dashboard";
    if (pathname.startsWith("/admin/products")) return "Products";
    if (pathname.startsWith("/admin/orders")) return "Orders";
    if (pathname.startsWith("/admin/customers")) return "Customers";
    return "Admin";
};
const AdminNavbar = ({ pageName, setIsNotiOpen, setIsSideBarOpen }) => {
    const { pathname } = useLocation();
    const [iconSize, setIconSize] = useState(
        window.innerWidth >= 841 ? 24 : 18
    );
    const header = getHeaderFromPath(pathname);
    useEffect(() => {
        const handleResize = () => {
            setIconSize(window.innerWidth >= 841 ? 24 : 18);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { user } = useAuth();

    return (
        <nav className="w-full flex items-center justify-between p-5   bg-white shadow-sm">
            {/* Left Side: Title + Search */}
            <div className="flex items-center gap-4">
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsSideBarOpen((prev) => !prev);
                    }}
                    className="mr-4 cursor-pointer"
                >
                    {" "}
                    <PanelLeftDashed />
                </div>
                <h1 className="text-xl sm:text-3xl font-bold">{header}</h1>
                <div className="hidden md:flex items-center gap-2">
                    {/* Search input */}
                    <div className="relative">
                        <Search
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                        />
                        <input
                            type="text"
                            placeholder="Search for something..."
                            className="pl-10 pr-4 py-2 w-48 lg:w-64 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Filter dropdown */}
                    <select className="border border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <option>This Month</option>
                        <option>Last Month</option>
                        <option>This Year</option>
                    </select>
                </div>
            </div>

            {/* Right Side: Icons + Profile */}
            <div className="flex items-center gap-2 sm:gap-3 ">
                {/* Bell Icon with notification dot */}
                <div
                    onClick={() => setIsNotiOpen((prev) => !prev)}
                    className="relative cursor-pointer"
                >
                    <Bell size={iconSize} className="text-gray-500" />
                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-2">
                    <img
                        src={user.photo}
                        alt="Admin"
                        className="sm:h-12 sm:w-12 h-10 w-10 rounded-full border-2 border-green-400 object-cover"
                    />
                    <div className="text-sm">
                        <p className="font-medium">{user.name}</p>
                        <p className="text-xs text-gray-500">Admin</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavbar;
