import React from "react";

const ManageOrderModal = ({ order, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-start pt-20 z-50">
      <div className="bg-white w-[90%] max-w-2xl rounded-xl shadow-xl p-6 relative">
        <button onClick={onClose} className="absolute cursor-pointer top-4 right-4 text-xl font-bold">×</button>

        <h2 className="text-xl font-semibold mb-4">Manage Order - #{order._id}</h2>

        {/* Customer Info */}
        <div className="mb-4">
          <h3 className="font-semibold">Customer</h3>
          <p>{order.user.name} ({order.user.email})</p>
        </div>

        {/* Shipping Info */}
        <div className="mb-4">
          <h3 className="font-semibold">Shipping Address</h3>
          <p>{order.shippingAddress.name}</p>
          <p>{order.shippingAddress.phone}</p>
          <p>{order.shippingAddress.street}, {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}, {order.shippingAddress.country}</p>
        </div>

        {/* Items */}
        <div className="mb-4">
          <h3 className="font-semibold">Products</h3>
          {order.orderItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 border-b py-2">
              <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
              <div>
                <p>{item.name} (Size: {item.size})</p>
                <p>Qty: {item.quantity} × ${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment & Total */}
        <div className="mb-4">
          <h3 className="font-semibold">Payment Info</h3>
          <p>Method: {order.paymentMethod}</p>
          <p className="text-green-600">{order.isPaid ? "Paid" : "Not Paid"}</p>
          <p>Total: <strong>${order.priceDetails.totalPrice.toFixed(2)}</strong></p>
        </div>

        {/* Delivery Info */}
        {order.deliveryPartner?.name && (
          <div className="mb-4">
            <h3 className="font-semibold">Delivery Partner</h3>
            <p>{order.deliveryPartner.name}</p>
            <p>ID: {order.deliveryPartner.trackingId}</p>
            {order.deliveryPartner.trackingUrl && (
              <a href={order.deliveryPartner.trackingUrl} target="_blank" className="text-blue-500 underline text-sm">Track Package</a>
            )}
          </div>
        )}

        {/* Status Update */}
        <div className="mb-6">
          <label htmlFor="status" className="block font-semibold mb-1">Order Status</label>
          <select
            id="status"
            defaultValue={order.orderStatus}
            className="w-full border px-3 py-2 rounded"
          >
            {["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"].map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        {/* Save Button */}
        <div className="text-right">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageOrderModal;
