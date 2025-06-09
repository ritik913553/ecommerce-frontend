import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const login = (data) => api.post("/api/auth/login", data);
export const logout = () => api.post("/api/auth/logout");
export const register = (data) => api.post("/api/auth/register", data);

// product

export const createProduct = (formData) =>
  api.post("/api/products/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const getAllProducts = () => api.get("/api/products");
export const getFeaturedProducts = () => api.get("/api/products/featured");
export const getProductById = (id) => api.get(`/api/products/${id}`);
export const searchProducts = (query) =>
  api.get(`/api/products/search`,{params :{query}});
export const getProductsByCategory = (category) =>
  api.get(`/api/products/category/${category}`);

export const updateProductById = (id, formData) =>
  api.put(`/api/products/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const deleteProduct = (id) => api.delete(`/api/products/${id}`);
export const updateProductStock = (id, stock) =>
  api.patch(`/api/products/stock/${id}`, { stock });

export default api;
