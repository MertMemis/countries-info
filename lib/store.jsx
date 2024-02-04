import { configureStore } from "@reduxjs/toolkit";
import favReducer from "./features/favorites/favSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      favorites: favReducer,
    },
  });
};
