import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { itemAdapter, itemsReducer } from "../iteminventory/slice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

//hooks
export const useAppDispatch: () => StoreDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;
export const selectorItems = itemAdapter.getSelectors(
  (state: StoreState) => state.items
);
