import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { ItemInventory, ItemInventoryProps } from "../interface";
import uuid from "react-native-uuid";

export const itemAdapter = createEntityAdapter<ItemInventory>({
  selectId: (item) => item.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const itemsSlice = createSlice({
  name: "items",
  initialState: itemAdapter.getInitialState(),
  reducers: {
    addOne: (state, action: PayloadAction<ItemInventoryProps>) => {
      const { payload: data } = action;
      itemAdapter.addOne(state, { ...data, id: `${uuid.v4()}` });
    },
    removeOne: itemAdapter.removeOne,
  },
});

export const itemsReducer = itemsSlice.reducer;
export const { addOne, removeOne } = itemsSlice.actions;
