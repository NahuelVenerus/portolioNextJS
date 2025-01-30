import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "pink",
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setColor: (state, action) => action.payload,
  },
});

export const { setColor } = colorSlice.actions;
export default colorSlice.reducer;
