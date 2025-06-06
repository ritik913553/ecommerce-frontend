// import React from "react";
// import AdminLayout from "./admin/layouts/AdminLayout";
// import { Route, Routes } from "react-router-dom";
// import AdminDashboard from "./admin/pages/AdminDashboard";
// import AdminProductList from "./admin/pages/AdminProductList";
// import AdminOrderList from "./admin/pages/AdminOrderList";
// import AdminCustomerList from "./admin/pages/AdminCustomerList";

// const App = () => {
//     return (
//         <Routes>
//             <Route path="/admin" element={<AdminLayout />}>
//                 <Route index element={<AdminDashboard />} />
//                 <Route path="products" element={<AdminProductList />} />
//                 <Route path="orders" element={<AdminOrderList />} />
//                 <Route path="customers" element={<AdminCustomerList />} />
                
//                 {/* more admin routes */}
//             </Route>
//         </Routes>
//     );
// };

// export default App;






import React from 'react';
import Navbar from './users/components/layout/Navbar';
import Footer from './users/components/layout/Footer';
import HeroSection from './users/components/sections/HeroSection';
import ShopCategories from './users/components/sections/ShopCategories';
import TopPicks from './users/components/sections/TopPicks';
import Collections from './users/components/sections/Collections';
import GenderShop from './users/components/sections/GenderShop';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <HeroSection />
        <ShopCategories />
        <TopPicks />
        <Collections 
        />
        
        <GenderShop />
       
       
     
      </main>
      <Footer />
    </div>
  );
}

export default App;