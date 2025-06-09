import { Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { FaSortNumericUp } from "react-icons/fa";
const products = [
    {
        _id: "1",
        name: "Oversized Black T-Shirt",
        price: 799,
        sizes: ["M", "L", "XL"],
        category: "Men",
        stock: 34,
        tags: ["casual", "black"],
        images: [
            "https://veirdo.in/cdn/shop/files/b_0119493a-9927-4550-8323-baefe5f625c0.jpg?v=1724147309",
        ],
        isFeatured: true,
        ratings: 4.2,
    },
    {
        _id: "2",
        name: "Barbie Pink Tee",
        price: 999,
        sizes: ["S", "M"],
        category: "Women",
        stock: 12,
        tags: ["pink", "graphic"],
        images: [
            "https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1747992993",
        ],
        isFeatured: false,
        ratings: 4.5,
    },
    {
        _id: "3",
        name: "Classic White Shirt",
        price: 1199,
        sizes: ["M", "L"],
        category: "Men",
        stock: 20,
        tags: ["formal", "white"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwWTfGsvKRm8YmKORbE8ZJyrZS9-naQwhTg&s",
        ],
        isFeatured: false,
        ratings: 4.0,
    },
    {
        _id: "4",
        name: "Denim Jacket",
        price: 1999,
        sizes: ["L", "XL"],
        category: "Men",
        stock: 8,
        tags: ["denim", "jacket"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFghF5f4bO9B-_aXZ4QTI2Fw-LCW4lPV1zQ&s",
        ],
        isFeatured: true,
        ratings: 4.7,
    },
    {
        _id: "5",
        name: "Floral Summer Dress",
        price: 1499,
        sizes: ["S", "M", "L"],
        category: "Women",
        stock: 15,
        tags: ["floral", "summer"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzKfNm6bPeGZY-XFUcteMeDb8STmsOoo6X9A&s",
        ],
        isFeatured: true,
        ratings: 4.3,
    },
    {
        _id: "6",
        name: "Kids Cartoon Tee",
        price: 499,
        sizes: ["XS", "S"],
        category: "Kids",
        stock: 25,
        tags: ["cartoon", "kids"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStqfgnXavvtyn1oC0_88vbuAHis-pksYadnA&s",
        ],
        isFeatured: false,
        ratings: 4.1,
    },
    {
        _id: "7",
        name: "Sports Shorts",
        price: 699,
        sizes: ["M", "L", "XL"],
        category: "Men",
        stock: 40,
        tags: ["sports", "shorts"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsaW0EStAFcJ05RR804sKpnYnzhCLOgkNnoA&s",
        ],
        isFeatured: false,
        ratings: 4.0,
    },
    {
        _id: "8",
        name: "Women's Hoodie",
        price: 1299,
        sizes: ["S", "M", "L"],
        category: "Women",
        stock: 18,
        tags: ["hoodie", "winter"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqukWKreJZzBAYl_uNTboTEI9APaZUPsA2g&s",
        ],
        isFeatured: true,
        ratings: 4.6,
    },
    {
        _id: "9",
        name: "Men's Track Pants",
        price: 899,
        sizes: ["M", "L", "XL"],
        category: "Men",
        stock: 22,
        tags: ["track", "pants"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZNENTfgO2NZ-COqJIaqgcXlyYkDUj8Tg-A&s",
        ],
        isFeatured: false,
        ratings: 4.2,
    },
    {
        _id: "10",
        name: "Kids Party Dress",
        price: 1599,
        sizes: ["XS", "S"],
        category: "Kids",
        stock: 10,
        tags: ["party", "kids"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrFubg4wmASO_OkB3yLTrgaKMmb5Er-3NogA&s",
        ],
        isFeatured: true,
        ratings: 4.8,
    },
];

const ProductTable = ({ products, loading, setEditingProduct, setIsEditModalOpen}) => {

      if (loading) return <p>Loading...</p>;
  if (!products.length) return <p>No products found.</p>;
   

    const handleEditClick = (product) => {
        setEditingProduct(product);
        setIsEditModalOpen(true);
    };

    const handleSaveProduct = (updatedProduct) => {
        // Update your product list with the updated product
        // This depends on how you're managing state (Redux, Context API, local state, etc.)
        console.log("Updated product:", updatedProduct);
        setIsEditModalOpen(false);
    };
    return (
        <table className="min-w-full  text-sm text-left">
            <thead className="bg-[#F6F6F6] text-gray-700 ">
                <tr className="">
                    <th className="p-3">Image</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Sizes</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">
                        Stock{" "}
                        <span className="inline-block cursor-pointer">
                            <FaSortNumericUp />
                        </span>{" "}
                    </th>
                    <th className="p-3">Tags</th>
                    <th className="p-3">Featured</th>
                    <th className="p-3">Rating</th>
                    <th className="p-3">Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((prod) => (
                    <tr key={prod._id} className=" hover:bg-gray-50">
                        <td className="p-3">
                            <img
                                src={prod.images[0]}
                                alt={prod.name}
                                className="h-12 w-12 object-cover rounded-full"
                            />
                        </td>
                        <td className="p-3">{prod.name}</td>
                        <td className="p-3">₹{prod.price}</td>
                        <td className="p-3">{prod.sizes.join(", ")}</td>
                        <td className="p-3">{prod.category}</td>
                        <td className="p-3">
                            {prod.stock > 0 ? (
                                <span className="text-green-600 font-semibold">
                                    {prod.stock}
                                </span>
                            ) : (
                                <span className="text-red-500 font-semibold">
                                    Out of stock
                                </span>
                            )}
                        </td>
                        <td className="p-3">
                            {prod.tags.length > 0 ? prod.tags.join(", ") : "-"}
                        </td>
                        <td className="p-3">
                            {prod.isFeatured ? (
                                <span className="text-green-500 font-bold">
                                    Yes
                                </span>
                            ) : (
                                "No"
                            )}
                        </td>
                        <td className="p-3">{prod.ratings} ★</td>
                        <td className="p-3 space-x-3">
                            <button onClick={()=>handleEditClick(prod)} className="text-xs cursor-pointer">
                                <Pencil size={"15px"} />
                            </button>
                            <button className=" text-xs cursor-pointer">
                                <Trash2 size={"15px"} />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductTable;
