import React, { useState, useEffect } from "react";
import { updateProductById } from "../../http/index";

const EditProductModal = ({
  product,
  onClose,
  onSave,
  setIsEditModalOpen,
  onProductEdited,
}) => {
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
      setIsEditModalOpen(false);
      return;
    }

    try {
      const res = await updateProductById(product._id, updatedData);
      onProductEdited();
      setIsEditModalOpen(false);
      console.log("Update response:", res);
    } catch (error) {
      console.error("Update error:", error);
      alert("Failed to update product");
    }
  };

  if (!product) return null;

  return (
    <div className="absolute top-45 sm:top-0 sm:p-4  p-1 inset-0  flex items-center justify-center z-50">
      <div className="bg-white rounded-lg sm:p-6 w-full sm:max-w-4xl sm:max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Edit Product</h2>
          <button
            onClick={onClose}
            className="text-red-500 sm:ml-100 hover:text-red-900 transition-colors duration-200 ease-in-out cursor-pointer p-2 rounded-full hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500"
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

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 p-1 sm:p-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-md"
        >
          {/* Product Name */}
          <div className="space-y-2 animate-fadeIn">
            <label className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              maxLength={20}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#3DA16C] focus:border-transparent transition-all duration-200"
              placeholder="Enter product name"
            />
            <p className="text-xs text-gray-500 text-right">
              {formData.productName.length}/20
            </p>
          </div>

          {/* Image Upload */}
          <div className="md:row-span-3 space-y-2 animate-fadeIn delay-100">
            <label className="block text-sm font-medium text-gray-700">
              Product Images
            </label>
            <div className="grid grid-cols-2 gap-3">
              {formData.images.length > 0 ? (
                formData.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative group border rounded-lg p-1 h-28 bg-gray-50 flex justify-center items-center"
                  >
                    <img
                      src={img}
                      alt={`preview-${i}`}
                      className="h-full object-contain"
                    />
                    <button
                      type="button"
                      onClick={() => handleImageRemove(i)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      ×
                    </button>
                  </div>
                ))
              ) : (
                <div className="border rounded-lg p-2 flex justify-center items-center h-28 bg-gray-50">
                  <img
                    src="/images/shirt1.jpg"
                    alt="preview"
                    className="h-full object-contain"
                  />
                </div>
              )}

              {Array.from({ length: 4 - formData.images.length }).map(
                (_, i) => (
                  <label
                    key={i}
                    htmlFor="image-upload"
                    className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col justify-center items-center h-28 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                  >
                    <svg
                      className="w-6 h-6 text-gray-400 mb-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <span className="text-xs text-gray-500 text-center">
                      Click to upload
                    </span>
                  </label>
                )
              )}
            </div>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              multiple
              // onChange={handleImageUpload}
              className="hidden"
            />
            <p className="text-xs text-gray-500">
              Add at least 4 images. 1 can be a video. Make sure your photo has
              the best quality.
            </p>
          </div>

          {/* Category & Collections */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn delay-200">
            <div className="flex-1 space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#3DA16C] focus:border-transparent transition-all duration-200 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiAjdjQ3NDc1NyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
              >
                <option>Men</option>
                <option>Women</option>
                <option>Kids</option>
                <option>Unisex</option>
              </select>
            </div>

            <div className="flex-1 space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Collections
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#3DA16C] focus:border-transparent transition-all duration-200 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiAjdjQ3NDc1NyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
              >
                <option>Harry Potter</option>
                <option>Barbie</option>
                <option>Gta</option>
              </select>
            </div>
          </div>

          {/* Stock & Price */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn delay-300">
            <div className="flex-1 space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Stock
              </label>
              <input
                type="number"
                name="stock"
                min="0"
                value={formData.stock}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#3DA16C] focus:border-transparent transition-all duration-200"
                placeholder="Available quantity"
              />
            </div>

            <div className="flex-1 space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">$</span>
                <input
                  type="number"
                  name="price"
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg pl-8 pr-4 py-2 outline-none focus:ring-2 focus:ring-[#3DA16C] focus:border-transparent transition-all duration-200"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>

          {/* Sizes */}
          <div className="animate-fadeIn delay-400">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Available Sizes
            </label>
            <div className="flex flex-wrap gap-2">
              {sizeOptions.map((option) => (
                <label
                  key={option}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 ${
                    formData.sizes.includes(option)
                      ? "bg-[#3DA16C] text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <input
                    type="checkbox"
                    value={option}
                    checked={formData.sizes.includes(option)}
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tags
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#3DA16C] focus:border-transparent transition-all duration-200"
              placeholder="e.g., funny, quote, black, oversized"
            />
            <p className="text-xs text-gray-500 mt-1">
              Separate tags with spaces
            </p>
          </div>

          {/* Description */}
          <div className="md:col-span-2 animate-fadeIn delay-600">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              maxLength={300}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#3DA16C] focus:border-transparent transition-all duration-200"
              placeholder="Describe your product in detail..."
            ></textarea>
            <p className="text-xs text-gray-500 text-right">
              {formData.description.length}/300
            </p>
          </div>

          {/* Action Buttons */}
          <div className="md:col-span-2 flex justify-end gap-4 animate-fadeIn delay-700">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 bg-gray-200 text-gray-700 font-medium rounded-lg text-sm hover:bg-gray-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#3DA16C] text-white font-medium rounded-lg text-sm hover:bg-[#2E8457] shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3DA16C] focus:ring-opacity-50 cursor-pointer"
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
