import React from "react";

const products = [
    {
        name: "T-Shirt Blue Stripes",
        price: 56,
        status: "Empty",
        unitsSold: 2000,
        img: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
    },
    {
        name: "T-Shirt Red Classic",
        price: 48,
        status: "In Stock",
        unitsSold: 3100,
        img: "https://cdn-icons-png.flaticon.com/512/892/892442.png",
    },
    {
        name: "T-Shirt Graphic Black",
        price: 60,
        status: "In Stock",
        unitsSold: 1200,
        img: "https://cdn-icons-png.flaticon.com/512/892/892433.png",
    },
    {
        name: "T-Shirt Green Sport",
        price: 52,
        status: "Empty",
        unitsSold: 1600,
        img: "https://cdn-icons-png.flaticon.com/512/892/892450.png",
    },
];

const TopSellingProducts = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md lg:w-1/3">
            <h2 className="text-lg font-semibold mb-4">Top Selling Products</h2>

            <div className="flex flex-col gap-5">
                {products.map((product, index) => (
                    <div key={index} className="flex items-center gap-4">
                        {/* Product Image */}
                        <img
                            src={product.img}
                            alt={product.name}
                            className="w-14 h-14 object-cover rounded-md"
                        />

                        {/* Product Info */}
                        <div className="flex flex-col gap-1">
                            <h3 className="text-sm font-semibold text-gray-800">
                                {product.name}
                            </h3>
                            <div className="flex items-center gap-x-2">
                                {" "}
                                <p className="text-green-500 text-sm font-medium">
                                    ${product.price}
                                </p>
                                <span className="text-xs text-gray-500">
                                    each unit
                                </span>
                            </div>
                        </div>

                        {/* Status and Sold */}
                        <div className="ml-auto text-right">
                            <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    product.status === "In Stock"
                                        ? "bg-green-100 text-green-600"
                                        : "bg-red-100 text-red-600"
                                }`}
                            >
                                ● {product.status}
                            </span>
                            <p className="text-[10px] text-gray-500 mt-1">
                                Sold {product.unitsSold.toLocaleString()} units
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopSellingProducts;
