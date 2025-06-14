import { input } from "framer-motion/client";
import { useRef, useState } from "react";
import { updatePhoto, updateProfile } from "../../http";
import { useDispatch } from "react-redux";
import { setAuth } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ user }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        gender: user?.gender || "",
        dob: user?.dob ? new Date(user.dob).toISOString().split("T")[0] : "",
        age: user?.age || "",
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(user?.photo || null);
    const [fileError, setFileError] = useState("");
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleEditPhotoClick = () => {
        setFileError("");
        fileInputRef.current.click();
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const validTypes = ["image/jpeg", "image/png"];
        if (!validTypes.includes(file.type)) {
            setFileError("Please select a JPEG or PNG image");
            return;
        }

        if (file.size > 1048576) {
            setFileError("File size should be less than 1MB");
            return;
        }

        setSelectedFile(file);
        setFileError("");

        const reader = new FileReader();
        reader.onload = () => {
            setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
    };
    const handleUploadPhoto = async (e) => {
        e.preventDefault();
        try {
            const res = await updatePhoto(selectedFile);
            console.log(res);
            dispatch(setAuth(res.data));
            setIsEditing(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Handle profile update here
            const res = await updateProfile(formData);
            dispatch(setAuth(res.data));
            setIsEditing(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-gray-300 h-[60vh] overflow-y-auto p-6 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] flex-1">
            <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
                <div className="flex flex-col items-center">
                    <div className="relative">
                        {previewImage ? (
                            <img
                                src={previewImage}
                                alt="Profile"
                                className="w-32 h-32 rounded-full object-cover border-2 border-gray-800"
                            />
                        ) : (
                            <div className="w-32 h-32 rounded-full bg-gray-400 border-2 border-gray-800 flex items-center justify-center">
                                <span className="text-4xl font-bold text-gray-700">
                                    {user?.name?.charAt(0).toUpperCase()}
                                </span>
                            </div>
                        )}

                        {/* Edit icon button */}
                        {isEditing && (
                            <button
                                type="button"
                                onClick={handleEditPhotoClick}
                                className="absolute bottom-0 right-0 bg-white rounded-full p-2 border-2 border-gray-800 hover:bg-gray-200 transition-colors"
                                title="Edit photo"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                    />
                                </svg>
                            </button>
                        )}

                        <input
                            type="file"
                            ref={fileInputRef}
                            accept="image/jpeg,image/png"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </div>

                    {fileError && (
                        <p className="text-red-600 text-sm mt-2">{fileError}</p>
                    )}

                    {isEditing && (
                        <button
                            type="button"
                            onClick={handleUploadPhoto}
                            disabled={!selectedFile}
                            className={`mt-3 h-8 px-3 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] font-semibold text-sm cursor-pointer ${
                                selectedFile
                                    ? "bg-white text-gray-800 hover:bg-gray-200"
                                    : "bg-gray-400 text-gray-600 "
                            }`}
                        >
                            Change Photo
                        </button>
                    )}
                </div>

                <div className="flex-1 w-full">
                    <div className=" flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Profile Information
                        </h2>
                        {!isEditing && (
                            <button
                                onClick={() => setIsEditing(true)}
                                className="py-2 px-4 rounded-md border-2 border-gray-800  bg-white text-gray-800 font-semibold text-base cursor-pointer hover:bg-gray-200"
                            >
                                Edit Profile
                            </button>
                        )}
                    </div>

                    {isEditing ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-800 font-medium mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full h-10 rounded-md border-2 border-gray-800  bg-white text-gray-800 font-semibold text-sm px-3 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-800 font-medium mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled
                                    className="w-full h-10 rounded-md border-2 border-gray-800  bg-gray-200 text-gray-800 font-semibold text-sm px-3 outline-none cursor-not-allowed"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-800 font-medium mb-1">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full h-10 rounded-md border-2 border-gray-800  bg-white text-gray-800 font-semibold text-sm px-3 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-800 font-medium mb-1">
                                    Gender
                                </label>
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className="w-full h-10 rounded-md border-2 border-gray-800  bg-white text-gray-800 font-semibold text-sm px-3 outline-none"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-800 font-medium mb-1">
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    className="w-full h-10 rounded-md border-2 border-gray-800  bg-white text-gray-800 font-semibold text-sm px-3 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-800 font-medium mb-1">
                                    Age
                                </label>
                                <input
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    className="w-full h-10 rounded-md border-2 border-gray-800  bg-white text-gray-800 font-semibold text-sm px-3 outline-none"
                                />
                            </div>
                            <div className="flex space-x-3">
                                <button
                                    type="submit"
                                    className="py-1 text-sm px-4 rounded-md border-2 border-gray-800  bg-white text-gray-800 font-semibold sm:text-base cursor-pointer hover:bg-gray-200"
                                >
                                    Save Changes
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="py-1 px-4 rounded-md border-2 border-gray-800  bg-white text-gray-800 font-semibold text-base cursor-pointer hover:bg-gray-200"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="space-y-4">
                            <div>
                                <p className="text-gray-600 font-medium">
                                    Name
                                </p>
                                <p className="text-gray-800 font-semibold">
                                    {user?.name}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-600 font-medium">
                                    Email
                                </p>
                                <p className="text-gray-800 font-semibold">
                                    {user?.email}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-600 font-medium">
                                    Phone
                                </p>
                                <p className="text-gray-800 font-semibold">
                                    {user?.phone || "Not provided"}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-600 font-medium">
                                    Gender
                                </p>
                                <p className="text-gray-800 font-semibold">
                                    {user?.gender || "Not specified"}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-600 font-medium">
                                    Date of Birth
                                </p>
                                <p className="text-gray-800 font-semibold">
                                    {user?.dob
                                        ? new Date(
                                              user.dob
                                          ).toLocaleDateString()
                                        : "Not specified"}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-600 font-medium">Age</p>
                                <p className="text-gray-800 font-semibold">
                                    {user?.age || "Not specified"}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default UserProfile;
