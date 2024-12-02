// // // // We have to Display all the pastes Here

// // // import React, { useState } from "react";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import toast from "react-hot-toast";
// // // import {
// // //   addPaste,
// // //   updatePaste,
// // //   resetAllPaste,
// // //   removePaste,
// // // } from "../Features/pasteSlice";
// // // import { Link, Links } from "react-router";

// // // const Pastes = () => {
// // //   const Pastes = useSelector((state) => state.pastes);
// // //   console.log(Pastes);
// // //   console.log("Comp Redered");
// // //   const dispatch = useDispatch();

// // //   const [searchTerm, setSearchTerm] = useState("");

// // //   const filteredData = searchTerm
// // //     ? Pastes.filter(
// // //         (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()) //this will Render the Data according to the Search
// // //       )
// // //     : Pastes; // this will Render all the Data

// // //   return (
// // //     <>
// // //       <input
// // //         className="w-1/2 border-4 ml-80 mt-7 p-2 text-black rounded-xl text-lg"
// // //         type="search"
// // //         placeholder="Search Your Pastes"
// // //         value={searchTerm}
// // //         onChange={(e) => setSearchTerm(e.target.value)}
// // //       />
// // //       <button
// // //         className="w-36 mt-6 ml-5 text-lg font-bold p-3 rounded-2xl text-yellow-300 bg-black hover:bg-yellow-300 hover:text-black transition-colors duration-700"
// // //         onClick={filteredData}
// // //       >
// // //         Search
// // //       </button>
// // //       <div className=" flex flex-col w-[750px]  ml-80 mt-4 h-full ">
// // //         {filteredData.map((paste) => (
// // //           <div
// // //             key={paste.id}
// // //             className="border-2 mt-6 h-48 rounded-xl bg-black"
// // //           >
// // //             {/* <h1 className="text-3xl p-3 flex justify-between " >{paste.title} {paste.createdAt}</h1> */}
// // //             <h1 className="text-3xl p-3 flex justify-between">
// // //               <span>{paste.title}</span>
// // //               <span className="text-sm">{paste.createdAt}</span>
// // //             </h1>
// // //             <hr className="border border-yellow-300 "></hr>
// // //             <p className="p-3">{paste.content}</p>
// // //             <div className="flex justify-end mt-7 gap-2 p-3">
// // //               <Link
// // //                 className="w-12 bg-slate-500 border rounded-lg pl-2 "
// // //                 to={`/?pasteId=${paste.id}`}
// // //               >
// // //                 Edit
// // //               </Link>
// // //               <Link
// // //                 className="w-12 bg-slate-500 border rounded-lg pl-2"
// // //                 to={`/paste/${paste.id}`}
// // //               >
// // //                 View
// // //               </Link>
// // //               <button
// // //                 className="w-12 bg-slate-500 border rounded-lg "
// // //                 onClick={() => {
// // //                   navigator.clipboard.writeText(paste.content);
// // //                   toast.success("Copied to Clipboard");
// // //                 }}
// // //               >
// // //                 Copy
// // //               </button>
// // //               <button
// // //                 className="w-12 bg-slate-500 border rounded-lg "
// // //                 onClick={() => {
// // //                   // Generate the shareable link
// // //                   const shareableLink = `${window.location.origin}/paste/${paste.id}`;
// // //                   // Copy it to the clipboard
// // //                   navigator.clipboard.writeText(shareableLink);
// // //                   // Show toast notification
// // //                   toast.success("Link copied successfully!");
// // //                 }}
// // //               >
// // //                 Share
// // //               </button>
// // //               <button
// // //                 className="w-14 bg-slate-500 border rounded-lg "
// // //                 onClick={() => dispatch(removePaste(paste.id))}
// // //               >
// // //                 Delete
// // //               </button>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Pastes;

// // import React, { useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import toast from "react-hot-toast";
// // import { removePaste } from "../Features/pasteSlice";
// // import { Link } from "react-router";

// // const Pastes = () => {
// //   const Pastes = useSelector((state) => state.pastes);
// //   const dispatch = useDispatch();
// //   const [searchTerm, setSearchTerm] = useState("");

