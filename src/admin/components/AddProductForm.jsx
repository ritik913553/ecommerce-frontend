import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../http/index";

const AddProductForm = ({ setIsAddNewProductOpen, onClose,onProductAdded  }) => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [gender, setGender] = useState("Unisex");

  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");

  const [date, setDate] = useState("2024-03-29");
  const [description, setDescription] = useState("");

  const [images, setImages] = useState([]);
  const [sizes, setSizes] = useState([]);

  const [collection, setCollection] = useState("Harry Potter"); // was gender
  const [tagsInput, setTagsInput] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);

  const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];

  const navigate = useNavigate();

  const handleSizeChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSizes([...sizes, value]);
    } else {
      setSizes(sizes.filter((size) => size !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", productName);
    form.append("description", description);
    form.append("price", price);
    form.append("category", category);
    form.append("collections", collection);
    form.append("stock", stock || 0);
    form.append("isFeatured", isFeatured);

    sizes.forEach((s) => form.append("sizes[]", s));

    tagsInput
      .split(/[,\s]+/)
      .filter(Boolean)
      .forEach((t) => form.append("tags[]", t));

    images.forEach((file) => form.append("images", file));

    try {
      const res = await createProduct(form);
      onProductAdded()
      console.log(res);
      setIsAddNewProductOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className=" mx-auto p-6 pt-1 mt-5 bg-white rounded shadow">
      <div className="flex flex-row">
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-4 ">Add New Product</h2>
          <p className="text-sm text-gray-500 mb-6">
            When adding products here, don’t forget to follow the SOP of product
            adding rules to fill in the required field completely.
          </p>
        </div>
        <div>
          {" "}
          <button
            onClick={onClose}
            className="text-red-500 ml-100 hover:text-red-900 transition-colors duration-200 ease-in-out cursor-pointer p-2 rounded-full hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8" // Slightly larger icon
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5} // Thicker stroke
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <form
  onSubmit={handleSubmit}
  className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-md"
>
  {/* Product Name */}
  <div className="space-y-1 animate-fadeIn">
    <label className="block text-sm font-medium text-gray-700">Product Name</label>
    <input
      type="text"
      value={productName}
      maxLength={20}
      onChange={(e) => setProductName(e.target.value)}
      className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#3DA16C] focus:border-transparent transition-all duration-200"
      placeholder="Enter product name"
    />
    <p className="text-xs text-gray-500 text-right">{productName.length}/20</p>
  </div>

  {/* Image Upload */}
  <div className="md:row-span-3 space-y-2 animate-fadeIn delay-100">
    <label className="block text-sm font-medium text-gray-700">Product Images</label>
    <div className="grid grid-cols-2 gap-3">
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 flex flex-col justify-center items-center h-36 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 relative group">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setImages((prev) => [...prev, ...Array.from(e.target.files)])}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
        <svg className="w-8 h-8 text-gray-400 group-hover:text-gray-600 mb-2 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        <span className="text-gray-500 text-sm text-center">Click or drag to upload</span>
        <span className="text-xs text-gray-400 mt-1">PNG, JPG (max. 5MB)</span>
      </div>
      
      {images?.length > 0 && (
        <div className="grid grid-cols-2 gap-2 overflow-y-auto max-h-36">
          {images.map((file, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-1 h-16 w-full flex justify-center items-center bg-white relative group animate-fadeIn"
            >
              <img
                src={URL.createObjectURL(file)}
                alt={`preview-${idx}`}
                className="h-full object-contain"
              />
              <button
                type="button"
                onClick={() => setImages(images.filter((_, i) => i !== idx))}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    <p className="text-xs text-gray-500">Add at least 1 image (max 6)</p>
  </div>

  {/* Featured Product */}
  <div className="animate-fadeIn delay-150">
    <label className="inline-flex items-center space-x-2 cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          checked={isFeatured}
          onChange={(e) => setIsFeatured(e.target.checked)}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3DA16C]"></div>
      </div>
      <span className="text-sm font-medium text-gray-700">Feature this product</span>
    </label>
  </div>

  {/* Category & Collections */}
  <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn delay-200">
    {/* Category */}
    <div className="flex-1 space-y-1">
      <label className="block text-sm font-medium text-gray-700">Category</label>
      <select
        className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#3DA16C] focus:border-transparent transition-all duration-200 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiAjdjQ3NDc1NyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select category</option>
        <option>Men</option>
        <option>Women</option>
        <option>Kids</option>
        <option>Unisex</option>
      </select>
    </div>

    {/* Collections */}
    <div className="flex-1 space-y-1">
      <label className="block text-sm font-medium text-gray-700">Collections</label>
      <select
        className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#3DA16C] focus:border-transparent transition-all duration-200 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiAjdjQ3NDc1NyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
         <option value="">Select category</option>
        <option>Harry Potter</option>
        <option>Barbie</option>
        <option>Gta</option>
      </select>
    </div>
  </div>

  {/* Stock & Price */}
  <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn delay-300">
    {/* Stock */}
    <div className="flex-1 space-y-1">
      <label className="block text-sm font-medium text-gray-700">Stock</label>
      <input
        type="number"
        value={stock}
        min="0"
        onChange={(e) => setStock(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#3DA16C] focus:border-transparent transition-all duration-200"
        placeholder="Available quantity"
      />
    </div>
    
    {/* Price */}
    <div className="flex-1 space-y-1">
      <label className="block text-sm font-medium text-gray-700">Price</label>
      <div className="relative">
        <span className="absolute left-3 top-2 text-gray-500">$</span>
        <input
          type="number"
          value={price}
          min="0"
          step="0.01"
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border border-gray-300 rounded-lg pl-8 pr-4 py-2 outline-none focus:ring-2 focus:ring-[#3DA16C] focus:border-transparent transition-all duration-200"
          placeholder="0.00"
        />
      </div>
    </div>
  </div>

  {/* Sizes */}
  <div className="animate-fadeIn delay-400">
    <label className="block text-sm font-medium text-gray-700 mb-2">Available Sizes</label>
    <div className="flex flex-wrap gap-2">
      {sizeOptions.map((option) => (
        <label
          key={option}
          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 ${
            sizes.includes(option)
              ? 'bg-[#3DA16C] text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <input
            type="checkbox"
            value={option}
            checked={sizes.includes(option)}
            onChange={handleSizeChange}
            className="hidden"
          />
          {option}
        </label>
      ))}
    </div>
  </div>

  {/* Tags */}
  <div className="animate-fadeIn delay-500">
    <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
    <input
      type="text"
      value={tagsInput}
      onChange={(e) => setTagsInput(e.target.value)}
      className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#3DA16C] focus:border-transparent transition-all duration-200"
      placeholder="e.g., funny, quote, black, oversized"
    />
    <p className="text-xs text-gray-500 mt-1">Separate tags with spaces</p>
  </div>

  {/* Description */}
  <div className="md:col-span-2 animate-fadeIn delay-600">
    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
    <textarea
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      maxLength={300}
      rows={4}
      className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#3DA16C] focus:border-transparent transition-all duration-200"
      placeholder="Describe your product in detail..."
    ></textarea>
    <p className="text-xs text-gray-500 text-right">{description.length}/300</p>
  </div>

  {/* Submit Button */}
  <div className="md:col-span-2 flex justify-end animate-fadeIn delay-700">
    <button
      type="submit"
      className="px-6 py-2.5 bg-[#3DA16C] text-white font-medium rounded-lg text-sm hover:bg-[#2E8457] shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3DA16C] focus:ring-opacity-50 cursor-pointer"
    >
      Publish Product
    </button>
  </div>
</form>
    </div>
  );
};

export default AddProductForm;
