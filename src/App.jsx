import React, { useEffect, useState } from "react";
import AdminLayout from "./admin/layouts/AdminLayout";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminProductList from "./admin/pages/AdminProductList";
import AdminOrderList from "./admin/pages/AdminOrderList";
import AdminCustomerList from "./admin/pages/AdminCustomerList";
import UserLayout from "./users/layouts/UserLayout";
import HomePage from "./users/pages/HomePage";
import MyAccountPage from "./users/pages/MyAccountPage";
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh";
import useAuth from "./hooks/useAuth";
import { requestFCMToken ,onMessageListener } from "./utils/firebaseUtils";
import { toast } from "react-toastify";
import {  onMessage } from "firebase/messaging";



const AdminProtectedRoute = () => {
    const { user } = useAuth();
    if (!user || user.role !== "admin") {
        return <Navigate to="/" replace />;
    }
    return <Outlet />;
};

const App = () => {
  useEffect(() => {
  const initNotifications = async () => {
    await requestFCMToken();

    onMessageListener((payload) => {
      console.log("Foreground notification:", payload);

      toast(
        <div>
          <strong>{payload.notification?.title}</strong>
          <div>{payload.notification?.body}</div>
        </div>,
        { position: "top-right" }
      );
    });
  };

  initNotifications();
}, []);

    const { loading } = useLoadingWithRefresh();
    if (loading) {
        return <div>Loading...</div>; // or a spinner
    }
    return (
        
        <Routes>
            <Route element={<AdminProtectedRoute />}>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<AdminDashboard />} />
                    <Route path="products" element={<AdminProductList />} />
                    <Route path="orders" element={<AdminOrderList />} />
                    <Route path="customers" element={<AdminCustomerList />} />
                    {/* more admin routes */}
                </Route>
            </Route>
            <Route path="/" element={<UserLayout />}>
                <Route index element={<HomePage />} />
                <Route path="my-account" element={<MyAccountPage />} />
            </Route>
        </Routes>
    );
};

export default App;
