

import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addPaste, updatePaste } from "../Features/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [input, setInput] = useState("");
  const [searchParams, setSearchParams] = useSearchParams("");
  const pasteId = searchParams.get("pasteId");

  const Pastes = useSelector((state) => state.pastes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pasteId) {
      const paste = Pastes.find((paste) => paste.id == pasteId);
      setTitle(paste.title);
      setInput(paste.content);
    }
  }, [pasteId]);

  const createPaste = () => {
    const paste = {
      title: title,
      content: input,
      id: pasteId || Date.now(),
      createdAt: new Date().toLocaleDateString(),
    };

    if (pasteId) {
      dispatch(updatePaste(paste));
    } else {
      dispatch(addPaste(paste));
    }

    setInput("");
    setTitle("");
    setSearchParams({});
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8">
        {pasteId ? "Update Paste" : "Create a New Paste"}
      </h1>
      <div className="flex flex-col items-center gap-6">
        <input
          className="w-full max-w-2xl p-4 border-2 border-gray-700 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full max-w-2xl p-4 border-2 border-gray-700 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Write your Notes, Code, etc."
          rows={15}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={createPaste}
          className="w-full max-w-2xl py-3 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 font-medium"
        >
          {pasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>
    </div>
  );
};

export default Home;

