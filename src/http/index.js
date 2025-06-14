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
export const updatePhoto = (file) => {
    const formData = new FormData();
    console.log(formData);
    formData.append("photo", file);
    return api.post("/api/users/update-photo", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const updateProfile = (data) =>
    api.patch("/api/users/update-profile", data);

export const addAddress = (data) => api.post("/api/users/address", data);

export const updateAddress = (data, id) =>
    api.patch(`/api/users/address/${id}`, data);

export const deleteAddress = (id) => api.delete(`/api/users/address/${id}`);

export const getMyOrders = () => api.get("api/orders/my");

// product

export const createProduct = (formData) =>
    api.post("/api/products/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });

export const getAllProducts = (page = 1, limit = 10) => 
  api.get(`/api/products`,{ params: { page, limit } });

export const getFeaturedProducts = (page = 1, limit = 10) => api.get("/api/products/featured",{ params: { page, limit } });
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
