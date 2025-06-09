import React from "react";
import Navbar from "../components/layout/Navbar";
import Container from "../components/layout/Container";
import Footer from "../components/layout/Footer";

import { Outlet } from "react-router-dom";
const UserLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main>
              
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default UserLayout;
