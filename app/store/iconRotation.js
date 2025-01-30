import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const iconRotationSlice = createSlice({
  name: "iconRotation",
  initialState,
  reducers: {
    setIconRotation: (state, action) => {
      return action.payload;
    },
  },
});

export const { setIconRotation } = iconRotationSlice.actions;
export default iconRotationSlice.reducer;
