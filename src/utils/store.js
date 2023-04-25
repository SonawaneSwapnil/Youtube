import { configureStore } from "@reduxjs/toolkit";
import allSlice from "./allSlice";
import Chatslice from "./Chatslice";

const store = configureStore({
  reducer: {
    app: allSlice,
    chat: Chatslice,
  },
});

export default store;
