import React, { useState } from "react";
import { GoPackage } from "react-icons/go";
import ProductTable from "../components/ProductTable";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import AddProductForm from "../components/AddProductForm";
import { FolderInput } from "lucide-react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import EditProductModal from "../components/EditProductModal";
const AdminProductList = () => {
    const [isAddNewProductOpen, setIsAddNewProductOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    return (
        <div className="relative h-full w-full ">
            <h1 className="font-semibold text-xl">Today,23 March 2025</h1>
            <div className="flex gap-9 items-center ">
                <div
                    onClick={() => setIsAddNewProductOpen(false)}
                    className={`flex items-center mt-3 cursor-pointer gap-x-2 text-sm text-[#3DA16C] font-semibold ${
                        isAddNewProductOpen && "text-gray-400"
                    }`}
                >
                    <span>
                        {" "}
                        <GoPackage size={"17px"} />{" "}
                    </span>
                    Product Overview
                </div>
                {isAddNewProductOpen && (
                    <div className="mt-3 text-[#3DA16C]">
                        {" "}
                        <MdOutlineKeyboardArrowRight size={"20px"} />
                    </div>
                )}
                {isAddNewProductOpen && (
                    <div className="flex items-center cursor-pointer mt-3 gap-x-2 text-sm text-[#3DA16C] font-semibold">
                        <span className="flex gap-x-5 items-center ">
                            {" "}
                            <FolderInput size={"17px"} />{" "}
                        </span>
                        Add New Product
                    </div>
                )}
            </div>
            {!isAddNewProductOpen ? (
                <div className="mt-5 rounded-xl p-5 bg-white h-[90%] flex flex-col ">
                    <header className="flex justify-between">
                        <div className="flex gap-x-5 flex-1 pt-5">
                            <div className="flex flex-col gap-y-2">
                                <h3 className="font-semibold text-sm">
                                    Search Product
                                </h3>
                                <label
                                    className="flex items-center text-2xl  gap-x-3 border-1 border-gray-300 rounded-md p-3 font-bold"
                                    htmlFor=""
                                >
                                    <span className="text-gray-500">
                                        {" "}
                                        <IoIosSearch />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="outline-none text-sm "
                                    />
                                </label>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h3 className="font-semibold text-sm">
                                    Category
                                </h3>
                                <select
                                    name=""
                                    id=""
                                    className="p-3 border-1 outline-none text-lg text-gray-500  border-gray-300 rounded-md"
                                >
                                    <option value="">All products</option>
                                    <option value="">Men</option>
                                    <option value="">Women</option>
                                    <option value="">Unisex</option>
                                    <option value="">kids</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h3 className="font-semibold text-sm">
                                    Collection
                                </h3>
                                <select
                                    name=""
                                    id=""
                                    className="p-3 border-1 outline-none text-lg text-gray-500  border-gray-300 rounded-md"
                                >
                                    <option value="">All</option>
                                    <option value="">Harry Poter</option>
                                    <option value="">GTA</option>
                                </select>
                            </div>
                        </div>
                        <div className=" flex flex-cil items-end">
                            <button
                                onClick={() => setIsAddNewProductOpen(true)}
                                className="text-white bg-green-500 rounded-md px-5 py-1 cursor-pointer"
                            >
                                Add New{" "}
                                <span className="text-xl font-bold ml-2">
                                    +
                                </span>
                            </button>
                        </div>
                    </header>
                    <div className="productList flex-1 mt-5 overflow-y-auto ">
                        <ProductTable
                            setEditingProduct={setEditingProduct}
                            setIsEditModalOpen={setIsEditModalOpen}
                        />
                    </div>
                    <div className="w-full flex items-center justify-center gap-x-6">
                        <div className="rounded-full p-2 bg-[#F6F6F6] text-xl text-gray-600">
                            <MdOutlineKeyboardArrowLeft />
                        </div>
                        <div className="rounded-full bg-[#F6F6F6] px-5 py-1  flex gap-x-4 text-gray-600">
                            <div className="rounded-full bg-green-500 px-3 py-1 cursor-pointer">
                                1
                            </div>
                            <div className="rounded-full bg-white px-3 py-1 cursor-pointer ">
                                2
                            </div>
                            <div className="rounded-full bg-white px-3 py-1 cursor-pointer ">
                                3
                            </div>
                            <div className="rounded-full bg-white px-3 py-1 cursor-pointer ">
                                4
                            </div>
                        </div>
                        <div className="rounded-full p-2 bg-[#F6F6F6] text-xl text-gray-600">
                            <MdChevronRight />
                        </div>
                    </div>
                </div>
            ) : (
                <AddProductForm />
            )}
            {isEditModalOpen && (
                <div className=" bg-white   top-0 left-0 h-full w-full absolute z-50 flex items-start justify-center p-10">
                    <EditProductModal
                        product={editingProduct}
                        onClose={() => setIsEditModalOpen(false)}
                        // onSave={handleSaveProduct}
                    />
                </div>
            )}
        </div>
    );
};

export default AdminProductList;