// //   const filteredData = searchTerm
// //     ? Pastes.filter((paste) =>
// //         paste.title.toLowerCase().includes(searchTerm.toLowerCase())
// //       )
// //     : Pastes;

// //   return (
// //     <div className="p-4">
// //       <div className="flex flex-col md:flex-row gap-4 items-center">
// //         <input
// //           className="w-full max-w-md border-4 p-2 rounded-xl text-black text-lg"
// //           type="search"
// //           placeholder="Search Your Pastes"
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //         />
// //       </div>
// //       <div className="grid gap-6 mt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
// //         {filteredData.map((paste) => (
// //           <div
// //             key={paste.id}
// //             className="p-4 bg-black text-white rounded-xl shadow-md"
// //           >
// //             <div className="flex justify-between items-center">
// //               <h1 className="text-lg font-bold">{paste.title}</h1>
// //               <span className="text-sm text-gray-400">{paste.createdAt}</span>
// //             </div>
// //             <p className="mt-3">{paste.content}</p>
// //             <div className="flex justify-end mt-4 gap-2">
// //               <Link
// //                 to={`/?pasteId=${paste.id}`}
// //                 className="p-2 bg-yellow-500 text-black rounded-md"
// //               >
// //                 Edit
// //               </Link>
// //               <Link
// //                 to={`/paste/${paste.id}`}
// //                 className="p-2 bg-yellow-500 text-black rounded-md"
// //               >
// //                 View
// //               </Link>
// //               <button
// //                 onClick={() => {
// //                   navigator.clipboard.writeText(paste.content);
// //                   toast.success("Copied to Clipboard");
// //                 }}
// //                 className="p-2 bg-yellow-500 text-black rounded-md"
// //               >
// //                 Copy
// //               </button>
// //               <button
// //                 onClick={() => dispatch(removePaste(paste.id))}
// //                 className="p-2 bg-red-500 text-white rounded-md"
// //               >
// //                 Delete
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Pastes;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router";
// import toast from "react-hot-toast";
// import { removePaste } from "../Features/pasteSlice";

// const Pastes = () => {
//   const Pastes = useSelector((state) => state.pastes);
//   const dispatch = useDispatch();
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredData = searchTerm
//     ? Pastes.filter((paste) =>
//         paste.title.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : Pastes;

//   return (
//     <div className="min-h-screen bg-gray-100 py-10">
//       <div className="container mx-auto">
//         <div className="flex justify-center">
//           <input
//             className="w-full max-w-md p-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             type="text"
//             placeholder="Search Your Pastes"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//         <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
//           {filteredData.map((paste) => (
//             <div
//               key={paste.id}
//               className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
//             >
//               <h2 className="text-xl font-bold text-gray-800">{paste.title}</h2>
//               <p className="text-sm text-gray-600 mt-2">{paste.createdAt}</p>
//               <p className="text-gray-700 mt-4 line-clamp-3">{paste.content}</p>
//               <div className="mt-6 flex justify-between items-center">
//                 <Link
//                   to={`/?pasteId=${paste.id}`}
//                   className="py-1 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
//                 >
//                   Edit
//                 </Link>
//                 <Link
//                   to={`/paste/${paste.id}`}
//                   className="py-1 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                 >
//                   View
//                 </Link>
//                 <button
//                   onClick={() => {
//                     const shareableLink = `${window.location.origin}/paste/${paste.id}`;
//                     navigator.clipboard.writeText(shareableLink);
//                     toast.success("Link copied successfully!");
//                   }}
//                   className="py-1 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
//                 >
//                   Share
//                 </button>
//                 <button
//                   onClick={() => dispatch(removePaste(paste.id))}
//                   className="py-1 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pastes;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { removePaste } from "../Features/pasteSlice";
// import toast from "react-hot-toast";
// import { Link } from "react-router";

