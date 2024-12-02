
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePaste } from "../Features/pasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router";

const Pastes = () => {
  const Pastes = useSelector((state) => state.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = searchTerm
    ? Pastes.filter((paste) =>
        paste.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : Pastes;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-yellow-400 mb-6">
        Pastes
      </h1>
      <input
        className="w-full max-w-2xl p-4 mb-6 border-2 border-gray-700 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        type="text"
        placeholder="Search Pastes"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 gap-6">
        {filteredData.map((paste) => (
          <div
            key={paste.id}
            className="p-6 bg-gray-800 rounded-md shadow-lg hover:bg-gray-700 transition duration-300"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-yellow-400">
                {paste.title}
              </h2>
              <span className="text-sm text-gray-400">{paste.createdAt}</span>
            </div>
            <p className="text-gray-300">
              {paste.content.length > 100
                ? `${paste.content.substring(0, 100)}...`
                : paste.content}
            </p>
            <div className="mt-4 flex flex-wrap justify-end gap-4">
              {/* View Button */}
              <Link
                to={`/paste/${paste.id}`}
                className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md text-sm hover:bg-blue-400 transition duration-300"
              >
                View
              </Link>

              {/* Edit Button */}
              <Link
                to={`/?pasteId=${paste.id}`}
                className="px-4 py-2 bg-yellow-500 text-black font-bold  rounded-md text-sm hover:bg-yellow-400 transition duration-300"
              >
                Edit
              </Link>

              {/* Copy Button */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(paste.content);
                  toast.success("Copied to Clipboard");
                }}
                className="px-4 py-2 bg-green-500 text-white font-bold  rounded-md text-sm hover:bg-green-400 transition duration-300"
              >
                Copy
              </button>

              {/* Delete Button */}
              <button
                onClick={() => dispatch(removePaste(paste.id))}
                className="px-4 py-2 bg-red-500 text-white font-bold  rounded-md text-sm hover:bg-red-400 transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pastes;
