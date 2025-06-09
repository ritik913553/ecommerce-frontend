import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import ProfileImage from "../ProfileImage";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isAuth, user } = useAuth();
    console.log(user);
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <motion.div
                        className="text-2xl font-bold text-indigo-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        BrandLogo
                    </motion.div>

                    <div className="hidden md:flex items-center space-x-8">
                        <nav>
                            <ul className="flex space-x-8">
                                {[
                                    "Home",
                                    "Shop",
                                    "Collections",
                                    "About",
                                    "Contact",
                                ].map((item) => (
                                    <motion.li
                                        key={item}
                                        whileHover={{ y: -2 }}
                                        className="font-medium text-gray-700 hover:text-indigo-600 cursor-pointer"
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>

                        <div className="flex items-center space-x-4 ">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="text-gray-700"
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
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="text-gray-700"
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
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                    />
                                </svg>
                            </motion.button>

                            <Link className="cursor-pointer" to={"/my-account"}>
                                {isAuth ? (
                                    <ProfileImage
                                        imageUrl={user?.photo}
                                        name={user?.name}
                                    />
                                ) : (
                                    <Button variant="primary"> Account</Button>
                                )}
                            </Link>

                            {user?.role === "admin" && (
                                <Link to={'/admin'} className="relative p-2 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 cursor-pointer focus:ring-purple-400 group">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        />
                                    </svg>

                                    <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full group-hover:animate-pulse"></span>

                                    <span className="absolute left-full ml-2 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                        Admin Panel
                                    </span>
                                </Link>
                            )}
                        </div>
                    </div>

                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="md:hidden mt-4 py-4 border-t"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <nav>
                                <ul className="space-y-4">
                                    {[
                                        "Home",
                                        "Shop",
                                        "Collections",
                                        "About",
                                        "Contact",
                                    ].map((item) => (
                                        <motion.li
                                            key={item}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            className="font-medium text-gray-700 hover:text-indigo-600 cursor-pointer"
                                        >
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </nav>

                            <div className="mt-6 flex flex-col space-y-4">
                                {isAuth ? (
                                    <ProfileImage
                                        imageUrl={user?.photo}
                                        name={user.name}
                                    />
                                ) : (
                                    <Button variant="primary">Account</Button>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Navbar;