// const Pastes = () => {
//   const Pastes = useSelector((state) => state.pastes);
//   const dispatch = useDispatch();
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredData = searchTerm
//     ? Pastes.filter((paste) =>
//         paste.title.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : Pastes;

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold text-center text-yellow-400 mb-6">
//         Pastes
//       </h1>
//       <input
//         className="w-full max-w-xl mx-auto block p-3 border-2 border-gray-700 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//         type="text"
//         placeholder="Search Pastes"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div className="mt-6 grid grid-cols-1 gap-6">
//         {filteredData.map((paste) => (
//           <div key={paste.id} className="p-4 bg-gray-800 rounded-md shadow">
//             <div className="flex justify-between">
//               <h2 className="text-lg font-semibold text-yellow-400">
//                 {paste.title}
//               </h2>
//               <span className="text-sm text-gray-400">{paste.createdAt}</span>
//             </div>
//             <p className="text-gray-300 mt-2">{paste.content}</p>
//             <div className="mt-4 flex justify-end gap-2">
//               <Link
//                 to={`/?pasteId=${paste.id}`}
//                 className="text-sm text-yellow-500 hover:underline"
//               >
//                 Edit
//               </Link>
//               <button
//                 onClick={() => {
//                   navigator.clipboard.writeText(paste.content);
//                   toast.success("Copied to Clipboard");
//                 }}
//                 className="text-sm text-yellow-500 hover:underline"
//               >
//                 Copy
//               </button>
//               <button
//                 onClick={() => dispatch(removePaste(paste.id))}
//                 className="text-sm text-red-500 hover:underline"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Pastes;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { removePaste } from "../Features/pasteSlice";
// import toast from "react-hot-toast";
// import { Link } from "react-router";

// const Pastes = () => {
//   const Pastes = useSelector((state) => state.pastes);
//   const dispatch = useDispatch();
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredData = searchTerm
//     ? Pastes.filter((paste) =>
//         paste.title.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : Pastes;

//   return (
//     <div className="p-8 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold text-center text-yellow-400 mb-6">
//         Pastes
//       </h1>
//       <input
//         className="w-full max-w-2xl p-4 mb-6 border-2 border-gray-700 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//         type="text"
//         placeholder="Search Pastes"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div className="grid grid-cols-1 gap-6">
//         {filteredData.map((paste) => (
//           <div key={paste.id} className="p-6 bg-gray-800 rounded-md shadow-lg">
//             <div className="flex justify-between items-center">
//               <h2 className="text-xl font-semibold text-yellow-400">
//                 {paste.title}
//               </h2>
//               <span className="text-sm text-gray-400">{paste.createdAt}</span>
//             </div>
//             <p className="text-gray-300 mt-2">{paste.content}</p>
//             <div className="mt-4 flex justify-end gap-4">
//               <Link
//                 to={`/?pasteId=${paste.id}`}
//                 className="text-sm text-yellow-500 hover:underline"
//               >
//                 Edit
//               </Link>
//               <button
//                 onClick={() => {
//                   navigator.clipboard.writeText(paste.content);
//                   toast.success("Copied to Clipboard");
//                 }}
//                 className="text-sm text-yellow-500 hover:underline"
//               >
//                 Copy
//               </button>
//               <button
//                 onClick={() => dispatch(removePaste(paste.id))}
//                 className="text-sm text-red-500 hover:underline"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Pastes;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { removePaste } from "../Features/pasteSlice";
// import toast from "react-hot-toast";
// import { Link } from "react-router";

// const Pastes = () => {
//   const Pastes = useSelector((state) => state.pastes);
//   const dispatch = useDispatch();
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredData = searchTerm
//     ? Pastes.filter((paste) =>
//         paste.title.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : Pastes;

//   return (
//     <div className="p-8 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold text-center text-yellow-400 mb-6">
//         Pastes
//       </h1>
//       <input
//         className="w-full max-w-2xl p-4 mb-6 border-2 border-gray-700 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//         type="text"
//         placeholder="Search Pastes"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div className="grid grid-cols-1 gap-6">
//         {filteredData.map((paste) => (
//           <div key={paste.id} className="p-6 bg-gray-800 rounded-md shadow-lg">
//             <div className="flex justify-between items-center">
//               <h2 className="text-xl font-semibold text-yellow-400">
//                 {paste.title}
//               </h2>
//               <span className="text-sm text-gray-400">{paste.createdAt}</span>
//             </div>
//             <p className="text-gray-300 mt-2">{paste.content}</p>
//             <div className="mt-4 flex justify-end gap-4">
//               {/* View Button */}
//               <Link
//                 to={`/paste/${paste.id}`}
//                 className="text-sm text-yellow-500 hover:underline"
//               >
//                 View
//               </Link>
//               <button
//                 onClick={() => {
//                   navigator.clipboard.writeText(paste.content);
//                   toast.success("Copied to Clipboard");
//                 }}
//                 className="text-sm text-yellow-500 hover:underline"
//               >
//                 Copy
//               </button>
//               <button
//                 onClick={() => dispatch(removePaste(paste.id))}
//                 className="text-sm text-red-500 hover:underline"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Pastes;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { removePaste } from "../Features/pasteSlice";
// import toast from "react-hot-toast";
// import { Link } from "react-router";

