import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./color";
import iconRotationReducer from "./iconRotation";

const store = configureStore({
  reducer: {
    color: colorReducer,
    iconRotation: iconRotationReducer,
  },
});

export default store;
