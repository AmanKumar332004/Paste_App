// import {createSlice } from "@reduxjs/toolkit";

// // const initialState = {
// //     pastes:localStorage.getItem("pastes")?JSON.parse(localStorage.getItem("pastes")):[]
// // }

// const initialState = {
//     pastes: (() => {
//       const storedPastes = localStorage.getItem("pastes");
//       try {
//         return storedPastes ? JSON.parse(storedPastes) : [];
//       } catch (e) {
//         console.error("Error parsing pastes from localStorage", e);
//         return [];
//       }
//     })(),
//   };
  

// export const pasteSlice = createSlice({
//     name:"pastes",
//     initialState,
//     reducers:{
//         addPaste:(state,action)=>{
//             const paste = action.payload
//             state.pastes.push(paste)
//             localStorage.setItem("pastes",state.pastes)
//         },
//         updatePaste:(state,action)=>{

//         },
//         resetAllPaste:(state,action)=>{

//         },
//         removePaste:(state,action)=>{

//         }
//     }
// })

// export const {addPaste,updatePaste,resetAllPaste,removePaste} = pasteSlice.actions

// export default pasteSlice.reducer

import { createSlice } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';

const initialState = {
  pastes: (() => {
    const storedPastes = localStorage.getItem("pastes"); // the value will be in "String" 
    try {
      return storedPastes ? JSON.parse(storedPastes) : [];
    } catch (e) {
      console.error("Error parsing pastes from localStorage", e);
      return [];
    }
  })(),
};

export const pasteSlice = createSlice({
  name: "pastes",
  initialState,
  reducers: {
    addPaste: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      // Ensure the array is stringified before storing in localStorage
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste Created Successfully");
    },
    updatePaste: (state, action) => {
      const updatedPaste = action.payload;
      state.pastes = state.pastes.map(paste =>
        paste.id == updatedPaste.id ? updatedPaste : paste
      );
      // Ensure the updated pastes array is stringified before storing
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste Updated Successfully")
    },
    resetAllPaste: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes"); // Remove from localStorage when resetting
      toast("Deleted all Pastes")
    },
    removePaste: (state, action) => {
      const pasteIdToRemove = action.payload;
      state.pastes = state.pastes.filter(paste => paste.id !== pasteIdToRemove);
      // Ensure the updated pastes array is stringified before storing
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast("Deleted Successfully ")
    },
  },
});

export const { addPaste, updatePaste, resetAllPaste, removePaste } = pasteSlice.actions;

export default pasteSlice.reducer;