// const Pastes = () => {
//   const Pastes = useSelector((state) => state.pastes);
//   const dispatch = useDispatch();
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredData = searchTerm
//     ? Pastes.filter((paste) =>
//         paste.title.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : Pastes;

//   return (
//     <div className="p-8 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold text-center text-yellow-400 mb-6">
//         Pastes
//       </h1>
//       <input
//         className="w-full max-w-2xl p-4 mb-6 border-2 border-gray-700 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//         type="text"
//         placeholder="Search Pastes"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div className="grid grid-cols-1 gap-6">
//         {filteredData.map((paste) => (
//           <div
//             key={paste.id}
//             className="p-6 bg-gray-800 rounded-md shadow-lg hover:bg-gray-700 transition duration-300"
//           >
//             <div className="flex justify-between items-center">
//               <h2 className="text-xl font-semibold text-yellow-400">
//                 {paste.title}
//               </h2>
//               <span className="text-sm text-gray-400">{paste.createdAt}</span>
//             </div>
//             <p className="text-gray-300 mt-2">{paste.content}</p>
//             <div className="mt-4 flex justify-end gap-4">
//               {/* View Button */}
//               <Link
//                 to={`/paste/${paste.id}`}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-400 transition duration-300"
//               >
//                 View
//               </Link>

//               {/* Edit Button */}
//               <Link
//                 to={`/?pasteId=${paste.id}`}
//                 className="px-4 py-2 bg-yellow-500 text-black rounded-md text-sm hover:bg-yellow-400 transition duration-300"
//               >
//                 Edit
//               </Link>

//               {/* Copy Button */}
//               <button
//                 onClick={() => {
//                   navigator.clipboard.writeText(paste.content);
//                   toast.success("Copied to Clipboard");
//                 }}
//                 className="px-4 py-2 bg-green-500 text-white rounded-md text-sm hover:bg-green-400 transition duration-300"
//               >
//                 Copy
//               </button>

//               {/* Delete Button */}
//               <button
//                 onClick={() => dispatch(removePaste(paste.id))}
//                 className="px-4 py-2 bg-red-500 text-white rounded-md text-sm hover:bg-red-400 transition duration-300"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Pastes;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import toast from "react-hot-toast";
// import { removePaste } from "../Features/pasteSlice";
// import { Link } from "react-router";

// const Pastes = () => {
//   const Pastes = useSelector((state) => state.pastes);
//   const dispatch = useDispatch();

//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredData = searchTerm
//     ? Pastes.filter(
//         (paste) =>
//           paste.title.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : Pastes;

