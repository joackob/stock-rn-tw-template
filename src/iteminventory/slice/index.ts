import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemInventory } from "../interface";
import { setup, addOne, removeOne } from "../thunks";

export enum StatusItemsState {
  loading,
  online,
  offline,
  error,
  success,
  noevents,
}

export type ItemsState = {
  values: ItemInventory[];
  status: StatusItemsState;
  message: string;
};

const initialState: ItemsState = {
  values: [],
  status: StatusItemsState.loading,
  message: "",
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    closeAlert: (state) => {
      return {
        ...state,
        status: StatusItemsState.noevents,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(
      setup.fulfilled,
      (state, action: PayloadAction<ItemInventory[]>) => {
        const { payload: items } = action;
        return {
          ...state,
          values: items,
          status: StatusItemsState.online,
        };
      }
    );
    builder.addCase(setup.rejected, (state) => {
      return {
        ...state,
        status: StatusItemsState.offline,
      };
    });
    builder.addCase(setup.pending, (state) => {
      return {
        ...state,
        status: StatusItemsState.loading,
      };
    });
    builder.addCase(
      addOne.fulfilled,
      (state, action: PayloadAction<ItemInventory>) => {
        const { payload: item } = action;
        return {
          ...state,
          values: [item, ...state.values],
        };
      }
    );
    builder.addCase(addOne.rejected, (state) => {
      return {
        ...state,
        status: StatusItemsState.error,
        message:
          "Ups!!! Asegurese de haber completado correctamente los campos",
      };
    });
    builder.addCase(
      removeOne.fulfilled,
      (state, action: PayloadAction<{ id: string; wasRemoved: boolean }>) => {
        const { id, wasRemoved } = action.payload;
        if (!wasRemoved) return;
        return {
          ...state,
          values: state.values.filter((item) => item.id !== id),
        };
      }
    );
  },
});

export const itemsReducer = itemsSlice.reducer;
export const { closeAlert } = itemsSlice.actions;
