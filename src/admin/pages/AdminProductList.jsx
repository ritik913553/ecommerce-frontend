import React, { useState, useEffect } from "react";
import { GoPackage } from "react-icons/go";
import ProductTable from "../components/ProductTable";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import AddProductForm from "../components/AddProductForm";
import { FolderInput } from "lucide-react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import EditProductModal from "../components/EditProductModal";

import { getAllProducts, searchProducts } from "../../http/index";

const AdminProductList = () => {
    const [isAddNewProductOpen, setIsAddNewProductOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedCollection, setSelectedCollection] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(null); // for filtered results

    const [currentPage, setCurrentPage] = useState(1); // for pagination
    const [totalPages, setTotalPages] = useState(1);
    const productsPerPage = 10;

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const res = await getAllProducts(currentPage, productsPerPage);
            console.log(res.data.products);
            setProducts(res.data.products);
            setTotalPages(res.data.totalPages);
        } catch (err) {
            console.error("Error fetching products:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [currentPage]);

    const handleSearch = async () => {
        try {
            setLoading(true);
            setCurrentPage(1);

            console.log(searchTerm);
            const res = await searchProducts({
                query: searchTerm,
                category: selectedCategory,
                collection: selectedCollection,
                currentPage,
                limit: productsPerPage,
            });

            console.log("Res : ", res);
            setFilteredProducts(res.data.products);
            setTotalPages(res.data.totalPages);
            setCurrentPage(currentPage);
        } catch (err) {
            console.error("Search error:", err);
            setFilteredProducts([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative h-full w-full ">
            <h1 className="font-semibold text-xl">Today,23 March 2025</h1>
            <div className="flex gap-2 sm:gap-9 items-center ">
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
                <div className="mt-5 rounded-xl p-2 sm:p-5 bg-white  h-[90%] flex flex-col ">
                    <header className="flex justify-between gap-2">
                        <div className="flex sm:flex-row flex-col gap-y-3 sm:gap-y-0 sm:gap-x-5 w-1/2  flex-1 pt-5">
                            <div className="flex  flex-col gap-y-2">
                                <h3 className="font-semibold text-sm">
                                    Search Product
                                </h3>
                                <label
                                    className="flex items-center text-2xl  gap-x-3 border-1 border-gray-300 rounded-md p-1 sm:p-3 font-bold"
                                    htmlFor=""
                                >
                                    <span className="text-gray-500">
                                        {" "}
                                        <IoIosSearch />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        value={searchTerm}
                                        onChange={(e) =>
                                            setSearchTerm(e.target.value)
                                        }
                                        className="outline-none text-sm "
                                    />
                                </label>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h3 className="font-semibold text-sm">
                                    Category
                                </h3>
                                <select
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    name=""
                                    id=""
                                    className="sm:p-3 p-1 border-1 outline-none text-lg text-gray-500  border-gray-300 rounded-md"
                                >
                                    <option value="">All products</option>
                                    <option value="Men">Men</option>
                                    <option value="Women">Women</option>
                                    <option value="Unisex">Unisex</option>
                                    <option value="Kids">Kids</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h3 className="font-semibold text-sm">
                                    Collection
                                </h3>
                                <select
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    name=""
                                    id=""
                                    className="sm:p-3 p-1 border-1 outline-none text-lg text-gray-500  border-gray-300 rounded-md"
                                >
                                    <option value="">All</option>
                                    <option value="Harry Poter">
                                        Harry Poter
                                    </option>
                                    <option value="Gta">Gta</option>
                                    <option value="Barbie">Barbie</option>
                                </select>
                            </div>
                            {/* search button  */}
                            <button
                                onClick={handleSearch}
                                className="bg-blue-500 text-white px-4  py-2 rounded-md mt-8 cursor-pointer"
                            >
                                Search
                            </button>
                        </div>
                        <div className=" flex  items-end">
                            <button
                                onClick={() => setIsAddNewProductOpen(true)}
                                className="text-white bg-green-500 rounded-md px-5 py-2 cursor-pointer"
                            >
                                Add New{" "}
                                <span className="sm:text-xl font-bold ml-2">
                                    +
                                </span>
                            </button>
                        </div>
                    </header>
                    <div className="sm:productList flex-1 mt-5 overflow-y-auto ">
                        {filteredProducts && filteredProducts.length === 0 ? (
                            <div className="text-center font-semibold text-gray-500 mt-10">
                                No products available
                            </div>
                        ) : (
                            <ProductTable
                                products={filteredProducts || products}
                                loading={loading}
                                setEditingProduct={setEditingProduct}
                                setIsEditModalOpen={setIsEditModalOpen}
                            />
                        )}
                    </div>
                    <div className="sm:w-fit mx-auto  sm:px-10  flex   gap-x-10 mt-4">
                        <button
                            disabled={currentPage === 1}
                            className="cursor-pointer bg-gray-200 rounded-full px-3 py-1"
                            onClick={() =>
                                filteredProducts
                                    ? handleSearch(currentPage - 1)
                                    : setCurrentPage((p) => Math.max(p - 1, 1))
                            }
                        >
                            <MdOutlineKeyboardArrowLeft className="cursor-pointer" />
                        </button>

                        <div className=" flex py-1 bg-gray-200 rounded-full px-10 gap-x-2">
                            {Array.from(
                                { length: totalPages },
                                (_, i) => i + 1
                            ).map((page) => (
                                <button
                                    key={page}
                                    onClick={() =>
                                        filteredProducts
                                            ? handleSearch(page)
                                            : setCurrentPage(page)
                                    }
                                    className={`rounded-full  px-3 py-1 cursor-pointer ${
                                        currentPage === page
                                            ? "bg-green-500  text-white "
                                            : "bg-white text-gray-600 "
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>

                        <button
                            disabled={currentPage === totalPages}
                            className="cursor-pointer bg-gray-200 rounded-full px-3 py-1"
                            onClick={() =>
                                filteredProducts
                                    ? handleSearch(currentPage + 1)
                                    : setCurrentPage((p) =>
                                          Math.min(p + 1, totalPages)
                                      )
                            }
                        >
                            <MdChevronRight className="cursor-pointer" />
                        </button>
                    </div>
                </div>
            ) : (
                <AddProductForm
                    onProductAdded={fetchProducts}
                    setIsAddNewProductOpen={setIsAddNewProductOpen}
                    onClose={() => setIsAddNewProductOpen(false)}
                />
            )}
            {isEditModalOpen && (
                <div className=" bg-white   top-0 left-0 h-full w-full absolute z-50 flex items-start justify-center p-10">
                    <EditProductModal
                        onProductEdited={fetchProducts}
                        setIsEditModalOpen={setIsEditModalOpen}
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
