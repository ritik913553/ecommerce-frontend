import { useEffect, useState } from "react";
import { getMyOrders } from "../../http";

const UserOrders = () => {
    // Dummy data matching your order model structure
    const dummyOrders = [
        {
            _id: "1",
            createdAt: new Date("2023-05-15"),
            orderItems: [
                {
                    product: "prod1",
                    name: "Classic T-Shirt",
                    quantity: 2,
                    price: 24.99,
                    size: "M",
                    image: "https://veirdo.in/cdn/shop/files/b_0119493a-9927-4550-8323-baefe5f625c0.jpg?v=1724147309",
                },
                {
                    product: "prod2",
                    name: "Premium Jeans",
                    quantity: 1,
                    price: 59.99,
                    size: "32",
                    image: "https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1747992993",
                },
            ],
            orderStatus: "Delivered",
            priceDetails: {
                itemsPrice: 109.97,
                shippingPrice: 5.99,
                totalPrice: 115.96,
            },
            paymentMethod: "Online",
            isPaid: true,
            isDelivered: true,
            deliveredAt: new Date("2023-05-20"),
            shippingAddress: {
                name: "John Doe",
                phone: "1234567890",
                street: "123 Main St",
                city: "New York",
                state: "NY",
                pincode: "10001",
                country: "USA",
            },
            deliveryPartner: {
                name: "FedEx",
                trackingId: "FX123456789",
                trackingUrl: "https://fedex.com/track/FX123456789",
            },
        },
        {
            _id: "2",
            createdAt: new Date("2023-06-10"),
            orderItems: [
                {
                    product: "prod3",
                    name: "Summer Dress",
                    quantity: 1,
                    price: 45.99,
                    size: "S",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwWTfGsvKRm8YmKORbE8ZJyrZS9-naQwhTg&s",
                },
            ],
            orderStatus: "Shipped",
            priceDetails: {
                itemsPrice: 45.99,
                shippingPrice: 0.0,
                totalPrice: 45.99,
            },
            paymentMethod: "COD",
            isPaid: false,
            isDelivered: false,
            shippingAddress: {
                name: "John Doe",
                phone: "1234567890",
                street: "123 Main St",
                city: "New York",
                state: "NY",
                pincode: "10001",
                country: "USA",
            },
            deliveryPartner: {
                name: "UPS",
                trackingId: "UPS987654321",
                trackingUrl: "https://ups.com/track/UPS987654321",
            },
        },
        {
            _id: "3",
            createdAt: new Date("2023-06-25"),
            orderItems: [
                {
                    product: "prod4",
                    name: "Running Shoes",
                    quantity: 1,
                    price: 89.99,
                    size: "10",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFghF5f4bO9B-_aXZ4QTI2Fw-LCW4lPV1zQ&s",
                },
            ],
            orderStatus: "Pending",
            priceDetails: {
                itemsPrice: 89.99,
                shippingPrice: 5.99,
                totalPrice: 95.98,
            },
            paymentMethod: "Online",
            isPaid: true,
            isDelivered: false,
            shippingAddress: {
                name: "John Doe",
                phone: "1234567890",
                street: "123 Main St",
                city: "New York",
                state: "NY",
                pincode: "10001",
                country: "USA",
            },
        },
    ];
    const [orders, setOrders] = useState(null);
    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await getMyOrders();
                console.log(res);
            } catch (error) {}
        };
        getOrders();
    },[]);
    const getStatusColor = (status) => {
        switch (status) {
            case "Delivered":
                return "bg-green-100 text-green-800";
            case "Shipped":
                return "bg-blue-100 text-blue-800";
            case "Pending":
                return "bg-yellow-100 text-yellow-800";
            case "Cancelled":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    return (
        <div className="bg-gray-300 h-[60vh]  overflow-y-auto p-6 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">My Orders</h2>

            {dummyOrders.length === 0 ? (
                <div className="bg-gray-200 p-4 rounded-md border border-gray-700">
                    <p className="text-gray-800 text-center">
                        You haven't placed any orders yet.
                    </p>
                </div>
            ) : (
                <div className="space-y-6">
                    {dummyOrders.map((order) => (
                        <div
                            key={order._id}
                            className="bg-white p-4 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232]"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                                <div>
                                    <p className="text-gray-600 text-sm">
                                        Order #{order._id}
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        Placed on {formatDate(order.createdAt)}
                                    </p>
                                </div>
                                <div className="mt-2 md:mt-0">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                                            order.orderStatus
                                        )}`}
                                    >
                                        {order.orderStatus}
                                    </span>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                {order.orderItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start mb-4 last:mb-0"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded-md border border-gray-300 mr-4"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-800">
                                                {item.name}
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                Size: {item.size}
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                Qty: {item.quantity}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold">
                                                ${item.price.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-600">
                                        Subtotal:
                                    </span>
                                    <span className="font-semibold">
                                        $
                                        {order.priceDetails.itemsPrice.toFixed(
                                            2
                                        )}
                                    </span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-600">
                                        Shipping:
                                    </span>
                                    <span className="font-semibold">
                                        $
                                        {order.priceDetails.shippingPrice.toFixed(
                                            2
                                        )}
                                    </span>
                                </div>
                                <div className="flex justify-between text-lg font-bold mt-3">
                                    <span>Total:</span>
                                    <span>
                                        $
                                        {order.priceDetails.totalPrice.toFixed(
                                            2
                                        )}
                                    </span>
                                </div>
                            </div>

                            {order.deliveryPartner && (
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <h4 className="font-semibold text-gray-800 mb-2">
                                        Tracking Information
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Shipped via {order.deliveryPartner.name}
                                    </p>
                                    <a
                                        href={order.deliveryPartner.trackingUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline text-sm"
                                    >
                                        Track Package:{" "}
                                        {order.deliveryPartner.trackingId}
                                    </a>
                                </div>
                            )}

                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <h4 className="font-semibold text-gray-800 mb-2">
                                    Shipping Address
                                </h4>
                                <p className="text-sm text-gray-600">
                                    {order.shippingAddress.name}
                                    <br />
                                    {order.shippingAddress.street}
                                    <br />
                                    {order.shippingAddress.city},{" "}
                                    {order.shippingAddress.state}{" "}
                                    {order.shippingAddress.pincode}
                                    <br />
                                    {order.shippingAddress.country}
                                    <br />
                                    Phone: {order.shippingAddress.phone}
                                </p>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <h4 className="font-semibold text-gray-800 mb-2">
                                    Payment Method
                                </h4>
                                <p className="text-sm text-gray-600">
                                    {order.paymentMethod}{" "}
                                    {order.isPaid
                                        ? "(Paid)"
                                        : "(To be paid on delivery)"}
                                </p>
                                {order.paymentMethod === "Online" &&
                                    order.isPaid && (
                                        <p className="text-sm text-gray-600 mt-1">
                                            Paid on{" "}
                                            {order.paymentInfo?.paidAt
                                                ? formatDate(
                                                      order.paymentInfo.paidAt
                                                  )
                                                : "N/A"}
                                        </p>
                                    )}
                            </div>

                            {order.isDelivered && (
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <h4 className="font-semibold text-gray-800 mb-2">
                                        Delivery Information
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Delivered on{" "}
                                        {formatDate(order.deliveredAt)}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserOrders;
