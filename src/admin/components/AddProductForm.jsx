import React, { useState } from "react";

const AddProductForm = () => {
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("Electronics");
    const [gender, setGender] = useState("Unisex");
    const [brand, setBrand] = useState("JBL");
    const [model, setModel] = useState("");
    const [stock, setStock] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");
    const [date, setDate] = useState("2024-03-29");
    const [description, setDescription] = useState("");
    const [visibility, setVisibility] = useState("Published");
    const [scheduleDiscount, setScheduleDiscount] = useState(true);
    const [images, setImages] = useState([]);
    const [sizes, setSizes] = useState([]);

    const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];

    const handleSizeChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSizes([...sizes, value]);
        } else {
            setSizes(sizes.filter((size) => size !== value));
        }
    };
    return (
        <div className=" mx-auto p-6 pt-1 mt-5 bg-white rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
            <p className="text-sm text-gray-500 mb-6">
                When adding products here, don’t forget to follow the SOP of
                product adding rules to fill in the required field completely.
            </p>

            <form className="grid grid-cols-1  md:grid-cols-2 gap-2">
                {/* Product Name */}
                <div>
                    <label className="block text-sm font-medium ">
                        Product Name
                    </label>
                    <input
                        type="text"
                        value={productName}
                        maxLength={20}
                        onChange={(e) => setProductName(e.target.value)}
                        className="w-full border border-gray-400 rounded px-3 py-2 outline-[#3DA16C] "
                        placeholder="Enter product name"
                    />
                </div>

                {/* Image Upload (Placeholder Only) */}
                <div className="md:row-span-3">
                    <label className="block text-sm font-medium ">
                        Product Images
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="border rounded p-2 flex justify-center items-center h-28 bg-gray-50">
                            <img
                                src="/images/shirt1.jpg"
                                alt="preview"
                                className="h-full object-contain"
                            />
                        </div>
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="border border-dashed border-gray-300 h-28 flex items-center justify-center text-sm text-gray-500 bg-gray-50"
                            >
                                Drop or click to upload
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                        Add at least 4 images. 1 can be a video. Make sure your
                        photo has the best quality.
                    </p>
                </div>

                <div className="flex gap-x-2 w-full">
                    {/* Category */}
                    <div className="flex-1/2">
                        <label className="block text-sm font-medium ">
                            Category
                        </label>
                        <select
                            className="w-full border outline-[#3DA16C] border-gray-400 rounded px-3 py-2"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option>Men</option>
                            <option>Women</option>
                            <option>Kids</option>
                            <option>Unisex</option>


                        </select>
                    </div>

                    {/* Collections */}
                    <div className="flex-1/2">
                        <label className="block text-sm font-medium ">
                            Collections
                        </label>
                        <select
                            className="w-full border rounded px-3 outline-[#3DA16C] border-gray-400  py-2"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option>Harry Potter</option>
                            <option>Barbie</option>
                            <option>Gta</option>
                        </select>
                    </div>
                </div>

                {/* Stock */}

                <div className="flex gap-x-3">
                    {" "}
                    <div className="flex-1/2">
                        <label className="block text-sm font-medium ">
                            Stock
                        </label>
                        <input
                            type="number"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            className="w-full border outline-[#3DA16C] border-gray-400  rounded px-3 py-2"
                            placeholder="Input Stock"
                        />
                    </div>
                    {/* Price */}
                    <div className="flex-1/2">
                        <label className="block text-sm font-medium ">
                            Price
                        </label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full outline-[#3DA16C] border-gray-400  border rounded px-3 py-2"
                            placeholder="Input Price"
                        />
                    </div>
                </div>
                {/* Add Size */}
                {/* Add Size */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Add Size
                    </label>
                    <div className="flex flex-wrap gap-3">
                        {sizeOptions.map((option) => (
                            <label
                                key={option}
                                className="flex items-center gap-1 text-sm"
                            >
                                <input
                                    type="checkbox"
                                    value={option}
                                    checked={sizes.includes(option)}
                                    onChange={handleSizeChange}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1 mt-2">
                        Tags
                    </label>
                    <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full border border-gray-400 outline-[#3DA16C] rounded px-3 py-2 "
                        placeholder="e.g., funny, quote, black, oversized"
                    />
                    <p className="text-xs text-gray-500 mt-1">Write different tags with spaces</p>
                </div>

                {/* Date */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Date
                    </label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full border border-gray-400 outline-[#3DA16C] rounded px-3 py-2"
                    />
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">
                        Description
                    </label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        maxLength={100}
                        rows={3}
                        className="w-full border border-gray-400 outline-[#3DA16C] rounded px-3 py-2"
                        placeholder="Write product description..."
                    ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="md:col-span-2 flex justify-end gap-4">
                    <button
                        type="submit"
                        className="px-4 cursor-pointer py-2 font-bold bg-green-500 text-white rounded-md text-sm hover:bg-green-600"
                    >
                        Publish
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProductForm;