//   return (
//     <div className="bg-[#333333] p-6 min-h-screen">
//       <input
//         className="w-1/2 border-2 border-[#A4C400] ml-80 mt-7 p-2 rounded-xl text-lg text-[#E0E0E0] bg-[#333333]"
//         type="search"
//         placeholder="Search Your Pastes"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button
//         className="w-36 mt-6 ml-5 text-lg font-bold p-3 rounded-2xl text-[#A4C400] bg-[#333333] hover:bg-[#A4C400] hover:text-[#333333] transition-colors duration-700"
//       >
//         Search
//       </button>
//       <div className="flex flex-col w-[750px] ml-80 mt-4 h-full">
//         {filteredData.map((paste) => (
//           <div key={paste.id} className="border-2 mt-6 h-48 rounded-xl bg-[#333333]">
//             <h1 className="text-3xl p-3 flex justify-between text-[#E0E0E0]">
//               <span>{paste.title}</span>
//               <span className="text-sm">{paste.createdAt}</span>
//             </h1>
//             <hr className="border border-[#A4C400]" />
//             <p className="p-3 text-[#E0E0E0]">{paste.content}</p>
//             <div className="flex justify-end mt-7 gap-2 p-3">
//               <Link
//                 className="w-12 bg-[#A4C400] border rounded-lg pl-2"
//                 to={`/?pasteId=${paste.id}`}
//               >
//                 Edit
//               </Link>
//               <Link
//                 className="w-12 bg-[#A4C400] border rounded-lg pl-2"
//                 to={`/paste/${paste.id}`}
//               >
//                 View
//               </Link>
//               <button
//                 className="w-12 bg-[#A4C400] border rounded-lg"
//                 onClick={() => {
//                   navigator.clipboard.writeText(paste.content);
//                   toast.success("Copied to Clipboard");
//                 }}
//               >
//                 Copy
//               </button>
//               <button
//                 className="w-12 bg-[#A4C400] border rounded-lg"
//                 onClick={() => {
//                   // Generate the shareable link
//                   const shareableLink = `${window.location.origin}/paste/${paste.id}`;
//                   // Copy it to the clipboard
//                   navigator.clipboard.writeText(shareableLink);
//                   // Show toast notification
//                   toast.success("Link copied successfully!");
//                 }}
//               >
//                 Share
//               </button>
//               <button
//                 className="w-14 bg-[#A4C400] border rounded-lg"
//                 onClick={() => dispatch(removePaste(paste.id))}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Pastes;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import toast from "react-hot-toast";
// import { addPaste, updatePaste, resetAllPaste, removePaste } from "../Features/pasteSlice";
// import { Link } from "react-router";

// const Pastes = () => {
//   const Pastes = useSelector((state) => state.pastes);
//   const dispatch = useDispatch();

//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredData = searchTerm
//     ? Pastes.filter(
//         (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : Pastes;

//   return (
//     <div className="bg-[#1D2B64] p-6 min-h-screen">
//       <input
//         className="w-1/2 border-2 border-[#4A90E2] ml-80 mt-7 p-2 text-[#FFFFFF] rounded-xl text-lg bg-[#1D2B64]"
//         type="search"
//         placeholder="Search Your Pastes"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div className="flex flex-col w-[750px] ml-80 mt-4">
//         {filteredData.map((paste) => (
//           <div key={paste.id} className="border-2 border-[#4A90E2] mt-6 h-48 rounded-xl bg-[#1D2B64]">
//             <h1 className="text-[#FFFFFF] p-3 flex justify-between">
//               <span>{paste.title}</span>
//               <span className="text-[#4A90E2] text-sm">{paste.createdAt}</span>
//             </h1>
//             <hr className="border-[#4A90E2]"></hr>
//             <p className="p-3 text-[#FFFFFF]">{paste.content}</p>
//             <div className="flex justify-end mt-7 gap-2 p-3">
//               <Link
//                 className="w-12 bg-[#4A90E2] text-[#1D2B64] border rounded-lg pl-2"
//                 to={`/?pasteId=${paste.id}`}
//               >
//                 Edit
//               </Link>
//               <Link
//                 className="w-12 bg-[#4A90E2] text-[#1D2B64] border rounded-lg pl-2"
//                 to={`/paste/${paste.id}`}
//               >
//                 View
//               </Link>
//               <button
//                 className="w-12 bg-[#4A90E2] text-[#1D2B64] border rounded-lg"
//                 onClick={() => {
//                   navigator.clipboard.writeText(paste.content);
//                   toast.success("Copied to Clipboard");
//                 }}
//               >
//                 Copy
//               </button>
//               <button
//                 className="w-12 bg-[#4A90E2] text-[#1D2B64] border rounded-lg"
//                 onClick={() => {
//                   const shareableLink = `${window.location.origin}/paste/${paste.id}`;
//                   navigator.clipboard.writeText(shareableLink);
//                   toast.success("Link copied successfully!");
//                 }}
//               >
//                 Share
//               </button>
//               <button
//                 className="w-14 bg-[#4A90E2] text-[#1D2B64] border rounded-lg"
//                 onClick={() => dispatch(removePaste(paste.id))}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Pastes;

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
            <div className="mt-4 flex justify-end gap-4">
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
