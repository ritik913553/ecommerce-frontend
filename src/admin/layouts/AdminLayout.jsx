import { Outlet, Navigate } from "react-router-dom";

// import { useAuth } from "../../hooks/useAuth";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import { useState } from "react";

const AdminLayout = () => {
    //   const { user } = useAuth(); // custom hook or context

    //   if (!user || user.role !== "admin") {
    //     return <Navigate to="/login" replace />;
    //   }
    const [pageName,setPageName] = useState('Dashboard');
    return (
        <div className="flex h-screen">
            <AdminSidebar setPageName={setPageName} />
            <div className="flex flex-col flex-1">
                <AdminNavbar pageName={pageName} />
                <main className="productList box-border p-10 bg-[#F6F6F6] h-full overflow-y-auto ">
                    <Outlet  /> {/* renders nested admin pages */}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
