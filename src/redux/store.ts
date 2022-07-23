import { configureStore } from "@reduxjs/toolkit";
import posts from "./slices/posts.Slice";

import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: {
    posts,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type useAppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<useAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
