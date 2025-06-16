import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { addAddress, deleteAddress, updateAddress } from "../../http";
import { useDispatch } from "react-redux";
import { setAuth } from "../../features/auth/authSlice";

const UserAddress = () => {
    const { user } = useAuth();
    const [addresses, setAddresses] = useState([]);
    const [editingAddress, setEditingAddress] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    // Initialize addresses from user data
    useEffect(() => {
        if (user?.address) {
            setAddresses(
                Array.isArray(user.address)
                    ? [...user.address]
                    : [{ ...user.address }]
            );
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(editingAddress)
        setEditingAddress({
            ...editingAddress,
            [name]: value,
        });
    };

    const handleAddNew = () => {
        setEditingAddress({
            street: "",
            city: "",
            state: "",
            pincode: "",
            country: "",
        });
    };

    const handleEdit = (address) => {
        setEditingAddress({ ...address });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            let response;
            if (editingAddress._id) {
                response = await updateAddress(
                    editingAddress,
                    editingAddress._id
                );
            } else {
                response = await addAddress(editingAddress);
            }
            dispatch(setAuth(response.data));
            setEditingAddress(null);
            alert("Address saved successfully!");
        } catch (error) {
            console.error("Error saving address:", error);
            alert(error.response?.data?.message || "Failed to save address");
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this address?")) {
            return;
        }

        try {
            setIsLoading(true);
            const res = await deleteAddress(editingAddress._id);
            dispatch(setAuth(res.data));
            setEditingAddress(null);
            alert("Address deleted successfully");
        } catch (error) {
            console.error("Error deleting address:", error);
            alert(error.response?.data?.message || "Failed to delete address");
        } finally {
            setIsLoading(false);
        }
    };

    // If editing an address, show the edit form
    if (editingAddress !== null) {
        return (
            <div className="bg-gray-300 h-[60vh] overflow-y-auto p-6 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] flex-1">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {editingAddress._id
                            ? "Edit Address"
                            : "Add New Address"}
                    </h2>
                    <div className="flex gap-3">
                        <button
                            onClick={() => setEditingAddress(null)}
                            className="h-10 px-4 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] bg-white text-gray-800 font-semibold text-base cursor-pointer hover:bg-gray-200"
                        >
                            Back
                        </button>
                        {editingAddress._id && (
                            <button
                                onClick={handleDelete}
                                disabled={isLoading}
                                className="h-10 px-4 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] bg-red-600 text-white font-semibold text-base cursor-pointer hover:bg-red-700 disabled:opacity-50"
                            >
                                {isLoading ? "Deleting..." : "Delete"}
                            </button>
                        )}
                        <button
                            onClick={handleSave}
                            disabled={isLoading}
                            className="h-10 px-4 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] bg-gray-800 text-white font-semibold text-base cursor-pointer hover:bg-gray-700 disabled:opacity-50"
                        >
                            {isLoading ? "Saving..." : "Save"}
                        </button>
                    </div>
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-800 font-medium mb-1">
                            Street Address
                        </label>
                        <input
                            type="text"
                            name="street"
                            value={editingAddress.street || ""}
                            onChange={handleChange}
                            className="w-full h-10 rounded-md border-2 border-gray-800 bg-white text-gray-800 font-semibold text-sm px-3 outline-none"
                            disabled={isLoading}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-800 font-medium mb-1">
                                City
                            </label>
                            <input
                                type="text"
                                name="city"
                                value={editingAddress.city || ""}
                                onChange={handleChange}
                                className="w-full h-10 rounded-md border-2 border-gray-800 bg-white text-gray-800 font-semibold text-sm px-3 outline-none"
                                disabled={isLoading}
                            />
                        </div>

                        <div>
                            <label className="block text-gray-800 font-medium mb-1">
                                State/Province
                            </label>
                            <input
                                type="text"
                                name="state"
                                value={editingAddress.state || ""}
                                onChange={handleChange}
                                className="w-full h-10 rounded-md border-2 border-gray-800 bg-white text-gray-800 font-semibold text-sm px-3 outline-none"
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-800 font-medium mb-1">
                                Postal/Zip Code
                            </label>
                            <input
                                type="text"
                                name="pincode"
                                value={editingAddress.pincode || ""}
                                onChange={handleChange}
                                className="w-full h-10 rounded-md border-2 border-gray-800 bg-white text-gray-800 font-semibold text-sm px-3 outline-none"
                                disabled={isLoading}
                            />
                        </div>

                        <div>
                            <label className="block text-gray-800 font-medium mb-1">
                                Country
                            </label>
                            <input
                                type="text"
                                name="country"
                                value={editingAddress.country || ""}
                                onChange={handleChange}
                                className="w-full h-10 rounded-md border-2 border-gray-800 bg-white text-gray-800 font-semibold text-sm px-3 outline-none"
                                disabled={isLoading}
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    // Default view - list of addresses
    return (
        <div className="bg-gray-300 h-[60vh] overflow-y-auto p-6 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] flex-1">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                    My Addresses
                </h2>
                <button
                    onClick={handleAddNew}
                    className="py-1 text-sm px-4 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] bg-white text-gray-800 font-semibold sm:text-base cursor-pointer hover:bg-gray-200"
                >
                    Add New Address
                </button>
            </div>

            <div className="space-y-6">
                {addresses.length === 0 ? (
                    <div className="bg-white p-6 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] text-center">
                        <p className="text-gray-800 mb-4">
                            No addresses saved yet.
                        </p>
                        <button
                            onClick={handleAddNew}
                            className="h-10 px-4 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] bg-gray-800 text-white font-semibold text-base cursor-pointer hover:bg-gray-700"
                        >
                            Add Your First Address
                        </button>
                    </div>
                ) : (
                    addresses.map((address, index) => (
                        <div
                            key={address._id || index}
                            className="bg-white p-4 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] relative"
                        >
                            <h3 className="font-semibold text-gray-800 mb-3">
                                Address {index + 1}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-gray-600 font-medium">
                                        Street
                                    </p>
                                    <p className="text-gray-800">
                                        {address.street}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-600 font-medium">
                                        City
                                    </p>
                                    <p className="text-gray-800">
                                        {address.city}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-600 font-medium">
                                        State/Province
                                    </p>
                                    <p className="text-gray-800">
                                        {address.state}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-600 font-medium">
                                        Postal/Zip Code
                                    </p>
                                    <p className="text-gray-800">
                                        {address.pincode}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-600 font-medium">
                                        Country
                                    </p>
                                    <p className="text-gray-800">
                                        {address.country}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleEdit(address)}
                                className="absolute top-4 right-4 h-8 px-3 rounded-md border-2 border-gray-800 shadow-[2px_2px_#323232] bg-white text-gray-800 font-medium text-sm cursor-pointer hover:bg-gray-200"
                            >
                                Edit
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default UserAddress;
