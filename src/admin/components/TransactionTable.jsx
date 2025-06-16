import React from "react";

const transactions = [
  {
    id: "#A12367J",
    customer: "Katarina",
    product: "Basketball",
    date: "18/03/24, 12:40",
    status: "Completed",
  },
  {
    id: "#A12367J",
    customer: "Rika",
    product: "Headphones",
    date: "18/03/24, 12:40",
    status: "Completed",
  },
  {
    id: "#A12367J",
    customer: "Sandy",
    product: "Iphone Pro",
    date: "18/03/24, 12:40",
    status: "Need Pay",
  },
  {
    id: "#A12367J",
    customer: "Norman",
    product: "Canon 600D",
    date: "18/03/24, 12:40",
    status: "Need Pay",
  },
  {
    id: "#A12367J",
    customer: "Ayush",
    product: "T-Shirt",
    date: "18/03/24, 12:40",
    status: "Need Pay",
  },
];

const getStatusStyle = (status) => {
  if (status === "Completed")
    return "bg-green-100 text-green-600";
  if (status === "Need Pay")
    return "bg-yellow-100 text-yellow-600";
};

const TransactionTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 overflow-x-auto lg:w-2/3">
      <div className="flex justify-between items-center  mb-4">
        <h2 className="text-lg font-semibold">Transaction List</h2>
        <button className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full">
          Manage All Orders →
        </button>
      </div>

      <table className="w-full text-left text-xs sm:text-sm ">
        <thead className="text-black font-bold border-b">
          <tr>
            <th className="p-4 sm:py-2 ">Order ID</th>
            <th className="p-4 sm:py-2 ">Customer</th>
            <th className="p-4 sm:py-2 ">Product</th>
            <th className="p-4 sm:py-2 ">Date</th>
            <th className="p-4 sm:py-2 ">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              <td className="p-4 sm:py-2 ">{tx.id}</td>
              <td className="p-4 sm:py-2 ">{tx.customer}</td>
              <td className="p-4 sm:py-2 ">{tx.product}</td>
              <td className="p-4 sm:py-2 ">{tx.date}</td>
              <td className="p-4 sm:py-2 ">
                <span className={`px-3 py-1 rounded-full flex items-center gap-2 w-fit ${getStatusStyle(tx.status)}`}>
                  <span className={`w-2 h-2 rounded-full ${tx.status === "Completed" ? "bg-green-500" : "bg-yellow-500"}`}></span>
                  {tx.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
