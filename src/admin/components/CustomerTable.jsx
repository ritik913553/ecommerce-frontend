// Example user data for AdminCustomerList
const users = [
    {
        id: "1",
        name: "Ritik Gupta",
        email: "ritik@example.com",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        role: "admin",
        gender: "Male",
        dob: "1998-04-15",
        createdAt: "2023-01-10",
        updatedAt: "2024-05-01",
        phone: "9876543210",
        isEmailVerified: true,
        authProvider: "local",
        address: [
            {
                street: "123 Main St",
                city: "Delhi",
                state: "Delhi",
                pincode: "110001",
                country: "India",
            },
        ],
    },
    {
        id: "2",
        name: "Priya Sharma",
        email: "priya.sharma@example.com",
        photo: "https://randomuser.me/api/portraits/women/2.jpg",
        role: "user",
        gender: "Female",
        dob: "1995-09-22",
        createdAt: "2023-02-14",
        updatedAt: "2024-04-20",
        phone: "9123456789",
        isEmailVerified: true,
        authProvider: "google",
        address: [
            {
                street: "456 Park Ave",
                city: "Mumbai",
                state: "Maharashtra",
                pincode: "400001",
                country: "India",
            },
        ],
    },
    {
        id: "3",
        name: "Amit Verma",
        email: "amit.verma@example.com",
        photo: "https://randomuser.me/api/portraits/men/3.jpg",
        role: "user",
        gender: "Male",
        dob: "1990-12-05",
        createdAt: "2023-03-18",
        updatedAt: "2024-03-15",
        phone: "9988776655",
        isEmailVerified: false,
        authProvider: "local",
        address: [
            {
                street: "789 Lake Rd",
                city: "Bangalore",
                state: "Karnataka",
                pincode: "560001",
                country: "India",
            },
        ],
    },
    {
        id: "4",
        name: "Sneha Patel",
        email: "sneha.patel@example.com",
        photo: "https://randomuser.me/api/portraits/women/4.jpg",
        role: "user",
        gender: "Female",
        dob: "1997-07-19",
        createdAt: "2023-04-22",
        updatedAt: "2024-02-10",
        phone: "9871234567",
        isEmailVerified: true,
        authProvider: "google",
        address: [
            {
                street: "101 Rose St",
                city: "Ahmedabad",
                state: "Gujarat",
                pincode: "380001",
                country: "India",
            },
        ],
    },
    {
        id: "5",
        name: "Rahul Singh",
        email: "rahul.singh@example.com",
        photo: "https://randomuser.me/api/portraits/men/5.jpg",
        role: "user",
        gender: "Male",
        dob: "1988-11-30",
        createdAt: "2023-05-10",
        updatedAt: "2024-01-05",
        phone: "9001122334",
        isEmailVerified: false,
        authProvider: "local",
        address: [
            {
                street: "202 Lotus Ave",
                city: "Kolkata",
                state: "West Bengal",
                pincode: "700001",
                country: "India",
            },
        ],
    },
    {
        id: "6",
        name: "Anjali Mehra",
        email: "anjali.mehra@example.com",
        photo: "https://randomuser.me/api/portraits/women/6.jpg",
        role: "user",
        gender: "Female",
        dob: "1993-03-11",
        createdAt: "2023-06-15",
        updatedAt: "2023-12-20",
        phone: "9812345678",
        isEmailVerified: true,
        authProvider: "google",
        address: [
            {
                street: "303 Sunflower St",
                city: "Chennai",
                state: "Tamil Nadu",
                pincode: "600001",
                country: "India",
            },
        ],
    },
    {
        id: "7",
        name: "Vikas Kumar",
        email: "vikas.kumar@example.com",
        photo: "https://randomuser.me/api/portraits/men/7.jpg",
        role: "user",
        gender: "Male",
        dob: "1992-08-25",
        createdAt: "2023-07-20",
        updatedAt: "2023-11-18",
        phone: "9822334455",
        isEmailVerified: false,
        authProvider: "local",
        address: [
            {
                street: "404 Jasmine Rd",
                city: "Pune",
                state: "Maharashtra",
                pincode: "411001",
                country: "India",
            },
        ],
    },
    {
        id: "8",
        name: "Meera Joshi",
        email: "meera.joshi@example.com",
        photo: "https://randomuser.me/api/portraits/women/8.jpg",
        role: "user",
        gender: "Female",
        dob: "1996-06-17",
        createdAt: "2023-08-25",
        updatedAt: "2023-10-10",
        phone: "9833445566",
        isEmailVerified: true,
        authProvider: "google",
        address: [
            {
                street: "505 Tulip Ln",
                city: "Hyderabad",
                state: "Telangana",
                pincode: "500001",
                country: "India",
            },
        ],
    },
    {
        id: "9",
        name: "Arjun Desai",
        email: "arjun.desai@example.com",
        photo: "https://randomuser.me/api/portraits/men/9.jpg",
        role: "user",
        gender: "Male",
        dob: "1994-10-02",
        createdAt: "2023-09-30",
        updatedAt: "2023-09-30",
        phone: "9844556677",
        isEmailVerified: false,
        authProvider: "local",
        address: [
            {
                street: "606 Orchid Ave",
                city: "Surat",
                state: "Gujarat",
                pincode: "395001",
                country: "India",
            },
        ],
    },
    {
        id: "10",
        name: "Kavita Nair",
        email: "kavita.nair@example.com",
        photo: "https://randomuser.me/api/portraits/women/10.jpg",
        role: "user",
        gender: "Female",
        dob: "1991-01-29",
        createdAt: "2023-10-15",
        updatedAt: "2023-10-20",
        phone: "9855667788",
        isEmailVerified: true,
        authProvider: "google",
        address: [
            {
                street: "707 Lily St",
                city: "Thiruvananthapuram",
                state: "Kerala",
                pincode: "695001",
                country: "India",
            },
        ],
    },
];

