import React, { useState, useEffect } from "react";
import { updateProductById } from "../../http/index";

const EditProductModal = ({ product, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    productName: "",
    category: "Electronics",
    stock: "",
    price: "",
    description: "",
    images: [],
    sizes: [],
    tags: "",
  });

  const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];

  useEffect(() => {
    if (product) {
      setFormData({
        productName: product.name || "",
        category: product.category || "Unisex",

        stock: product.stock || "",
        price: product.price || "",

        description: product.description || "",

        images: product.images || [],
        sizes: product.sizes || [],
        tags: product.tags || "",
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSizeChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        sizes: [...prev.sizes, value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        sizes: prev.sizes.filter((size) => size !== value),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare only changed fields
    const updatedData = {};

    if (formData.productName !== product.name)
      updatedData.name = formData.productName;

    if (formData.category !== product.category)
      updatedData.category = formData.category;

    if (formData.stock !== product.stock)
      updatedData.stock = Number(formData.stock);

    if (formData.price !== product.price)
      updatedData.price = Number(formData.price);

    if (formData.description !== product.description)
      updatedData.description = formData.description;

    if (formData.tags !== product.tags) updatedData.tags = formData.tags;

    if (
      JSON.stringify(formData.sizes.sort()) !==
      JSON.stringify((product.sizes || []).sort())
    )
      updatedData.sizes = formData.sizes;

    if (JSON.stringify(formData.images) !== JSON.stringify(product.images))
      updatedData.images = formData.images;

    // Optional: Return early if nothing changed
    if (Object.keys(updatedData).length === 0) {
      alert("No changes detected");
      return;
    }

    try {
      const res = await updateProductById(product._id, updatedData);
      console.log("Update response:", res);
    
    } catch (error) {
      console.error("Update error:", error);
      alert("Failed to update product");
    }
  };

  if (!product) return null;

  return (
    <div className="absolute p-4 inset-0  flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Edit Product</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium">Product Name</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              maxLength={20}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-3 py-2 outline-[#3DA16C]"
              placeholder="Enter product name"
            />
          </div>

          {/* Image Upload */}
          <div className="md:row-span-3">
            <label className="block text-sm font-medium">Product Images</label>
            <div className="grid grid-cols-2 gap-2">
              {formData.images.length > 0 ? (
                formData.images.map((img, i) => (
                  <div
                    key={i}
                    className="border rounded p-2 flex justify-center items-center h-28 bg-gray-50"
                  >
                    <img
                      src={img}
                      alt={`preview-${i}`}
                      className="h-full object-contain"
                    />
                  </div>
                ))
              ) : (
                <div className="border rounded p-2 flex justify-center items-center h-28 bg-gray-50">
                  <img
                    src="/images/shirt1.jpg"
                    alt="preview"
                    className="h-full object-contain"
                  />
                </div>
              )}
              {Array.from({ length: 4 - formData.images.length }).map(
                (_, i) => (
                  <div
                    key={i}
                    className="border border-dashed border-gray-300 h-28 flex items-center justify-center text-sm text-gray-500 bg-gray-50"
                  >
                    Drop or click to upload
                  </div>
                )
              )}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Add at least 4 images. 1 can be a video. Make sure your photo has
              the best quality.
            </p>
          </div>

          <div className="flex gap-x-2 w-full">
            {/* Category */}
            <div className="flex-1/2">
              <label className="block text-sm font-medium">Category</label>
              <select
                name="category"
                className="w-full border outline-[#3DA16C] border-gray-400 rounded px-3 py-2"
                value={formData.category}
                onChange={handleChange}
              >
                <option>Men</option>
                <option>Women</option>
                <option>Kids</option>
                <option>Unisex</option>
              </select>
            </div>

            {/* Collections */}
            <div className="flex-1/2">
              <label className="block text-sm font-medium">Collections</label>
              <select
                name="gender"
                className="w-full border rounded px-3 outline-[#3DA16C] border-gray-400 py-2"
                value={formData.gender}
                onChange={handleChange}
              >
                <option>Harry Potter</option>
                <option>Barbie</option>
                <option>Gta</option>
              </select>
            </div>
          </div>

          {/* Stock and Price */}
          <div className="flex gap-x-3">
            <div className="flex-1/2">
              <label className="block text-sm font-medium">Stock</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className="w-full border outline-[#3DA16C] border-gray-400 rounded px-3 py-2"
                placeholder="Input Stock"
              />
            </div>
            <div className="flex-1/2">
              <label className="block text-sm font-medium">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full outline-[#3DA16C] border-gray-400 border rounded px-3 py-2"
                placeholder="Input Price"
              />
            </div>
          </div>

          {/* Sizes */}
          <div>
            <label className="block text-sm font-medium mb-1">Add Size</label>
            <div className="flex flex-wrap gap-3">
              {sizeOptions.map((option) => (
                <label key={option} className="flex items-center gap-1 text-sm">
                  <input
                    type="checkbox"
                    value={option}
                    checked={formData.sizes.includes(option)}
                    onChange={handleSizeChange}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium mb-1 mt-2">Tags</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full border border-gray-400 outline-[#3DA16C] rounded px-3 py-2"
              placeholder="e.g., funny, quote, black, oversized"
            />
            <p className="text-xs text-gray-500 mt-1">
              Write different tags with spaces
            </p>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-400 outline-[#3DA16C] rounded px-3 py-2"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              maxLength={100}
              rows={3}
              className="w-full border border-gray-400 outline-[#3DA16C] rounded px-3 py-2"
              placeholder="Write product description..."
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="md:col-span-2 flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 font-bold bg-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 font-bold bg-green-500 text-white rounded-md text-sm hover:bg-green-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
