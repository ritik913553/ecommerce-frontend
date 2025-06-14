import React from "react";
import clsx from "clsx";

const statusStyles = {
    Pending: "bg-yellow-100 text-yellow-600",
    Confirmed: "bg-blue-100 text-blue-600",
    Shipped: "bg-pink-100 text-pink-600",
    Delivered: "bg-green-100 text-green-600",
    Cancelled: "bg-gray-200 text-gray-600",
};
const orders = [
    {
        _id: "A10001",
        user: { name: "Katarina", email: "katarina@mail.com" },
        orderItems: [
            {
                name: "Basketball",
                quantity: 1,
                size: "L",
                price: 300.34,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwWTfGsvKRm8YmKORbE8ZJyrZS9-naQwhTg&s",
            },
        ],
        createdAt: "2024-03-18T12:40:00Z",
        shippingAddress: {
            name: "Katarina",
            phone: "9876543210",
            street: "21 Jump Street",
            city: "New York",
            state: "NY",
            pincode: "10001",
            country: "USA",
        },
        paymentMethod: "COD",
        isPaid: false,
        priceDetails: {
            itemsPrice: 300.34,
            shippingPrice: 10,
            totalPrice: 310.34,
        },
        orderStatus: "Shipped",
        deliveryPartner: {
            name: "FedEx",
            trackingId: "FDX123456",
            trackingUrl: "https://fedex.com/track/FDX123456",
        },
    },
    {
        _id: "A10002",
        user: { name: "Rika", email: "rika@mail.com" },
        orderItems: [
            {
                name: "Headphones",
                quantity: 1,
                size: "M",
                price: 567.21,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFghF5f4bO9B-_aXZ4QTI2Fw-LCW4lPV1zQ&s",
            },
        ],
        createdAt: "2024-03-18T12:40:00Z",
        shippingAddress: {
            name: "Rika",
            phone: "9876543200",
            street: "Maple Street",
            city: "Chicago",
            state: "IL",
            pincode: "60601",
            country: "USA",
        },
        paymentMethod: "Online",
        isPaid: false,
        priceDetails: {
            itemsPrice: 567.21,
            shippingPrice: 15,
            totalPrice: 582.21,
        },
        orderStatus: "Pending",
        deliveryPartner: {
            name: "UPS",
            trackingId: "UPS98765",
            trackingUrl: "https://ups.com/track?tracknum=UPS98765",
        },
    },
    {
        _id: "A10003",
        user: { name: "Sandy", email: "sandy@mail.com" },
        createdAt: "2024-03-18T12:40:00Z",
        orderItems: [
            {
                name: "iPhone Pro",
                quantity: 1,
                size: "M",
                price: 10.22,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzKfNm6bPeGZY-XFUcteMeDb8STmsOoo6X9A&s",
            },
        ],
        shippingAddress: {
            name: "Sandy",
            phone: "1234567890",
            street: "Sector 21",
            city: "Delhi",
            state: "Delhi",
            pincode: "110001",
            country: "India",
        },
        paymentMethod: "Online",
        isPaid: true,
        priceDetails: {
            itemsPrice: 10.22,
            shippingPrice: 0,
            totalPrice: 10.22,
        },
        orderStatus: "Delivered",
        deliveryPartner: {
            name: "DTDC",
            trackingId: "DTDC123456",
            trackingUrl: "https://dtdc.in/track/DTDC123456",
        },
    },
    {
        _id: "A10004",
        user: { name: "Norman", email: "norman@mail.com" },
        createdAt: "2024-03-18T12:40:00Z",
        orderItems: [
            {
                name: "Canon 600D",
                quantity: 1,
                size: "L",
                price: 499.99,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStqfgnXavvtyn1oC0_88vbuAHis-pksYadnA&s",
            },
        ],
        shippingAddress: {
            name: "Norman",
            phone: "8976543210",
            street: "Film City",
            city: "Mumbai",
            state: "Maharashtra",
            pincode: "400101",
            country: "India",
        },
        paymentMethod: "Online",
        isPaid: true,
        priceDetails: {
            itemsPrice: 499.99,
            shippingPrice: 25,
            totalPrice: 524.99,
        },
        orderStatus: "Confirmed",
        deliveryPartner: {
            name: "BlueDart",
            trackingId: "BD456789",
            trackingUrl: "https://bluedart.com/track/BD456789",
        },
    },
    {
        _id: "A10005",
        user: { name: "Ayush", email: "ayush@mail.com" },
        createdAt: "2024-03-18T12:40:00Z",
        orderItems: [
            {
                name: "T-Shirt",
                quantity: 2,
                size: "XL",
                price: 15.5,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsaW0EStAFcJ05RR804sKpnYnzhCLOgkNnoA&s",
            },
        ],
        shippingAddress: {
            name: "Ayush",
            phone: "9345678123",
            street: "MG Road",
            city: "Bangalore",
            state: "Karnataka",
            pincode: "560001",
            country: "India",
        },
        paymentMethod: "COD",
        isPaid: false,
        priceDetails: {
            itemsPrice: 31.0,
            shippingPrice: 5,
            totalPrice: 36.0,
        },
        orderStatus: "Pending",
        deliveryPartner: {
            name: "",
            trackingId: "",
            trackingUrl: "",
        },
    },
    {
        _id: "A10006",
        user: { name: "Rindi", email: "rindi@mail.com" },
        createdAt: "2024-03-18T12:40:00Z",
        orderItems: [
            {
                name: "T-Shirt",
                quantity: 1,
                size: "S",
                price: 10.22,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqukWKreJZzBAYl_uNTboTEI9APaZUPsA2g&s",
            },
        ],
        shippingAddress: {
            name: "Rindi",
            phone: "9445567890",
            street: "Nehru Street",
            city: "Pune",
            state: "Maharashtra",
            pincode: "411001",
            country: "India",
        },
        paymentMethod: "Online",
        isPaid: true,
        priceDetails: {
            itemsPrice: 10.22,
            shippingPrice: 0,
            totalPrice: 10.22,
        },
        orderStatus: "Cancelled",
        deliveryPartner: {
            name: "",
            trackingId: "",
            trackingUrl: "",
        },
    },
    {
        _id: "A10007",
        user: { name: "Esha", email: "esha@mail.com" },
        createdAt: "2024-03-18T12:40:00Z",
        orderItems: [
            {
                name: "Smartwatch",
                quantity: 1,
                size: "M",
                price: 120.0,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZNENTfgO2NZ-COqJIaqgcXlyYkDUj8Tg-A&s",
            },
        ],
        shippingAddress: {
            name: "Esha",
            phone: "9988776655",
            street: "Park Street",
            city: "Kolkata",
            state: "West Bengal",
            pincode: "700016",
            country: "India",
        },
        paymentMethod: "Online",
        isPaid: false,
        priceDetails: {
            itemsPrice: 120.0,
            shippingPrice: 20,
            totalPrice: 140.0,
        },
        orderStatus: "Confirmed",
        deliveryPartner: {
            name: "India Post",
            trackingId: "IPOST123",
            trackingUrl: "https://indiapost.gov.in/track/IPOST123",
        },
    },
    {
        _id: "A10008",
        user: { name: "Arjun", email: "arjun@mail.com" },
        createdAt: "2024-03-18T12:40:00Z",
        orderItems: [
            {
                name: "Gaming Mouse",
                quantity: 1,
                size: "M",
                price: 49.99,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrFubg4wmASO_OkB3yLTrgaKMmb5Er-3NogA&s",
            },
        ],
        shippingAddress: {
            name: "Arjun",
            phone: "9090909090",
            street: "Rama Road",
            city: "Hyderabad",
            state: "Telangana",
            pincode: "500001",
            country: "India",
        },
        paymentMethod: "COD",
        isPaid: false,
        priceDetails: {
            itemsPrice: 49.99,
            shippingPrice: 0,
            totalPrice: 49.99,
        },
        orderStatus: "Pending",
        deliveryPartner: {},
    },
    {
        _id: "A10009",
        user: { name: "Simran", email: "simran@mail.com" },
        createdAt: "2024-03-18T12:40:00Z",
        orderItems: [
            {
                name: "Shoes",
                quantity: 1,
                size: "XL",
                price: 89.0,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrFubg4wmASO_OkB3yLTrgaKMmb5Er-3NogA&s",
            },
        ],
        shippingAddress: {
            name: "Simran",
            phone: "8123456789",
            street: "Linking Road",
            city: "Mumbai",
            state: "Maharashtra",
            pincode: "400050",
            country: "India",
        },
        paymentMethod: "Online",
        isPaid: true,
        priceDetails: {
            itemsPrice: 89.0,
            shippingPrice: 10,
            totalPrice: 99.0,
        },
        orderStatus: "Shipped",
        deliveryPartner: {
            name: "Ecom Express",
            trackingId: "ECOM9999",
            trackingUrl: "https://ecomexpress.in/track/ECOM9999",
        },
    },
    {
        _id: "A10010",
        user: { name: "Meera", email: "meera@mail.com" },
        createdAt: "2024-03-18T12:40:00Z",
        orderItems: [
            {
                name: "Power Bank",
                quantity: 1,
                size: "M",
                price: 29.5,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrFubg4wmASO_OkB3yLTrgaKMmb5Er-3NogA&s",
            },
        ],
        shippingAddress: {
            name: "Meera",
            phone: "9876700000",
            street: "Tech Street",
            city: "Bengaluru",
            state: "Karnataka",
            pincode: "560100",
            country: "India",
        },
        paymentMethod: "Online",
        isPaid: false,
        priceDetails: {
            itemsPrice: 29.5,
            shippingPrice: 5,
            totalPrice: 34.5,
        },
        orderStatus: "Pending",
        deliveryPartner: {
            name: "XpressBees",
            trackingId: "XPB001",
            trackingUrl: "https://www.xpressbees.com/track?awb=XPB001",
        },
    },
];

