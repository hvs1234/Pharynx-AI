import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  path: "/",
  open: 1,
  open2: 1,
  open3: 1,
  divOpen: true,
  SubdivOpen: true,
};

const Slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPath(state, action) {
      state.path = action.payload;
    },
    setOpen(state, action) {
      state.open = state.open === action.payload ? 0 : action.payload;
    },
    setOpen2(state, action) {
      state.open2 = state.open2 === action.payload ? 0 : action.payload;
    },
    setOpen3(state, action) {
      state.open3 = state.open3 === action.payload ? 0 : action.payload;
    },
    setDivOpen(state, action) {
      state.divOpen = action.payload;
    },
    setSubDivOpen(state, action) {
      state.SubdivOpen = action.payload;
    },
  },
});

export const { setPath, setOpen, setDivOpen , setSubDivOpen ,setOpen2, setOpen3 } = Slice.actions;
export default Slice.reducer;
