import React from "react";
import AdminLayout from "./admin/layouts/AdminLayout";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminProductList from "./admin/pages/AdminProductList";
import AdminOrderList from "./admin/pages/AdminOrderList";
import AdminCustomerList from "./admin/pages/AdminCustomerList";

const App = () => {
    return (
        <Routes>
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="products" element={<AdminProductList />} />
                <Route path="orders" element={<AdminOrderList />} />
                <Route path="customers" element={<AdminCustomerList />} />
                
                {/* more admin routes */}
            </Route>
        </Routes>
    );
};

export default App;