import React, { useState } from "react";
import {
    FiEdit,
    FiTrash2,
    FiEye,
    FiChevronDown,
    FiChevronUp,
    FiSearch,
} from "react-icons/fi";
const CustomerTable = ({ searchTerm }) => {
    const [sortConfig, setSortConfig] = useState({
        key: "createdAt",
        direction: "desc",
    });
    const [expandedRows, setExpandedRows] = useState([]);

    // Sort users
    const sortedUsers = [...users].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
    });

    // Filter users based on search term
    const filteredUsers = sortedUsers.filter(
        (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.phone?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const requestSort = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({ key, direction });
    };

    const toggleRowExpand = (userId) => {
        if (expandedRows.includes(userId)) {
            setExpandedRows(expandedRows.filter((id) => id !== userId));
        } else {
            setExpandedRows([...expandedRows, userId]);
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return "-";
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    const getAge = (dobString) => {
        if (!dobString) return "-";
        const dob = new Date(dobString);
        const diff = Date.now() - dob.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full ">
                <thead className="bg-gray-50  ">
                    <tr>
                        <th
                            className="sm:px-6 px-2 sm:py-3 text-left text-xs font-black text-gray-600 uppercase tracking-wider cursor-pointer"
                            onClick={() => requestSort("name")}
                        >
                            <div className="flex items-center">
                                Name
                                {sortConfig.key === "name" &&
                                    (sortConfig.direction === "asc" ? (
                                        <FiChevronUp className="ml-1" />
                                    ) : (
                                        <FiChevronDown className="ml-1" />
                                    ))}
                            </div>
                        </th>
                        <th className="sm:px-6 px-2 sm:py-3 text-left text-xs font-black text-gray-600 uppercase tracking-wider">
                            Photo
                        </th>
                        <th
                            className="sm:px-6 px-2 sm:py-3 text-left text-xs font-black text-gray-600 uppercase tracking-wider cursor-pointer"
                            onClick={() => requestSort("email")}
                        >
                            <div className="flex items-center">
                                Email
                                {sortConfig.key === "email" &&
                                    (sortConfig.direction === "asc" ? (
                                        <FiChevronUp className="ml-1" />
                                    ) : (
                                        <FiChevronDown className="ml-1" />
                                    ))}
                            </div>
                        </th>
                        <th className="sm:px-6 px-2 sm:py-3 py-1 text-left text-xs font-black text-gray-600 uppercase tracking-wider">
                            Role
                        </th>
                        <th className="sm:px-6 px-2 sm:py-3 py-1 text-left text-xs font-black text-gray-600 uppercase tracking-wider">
                            Phone
                        </th>
                        <th className="sm:px-6 px-2 sm:py-3 py-1 text-left text-xs font-black text-gray-600 uppercase tracking-wider">
                            Status
                        </th>
                        <th className="sm:px-6 px-2 sm:py-3 py-1 text-left text-xs font-black text-gray-600 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white ">
                    {filteredUsers.map((user) => (
                        <React.Fragment key={user.id}>
                            <tr
                                onClick={() => toggleRowExpand(user.id)}
                                className="hover:bg-gray-50 "
                            >
                                <td className="sm:px-6 sm:py-4 px-3 py-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="text-sm font-medium text-gray-900">
                                            {user.name}
                                        </div>
                                    </div>
                                </td>
                                <td className="sm:px-6 sm:py-4 px-3 py-2 whitespace-nowrap">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src={
                                                user.photo ||
                                                "/default-user.png"
                                            }
                                            alt={user.name}
                                        />
                                    </div>
                                </td>
                                <td className="sm:px-6 sm:py-4 px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                                    {user.email}
                                    {user.isEmailVerified && (
                                        <span className="ml-1 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Verified
                                        </span>
                                    )}
                                </td>
                                <td className="sm:px-6 sm:py-4 px-3 py-2 whitespace-nowrap">
                                    <span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            user.role === "admin"
                                                ? "bg-purple-100 text-purple-800"
                                                : "bg-blue-100 text-blue-800"
                                        }`}
                                    >
                                        {user.role}
                                    </span>
                                </td>
                                <td className="sm:px-6 sm:py-4 px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                                    {user.phone || "-"}
                                </td>
                                <td className="sm:px-6 sm:py-4 px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                                    <span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            user.authProvider === "google"
                                                ? "bg-red-100 text-red-800"
                                                : "bg-gray-100 text-gray-800"
                                        }`}
                                    >
                                        {user.authProvider}
                                    </span>
                                </td>
                                <td className="sm:px-6 sm:py-4 px-3 py-2 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex space-x-2">
                                        <button className="text-blue-600 hover:text-blue-900">
                                            <FiEye />
                                        </button>
                                        <button className="text-yellow-600 hover:text-yellow-900">
                                            <FiEdit />
                                        </button>
                                        <button className="text-red-600 hover:text-red-900">
                                            <FiTrash2 />
                                        </button>
                                        <button
                                            onClick={() =>
                                                toggleRowExpand(user.id)
                                            }
                                            className="text-gray-600 hover:text-gray-900"
                                        >
                                            {expandedRows.includes(user.id) ? (
                                                <FiChevronUp />
                                            ) : (
                                                <FiChevronDown />
                                            )}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            {/* Expanded row with additional details */}
                            {expandedRows.includes(user.id) && (
                                <tr className="bg-gray-50">
                                    <td
                                        colSpan="7"
                                        className="sm:px-6 sm:py-4 px-3 py-2"
                                    >
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-900">
                                                    Personal Information
                                                </h4>
                                                <div className="mt-2 space-y-1">
                                                    <p className="text-sm text-gray-600">
                                                        <span className="font-medium">
                                                            Gender:
                                                        </span>{" "}
                                                        {user.gender || "-"}
                                                    </p>
                                                    <p className="text-sm text-gray-600">
                                                        <span className="font-medium">
                                                            Date of Birth:
                                                        </span>{" "}
                                                        {formatDate(user.dob)}
                                                    </p>
                                                    <p className="text-sm text-gray-600">
                                                        <span className="font-medium">
                                                            Age:
                                                        </span>{" "}
                                                        {getAge(user.dob)}
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-900">
                                                    Account Information
                                                </h4>
                                                <div className="mt-2 space-y-1">
                                                    <p className="text-sm text-gray-600">
                                                        <span className="font-medium">
                                                            Created:
                                                        </span>{" "}
                                                        {formatDate(
                                                            user.createdAt
                                                        )}
                                                    </p>
                                                    <p className="text-sm text-gray-600">
                                                        <span className="font-medium">
                                                            Last Updated:
                                                        </span>{" "}
                                                        {formatDate(
                                                            user.updatedAt
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <h4 className="text-sm font-medium text-gray-900">
                                                    Address
                                                </h4>
                                                {user.address?.length > 0 ? (
                                                    <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                        {user.address.map(
                                                            (addr, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="bg-gray-100 p-3 rounded"
                                                                >
                                                                    <p className="text-sm text-gray-600">
                                                                        <span className="font-medium">
                                                                            Street:
                                                                        </span>{" "}
                                                                        {addr.street ||
                                                                            "-"}
                                                                    </p>
                                                                    <p className="text-sm text-gray-600">
                                                                        <span className="font-medium">
                                                                            City:
                                                                        </span>{" "}
                                                                        {addr.city ||
                                                                            "-"}
                                                                    </p>
                                                                    <p className="text-sm text-gray-600">
                                                                        <span className="font-medium">
                                                                            State:
                                                                        </span>{" "}
                                                                        {addr.state ||
                                                                            "-"}
                                                                    </p>
                                                                    <p className="text-sm text-gray-600">
                                                                        <span className="font-medium">
                                                                            Pincode:
                                                                        </span>{" "}
                                                                        {addr.pincode ||
                                                                            "-"}
                                                                    </p>
                                                                    <p className="text-sm text-gray-600">
                                                                        <span className="font-medium">
                                                                            Country:
                                                                        </span>{" "}
                                                                        {addr.country ||
                                                                            "-"}
                                                                    </p>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                ) : (
                                                    <p className="text-sm text-gray-600 mt-2">
                                                        No address information
                                                        available
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerTable;
