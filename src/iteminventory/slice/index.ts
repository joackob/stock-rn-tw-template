import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemInventory } from "../interface";
import { setup } from "../thunks";

export enum StatusItemsState {
  loading,
  online,
  offline,
  error,
}

export type ItemsState = {
  values: ItemInventory[];
  status: StatusItemsState;
};

const initialState: ItemsState = {
  values: [],
  status: StatusItemsState.loading,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      setup.fulfilled,
      (state, action: PayloadAction<ItemInventory[]>) => {
        const { payload: items } = action;
        return {
          ...state,
          values: items,
        };
      }
    );
    builder.addCase(setup.rejected, (state) => {
      return {
        ...state,
        status: StatusItemsState.error,
      };
    });
    builder.addCase(setup.pending, (state) => {
      return {
        ...state,
        status: StatusItemsState.loading,
      };
    });
  },
});

export const itemsReducer = itemsSlice.reducer;
