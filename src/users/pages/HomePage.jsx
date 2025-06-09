import React from "react";
import HeroSection from "../components/sections/HeroSection";
import ShopCategories from "../components/sections/ShopCategories";
import TopPicks from "../components/sections/TopPicks";
import GenderShop from "../components/sections/GenderShop";
import Collections from "../components/sections/Collections";
const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <ShopCategories />
            <TopPicks />
            <Collections />

            <GenderShop />
        </div>
    );
};

export default HomePage;
