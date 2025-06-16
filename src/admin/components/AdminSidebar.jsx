import React from "react";
import { Link } from "react-router-dom";
import { GoPackage } from "react-icons/go";
import { TbLayoutDashboard } from "react-icons/tb";
import { LuFileText } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { MdOutlineLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setAuth } from "../../features/auth/authSlice";
import { logout } from "../../http";
const AdminSidebar = ({ setPageName, isSideBarOpen, setIsSideBarOpen }) => {
    const dispatch = useDispatch();
    const handleLinkClick = () => {
        if (window.innerWidth < 768) {
            setIsSideBarOpen(false);
        }
    };
    const handlLogout = async (e) => {
        e.preventDefault();
        try {
            const res = await logout();
            dispatch(setAuth(null));
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <aside
            className={`absolute z-100 top-0 left-0 h-screen md:static bg-[#172233] ${
                isSideBarOpen ? "w-64" : "w-0"
            }  text-[#3DA16C] flex flex-col overflow-hidden transition-all ease-in-out delay-75 duration-300`}
        >
            <div className="p-6 font-black text-2xl border-b border-gray-700">
                Caprio Store
            </div>
            <nav className="flex-1 p-4 space-y-2 ">
                <Link
                    to="/admin"
                    onClick={handleLinkClick}
                    className=" hover:bg-[#1E4541] rounded px-2  flex items-center justify-start gap-x-3 text-lg py-3 "
                >
                    <TbLayoutDashboard /> Dashboard
                </Link>
                <Link
                    to="/admin/products"
                    onClick={handleLinkClick}
                    className=" hover:bg-[#1E4541] rounded px-2  flex items-center justify-start gap-x-3 text-lg py-3 "
                >
                    <GoPackage /> Products
                </Link>
                <Link
                    to="/admin/orders"
                    onClick={handleLinkClick}
                    className=" hover:bg-[#1E4541] rounded px-2  flex items-center justify-start gap-x-3 text-lg py-3 "
                >
                    <LuFileText /> Orders
                </Link>
                <Link
                    to="/admin/customers"
                    onClick={handleLinkClick}
                    className=" hover:bg-[#1E4541] rounded px-2  flex items-center justify-start gap-x-3 text-lg py-3 "
                >
                    <FiUsers /> Customers
                </Link>
            </nav>
            <div className="p-4 border-t border-gray-700 space-y-3">
                <Link
                    to={"/"}
                    className="w-full text-lg bg-[#1E4541] hover:bg-[#3c664d] hover:text-white flex items-center justify-center gap-x-5  py-2 rounded transition cursor-pointer "
                    onClick={() => {
                        // Add your logout logic here
                        // e.g., clear auth tokens, redirect, etc.
                    }}
                >
                    <span className="inline-block text-xl ">
                        <MdOutlineLogout />
                    </span>
                    Go To Shop
                </Link>
                <button
                    className="w-full text-lg bg-[#1E4541] hover:bg-[#3c664d] hover:text-white flex items-center justify-center gap-x-5  py-2 rounded transition cursor-pointer "
                    onClick={handlLogout}
                >
                    <span className="inline-block text-xl ">
                        <MdOutlineLogout />
                    </span>
                    Logout{" "}
                </button>
            </div>
        </aside>
    );
};

export default AdminSidebar;
