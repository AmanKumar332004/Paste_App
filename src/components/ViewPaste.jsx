
import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const ViewPaste = () => {
  const { id } = useParams();
  const Pastes = useSelector((state) => state.pastes);

  const paste = Pastes.find((paste) => paste.id == id);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-yellow-400 mb-6">
        View Paste
      </h1>
      {paste ? (
        <>
          <input
            className="w-full max-w-2xl p-4 mb-4 border-2 border-gray-700 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            type="text"
            value={paste.title}
            readOnly
          />
          <button
            onClick={() => {
              navigator.clipboard.writeText(paste.content);
              toast.success("Copied to Clipboard");
            }}
            className="w-full max-w-2xl py-3 bg-yellow-500 text-black rounded-md mb-6 hover:bg-yellow-400 font-medium"
          >
            Copy Content
          </button>
          <textarea
            className="w-full max-w-2xl p-4 border-2 border-gray-700 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={paste.content}
            readOnly
            rows={8}
          />
        </>
      ) : (
        <p className="text-red-500 mt-6">Paste not found</p>
      )}
    </div>
  );
};

export default ViewPaste;