const OrderTable = ({ setSelectedOrder }) => {
    return (
        <div className=" h-[90%]">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">All Orders</h2>
               
            </div>

            <div className="2xl:productList overflow-y-auto h-[90%]">
                <table className="min-w-full text-left">
                    <thead>
                        <tr className="text-xs sm:text-sm font-bold text-balck border-b">
                            <th className="py-2 px-3">Order ID</th>
                            <th className="py-2 px-3">Customer</th>
                            <th className="py-2 px-3">Product</th>
                            <th className="py-2 px-3">Photo</th>
                            <th className="py-2 px-3">Date</th>
                            <th className="py-2 px-3">Payment</th>
                            <th className="py-2 px-3">Total</th>
                            <th className="py-2 px-3">Status</th>
                            <th className="py-2 px-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, idx) => (
                            <tr
                                key={idx}
                                className="border-b hover:bg-gray-50 text-xs sm:text-sm"
                            >
                                <td className="py-2 px-3">{order._id}</td>
                                <td className="py-2 px-3">{order.user.name}</td>
                                <td className="py-2 px-3">
                                    {order.orderItems[0].name}
                                </td>
                                <td className="py-2 px-3">
                                    <img
                                        src={order.orderItems[0].image}
                                        alt="product"
                                        className="w-8 h-8 rounded object-contain"
                                    />
                                </td>
                                <td className="py-2 px-3">
                                    {new Date(
                                        order.createdAt
                                    ).toLocaleDateString()}{" "}
                                    <br />
                                    {new Date(
                                        order.createdAt
                                    ).toLocaleTimeString()}
                                </td>
                                <td className="py-2 px-3">
                                    {order.paymentMethod}
                                </td>
                                <td className="py-2 px-3">
                                    ${order.priceDetails.totalPrice.toFixed(2)}
                                </td>
                                <td className="py-2 px-3">
                                    <span
                                        className={clsx(
                                            "px-2 py-1 rounded-full text-xs font-semibold",
                                            statusStyles[order.orderStatus]
                                        )}
                                    >
                                        {order.orderStatus}
                                    </span>
                                </td>
                                <td className="py-2 px-3">
                                    <button
                                        onClick={() => setSelectedOrder(order)}
                                        className="bg-green-100 cursor-pointer text-green-700 text-xs font-semibold px-3 py-1 rounded-md sm:rounded-full"
                                    >
                                        Manage →
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderTable;
