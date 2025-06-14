import { Outlet, Navigate } from "react-router-dom";

// import { useAuth } from "../../hooks/useAuth";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import { useState } from "react";
import NotificationModal from "../components/NotificationModal";

const AdminLayout = () => {
    const [pageName, setPageName] = useState("Dashboard");
    const [isNotiOpen, setIsNotiOpen] = useState(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState(
        () => window.innerWidth >= 768
    );
    const sidebarWidth = isSideBarOpen ? "16rem" : "0";
    const handleLinkClick = () => {
        if (window.innerWidth < 768) {
            setIsSideBarOpen(false);
        }
    };
    return (
        <div className="flex h-auto lg:h-screen bg-red-500 w-screen overflow-x-hidden relative">
            <AdminSidebar
                setPageName={setPageName}
                setIsSideBarOpen={setIsSideBarOpen}
                isSideBarOpen={isSideBarOpen}
            />
            <div
                style={{
                    width: `calc(100vw - ${sidebarWidth})`,
                }}
                className="flex flex-col flex-1"
                onClick={handleLinkClick}
            >
                <AdminNavbar
                    pageName={pageName}
                    setIsNotiOpen={setIsNotiOpen}
                    setIsSideBarOpen={setIsSideBarOpen}
                />
                <main className="productList relative w-[100%] box-border p-3 sm:p-10 bg-[#F6F6F6] h-full overflow-y-auto ">
                    <Outlet /> {/* renders nested admin pages */}
                    {isNotiOpen && <NotificationModal setIsNotiOpen={setIsNotiOpen} />}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
