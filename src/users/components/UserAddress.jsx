import { useState } from "react";

const UserAddress = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [addresses, setAddresses] = useState(
    user?.address || [
      {
        street: "",
        city: "",
        state: "",
        pincode: "",
        country: "",
      }
    ]
  );

  const [activeAddressIndex, setActiveAddressIndex] = useState(0);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedAddresses = [...addresses];
    updatedAddresses[index] = {
      ...updatedAddresses[index],
      [name]: value
    };
    setAddresses(updatedAddresses);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you would call your API to update addresses
      // await updateUserAddresses(addresses);
      setIsEditing(false);
      alert("Address updated successfully!");
    } catch (error) {
      console.error("Error updating address:", error);
      alert("Failed to update address");
    }
  };

  const addNewAddress = () => {
    setAddresses([
      ...addresses,
      {
        street: "",
        city: "",
        state: "",
        pincode: "",
        country: "",
      }
    ]);
    setActiveAddressIndex(addresses.length);
  };

  const removeAddress = (index) => {
    if (addresses.length <= 1) {
      alert("You must have at least one address");
      return;
    }
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
    setActiveAddressIndex(Math.min(activeAddressIndex, updatedAddresses.length - 1));
  };

  return (
    <div className="bg-gray-300 h-[60vh] overflow-y-auto  p-6 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] flex-1">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">My Addresses</h2>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="h-10 px-4 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] bg-white text-gray-800 font-semibold text-base cursor-pointer hover:bg-gray-200"
          >
            Edit Addresses
          </button>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={() => setIsEditing(false)}
              className="h-10 px-4 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] bg-white text-gray-800 font-semibold text-base cursor-pointer hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="h-10 px-4 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] bg-gray-800 text-white font-semibold text-base cursor-pointer hover:bg-gray-700"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>

      {isEditing ? (
        <div className="space-y-6">
          <div className="flex overflow-x-auto pb-2 gap-2">
            {addresses.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveAddressIndex(index)}
                className={`min-w-max px-4 py-2 rounded-md border-2 ${activeAddressIndex === index ? 'border-gray-800 bg-gray-200' : 'border-gray-400'} shadow-[2px_2px_#323232]`}
              >
                Address {index + 1}
              </button>
            ))}
            <button
              onClick={addNewAddress}
              className="min-w-max px-4 py-2 rounded-md border-2 border-gray-800 shadow-[2px_2px_#323232] bg-white hover:bg-gray-100"
            >
              + Add New
            </button>
          </div>

          <form className="space-y-4">
            {addresses.length > 1 && (
              <button
                type="button"
                onClick={() => removeAddress(activeAddressIndex)}
                className="text-red-600 hover:text-red-800 text-sm font-medium"
              >
                Remove this address
              </button>
            )}
            
            <div>
              <label className="block text-gray-800 font-medium mb-1">Street Address</label>
              <input
                type="text"
                name="street"
                value={addresses[activeAddressIndex]?.street || ""}
                onChange={(e) => handleChange(e, activeAddressIndex)}
                className="w-full h-10 rounded-md border-2 border-gray-800  bg-white text-gray-800 font-semibold text-sm px-3 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-800 font-medium mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={addresses[activeAddressIndex]?.city || ""}
                  onChange={(e) => handleChange(e, activeAddressIndex)}
                  className="w-full h-10 rounded-md border-2 border-gray-800  bg-white text-gray-800 font-semibold text-sm px-3 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-medium mb-1">State/Province</label>
                <input
                  type="text"
                  name="state"
                  value={addresses[activeAddressIndex]?.state || ""}
                  onChange={(e) => handleChange(e, activeAddressIndex)}
                  className="w-full h-10 rounded-md border-2 border-gray-800  bg-white text-gray-800 font-semibold text-sm px-3 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-800 font-medium mb-1">Postal/Zip Code</label>
                <input
                  type="text"
                  name="pincode"
                  value={addresses[activeAddressIndex]?.pincode || ""}
                  onChange={(e) => handleChange(e, activeAddressIndex)}
                  className="w-full h-10 rounded-md border-2 border-gray-800  bg-white text-gray-800 font-semibold text-sm px-3 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-medium mb-1">Country</label>
                <input
                  type="text"
                  name="country"
                  value={addresses[activeAddressIndex]?.country || ""}
                  onChange={(e) => handleChange(e, activeAddressIndex)}
                  className="w-full h-10 rounded-md border-2 border-gray-800  bg-white text-gray-800 font-semibold text-sm px-3 outline-none"
                />
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="space-y-6">
          {addresses.length === 0 ? (
            <p className="text-gray-800">No addresses saved yet.</p>
          ) : (
            addresses.map((address, index) => (
              <div key={index} className="bg-white p-4 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232]">
                <h3 className="font-semibold text-gray-800 mb-3">Address {index + 1}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 font-medium">Street</p>
                    <p className="text-gray-800">{address.street || "Not provided"}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">City</p>
                    <p className="text-gray-800">{address.city || "Not provided"}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">State/Province</p>
                    <p className="text-gray-800">{address.state || "Not provided"}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">Postal/Zip Code</p>
                    <p className="text-gray-800">{address.pincode || "Not provided"}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">Country</p>
                    <p className="text-gray-800">{address.country || "Not provided"}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default UserAddress