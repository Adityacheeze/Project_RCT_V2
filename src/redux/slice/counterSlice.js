import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  nums : [4, 5],
}

const counterSlice = createSlice({
  name:"numbers",
  initialState,
  reducers : {
    add: (state) => {
      const num = Math.floor(Math.random() * 10);
      state.nums = [...state.nums, num];
    },
    remove: (state) => {
      state.nums.pop(); 
    },
    reset: (state) => {
      state.nums = [];
    }
  }
})

export const {add, remove, reset} = counterSlice.actions;

export default counterSlice.reducer;