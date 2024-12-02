// // import React from "react";
// // import { NavLink } from "react-router";

// // const Navbar = () => {
// //   return (
// //     <div className="flex flex-wrap gap-4 items-center justify-center bg-black p-4 text-lg sm:text-xl md:text-2xl">
// //       <NavLink
// //         to="/"
// //         className={({ isActive }) =>
// //           `font-bold ${isActive ? "text-yellow-300" : "text-white"} hover:text-yellow-300 transition-colors`
// //         }
// //       >
// //         Home
// //       </NavLink>
// //       <NavLink
// //         to="/pastes"
// //         className={({ isActive }) =>
// //           `font-bold ${isActive ? "text-yellow-300" : "text-white"} hover:text-yellow-300 transition-colors`
// //         }
// //       >
// //         Pastes
// //       </NavLink>
// //     </div>
// //   );
// // };

// // export default Navbar;
// import React from "react";
// import { NavLink } from "react-router";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-900 p-4 shadow-md sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white text-2xl font-semibold">PasteKeeper</div>
//         <div className="flex gap-6">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `font-medium transition ${
//                 isActive
//                   ? "text-yellow-400 underline underline-offset-4"
//                   : "text-white hover:text-yellow-300"
//               }`
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/pastes"
//             className={({ isActive }) =>
//               `font-medium transition ${
//                 isActive
//                   ? "text-yellow-400 underline underline-offset-4"
//                   : "text-white hover:text-yellow-300"
//               }`
//             }
//           >
//             Pastes
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";
// import { NavLink } from "react-router";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-yellow-400 text-xl font-semibold">PasteKeeper</div>
//         <div className="flex gap-6">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `text-sm font-medium ${
//                 isActive
//                   ? "text-yellow-400 underline underline-offset-4"
//                   : "text-gray-200 hover:text-yellow-300"
//               }`
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/pastes"
//             className={({ isActive }) =>
//               `text-sm font-medium ${
//                 isActive
//                   ? "text-yellow-400 underline underline-offset-4"
//                   : "text-gray-200 hover:text-yellow-300"
//               }`
//             }
//           >
//             Pastes
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";
// import { NavLink } from "react-router";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-5 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-yellow-400 text-2xl font-semibold">PasteKeeper</div>
//         <div className="flex gap-8">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `text-lg font-medium ${
//                 isActive
//                   ? "text-yellow-400 underline"
//                   : "text-gray-300 hover:text-yellow-400"
//               }`
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/pastes"
//             className={({ isActive }) =>
//               `text-lg font-medium ${
//                 isActive
//                   ? "text-yellow-400 underline"
//                   : "text-gray-300 hover:text-yellow-400"
//               }`
//             }
//           >
//             Pastes
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React from "react";
// import { NavLink } from "react-router";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-5 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* PasteKeeper logo on the Left */}
//         <div className="text-yellow-400 text-2xl font-semibold">
//           PasteKeeper
//         </div>

//         {/* Center the Navigation Links */}
//         <div className="flex gap-8">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `text-lg font-medium ${
//                 isActive
//                   ? "text-yellow-400 underline"
//                   : "text-gray-300 hover:text-yellow-400"
//               }`
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/pastes"
//             className={({ isActive }) =>
//               `text-lg font-medium ${
//                 isActive
//                   ? "text-yellow-400 underline"
//                   : "text-gray-300 hover:text-yellow-400"
//               }`
//             }
//           >
//             Pastes
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";
// import { NavLink } from "react-router";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-5 shadow-lg">
//       <div className="container mx-auto flex items-center">
//         {/* PasteKeeper logo on the Left */}
//         <div className="text-yellow-400 text-2xl font-semibold">
//           PasteKeeper
//         </div>

//         {/* Centered Navigation Links */}
//         <div className="flex-1 flex justify-center gap-8">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `text-lg font-medium ${
//                 isActive
//                   ? "text-yellow-400 underline"
//                   : "text-gray-300 hover:text-yellow-400"
//               }`
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/pastes"
//             className={({ isActive }) =>
//               `text-lg font-medium ${
//                 isActive
//                   ? "text-yellow-400 underline"
//                   : "text-gray-300 hover:text-yellow-400"
//               }`
//             }
//           >
//             Pastes
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";
// import { NavLink } from "react-router";

// const Navbar = () => {
//   return (
//     <nav className="bg-[#333333] p-5 shadow-lg">
//       <div className="container mx-auto flex items-center">
//         {/* PasteKeeper logo on the Left */}
//         <div className="text-[#E0E0E0] text-2xl font-semibold">
//           PasteKeeper
//         </div>

//         {/* Centered Navigation Links */}
//         <div className="flex-1 flex justify-center gap-8">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `text-lg font-medium ${
//                 isActive
//                   ? "text-[#A4C400] underline"
//                   : "text-[#E0E0E0] hover:text-[#A4C400]"
//               }`
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/pastes"
//             className={({ isActive }) =>
//               `text-lg font-medium ${
//                 isActive
//                   ? "text-[#A4C400] underline"
//                   : "text-[#E0E0E0] hover:text-[#A4C400]"
//               }`
//             }
//           >
//             Pastes
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";
// import { NavLink } from "react-router";

// const Navbar = () => {
//   return (
//     <nav className="bg-[#1D2B64] p-5 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-[#FFFFFF] text-2xl font-semibold">PasteKeeper</div>
//         <div className="flex gap-8">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `text-lg font-medium ${
//                 isActive
//                   ? "text-[#4A90E2] underline"
//                   : "text-[#E0E0E0] hover:text-[#4A90E2]"
//               }`
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/pastes"
//             className={({ isActive }) =>
//               `text-lg font-medium ${
//                 isActive
//                   ? "text-[#4A90E2] underline"
//                   : "text-[#E0E0E0] hover:text-[#4A90E2]"
//               }`
//             }
//           >
//             Pastes
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-5 shadow-lg">
      <div className="container mx-auto flex items-center">
        {/* PasteKeeper logo on the Left */}
        <div className="text-yellow-400 text-2xl font-semibold">
          PasteKeeper
        </div>

        {/* Centered Navigation Links */}
        <div className="flex-1 flex justify-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive
                  ? "text-yellow-400 underline"
                  : "text-gray-300 hover:text-yellow-400"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/pastes"
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive
                  ? "text-yellow-400 underline"
                  : "text-gray-300 hover:text-yellow-400"
              }`
            }
          >
            Pastes
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
