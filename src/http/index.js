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
    console.log(formData)
    formData.append("photo", file); 
    return api.post("/api/users/update-photo", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export default api;
