import React, { useState } from "react";
import { login, logout, register } from "../../http";
import { useDispatch } from "react-redux";
import { setAuth } from "../../features/auth/authSlice";
import useAuth from "../../hooks/useAuth";
import SideNavBar from "../components/SideNavbar";
import UserProfile from "../components/UserProfile";
import UserOrders from "../components/UserOrders";
import UserAddress from "../components/UserAddress";

const MyAccountPage = () => {
    const dispatch = useDispatch();
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [currentView, setCurrentView] = useState("profile");

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await login({
                email: loginEmail,
                password: loginPassword,
            });
            dispatch(setAuth(res.data));
            setLoginEmail("");
            setLoginPassword("");
        } catch (error) {
            console.log(error);
        }
        console.log("Login:");
    };

    // Register form submit handler
    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await register({
                name: registerName,
                email: registerEmail,
                password: registerPassword,
            });
            alert("User created now u can login");
            setRegisterEmail("");
            setRegisterName("");
            setRegisterPassword("");
        } catch (error) {
            console.log(error);
        }
    };

    const logoutHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await logout();
            dispatch(setAuth(null));
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };
    const loginWithGoogleHandler = (e) => {
        e.preventDefault();
        window.location.href = `${
            import.meta.env.VITE_API_URL
        }/api/auth/login-with-google`;
    };
    const { user } = useAuth();
    console.log(user);
    return (
        <div className="min-h-screen bg-gray-100 p-2 sm:p-8">
            {/* Header */}
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    My Account
                </h1>
            </header>
            {!user ? (
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Login Form */}
                    <div className="bg-gray-300 p-6 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232]">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Login
                        </h2>
                        <form
                            onSubmit={handleLoginSubmit}
                            className="flex flex-col gap-5"
                        >
                            <button
                                onClick={loginWithGoogleHandler}
                                type="button"
                                className="w-full h-10 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] bg-white text-gray-800 font-semibold text-base cursor-pointer transition-all duration-250 relative overflow-hidden z-10 flex justify-center items-center gap-1 hover:text-gray-200 before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gray-900 before:z-[-1] before:shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)] before:transition-all before:duration-250 hover:before:w-full"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24">
                                    <path
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        fill="#4285F4"
                                    ></path>
                                    <path
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        fill="#34A853"
                                    ></path>
                                    <path
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        fill="#FBBC05"
                                    ></path>
                                    <path
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        fill="#EA4335"
                                    ></path>
                                    <path d="M1 1h22v22H1z" fill="none"></path>
                                </svg>
                                Continue with Google
                            </button>

                            <div className="w-full flex items-center justify-center gap-1">
                                <div className="w-24 h-0.5 rounded-md bg-gray-600"></div>
                                <span className="text-gray-800 font-mono font-semibold">
                                    OR
                                </span>
                                <div className="w-24 h-0.5 rounded-md bg-gray-600"></div>
                            </div>

                            <input
                                type="email"
                                placeholder="Email"
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                                required
                                className="w-full h-10 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] bg-white text-gray-800 font-semibold text-sm px-3 outline-none"
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                value={loginPassword}
                                required
                                onChange={(e) =>
                                    setLoginPassword(e.target.value)
                                }
                                className="w-full h-10 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] bg-white text-gray-800 font-semibold text-sm px-3 outline-none"
                            />

                            <button
                                type="submit"
                                className="w-full h-10 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] bg-white text-gray-800 font-semibold text-base cursor-pointer transition-all duration-250 relative overflow-hidden z-10 flex justify-center items-center gap-1 hover:text-gray-200 before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gray-900 before:z-[-1] before:shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)] before:transition-all before:duration-250 hover:before:w-full"
                            >
                                Login
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m6 17 5-5-5-5"></path>
                                    <path d="m13 17 5-5-5-5"></path>
                                </svg>
                            </button>
                        </form>
                    </div>

                    {/* Registration Form */}
                    <div className="bg-gray-300 p-6 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232]">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Register
                        </h2>
                        <form
                            onSubmit={handleRegisterSubmit}
                            className="flex flex-col gap-5"
                        >
                            <button
                                type="button"
                                onClick={loginWithGoogleHandler}
                                className="w-full h-10 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] bg-white text-gray-800 font-semibold text-base cursor-pointer transition-all duration-250 relative overflow-hidden z-10 flex justify-center items-center gap-1 hover:text-gray-200 before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gray-900 before:z-[-1] before:shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)] before:transition-all before:duration-250 hover:before:w-full"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24">
                                    <path
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        fill="#4285F4"
                                    ></path>
                                    <path
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        fill="#34A853"
                                    ></path>
                                    <path
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        fill="#FBBC05"
                                    ></path>
                                    <path
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        fill="#EA4335"
                                    ></path>
                                    <path d="M1 1h22v22H1z" fill="none"></path>
                                </svg>
                                Continue with Google
                            </button>

                            <div className="w-full flex items-center justify-center gap-1">
                                <div className="w-24 h-0.5 rounded-md bg-gray-600"></div>
                                <span className="text-gray-800 font-mono font-semibold">
                                    OR
                                </span>
                                <div className="w-24 h-0.5 rounded-md bg-gray-600"></div>
                            </div>

                            <input
                                type="text"
                                placeholder="Full Name"
                                value={registerName}
                                required
                                onChange={(e) =>
                                    setRegisterName(e.target.value)
                                }
                                className="w-full h-10 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] bg-white text-gray-800 font-semibold text-sm px-3 outline-none"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                value={registerEmail}
                                required
                                onChange={(e) =>
                                    setRegisterEmail(e.target.value)
                                }
                                className="w-full h-10 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] bg-white text-gray-800 font-semibold text-sm px-3 outline-none"
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                required
                                value={registerPassword}
                                onChange={(e) =>
                                    setRegisterPassword(e.target.value)
                                }
                                className="w-full h-10 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] bg-white text-gray-800 font-semibold text-sm px-3 outline-none"
                            />

                            <button
                                type="submit"
                                className="w-full h-10 rounded-md border-2 border-gray-800 shadow-[4px_4px_#323232] bg-white text-gray-800 font-semibold text-base cursor-pointer transition-all duration-250 relative overflow-hidden z-10 flex justify-center items-center gap-1 hover:text-gray-200 before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gray-900 before:z-[-1] before:shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)] before:transition-all before:duration-250 hover:before:w-full"
                            >
                                Register
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m6 17 5-5-5-5"></path>
                                    <path d="m13 17 5-5-5-5"></path>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="md:flex  h-full bg-gray-100">
                    <SideNavBar
                        currentView={currentView}
                        setCurrentView={setCurrentView}
                        logoutHandler={logoutHandler}
                    />
                    <div className="flex-1 p-6">
                        {currentView === "profile" && (
                            <UserProfile user={user} />
                        )}
                        {currentView === "orders" && <UserOrders />}
                        {currentView === "address" && <UserAddress />}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyAccountPage;
