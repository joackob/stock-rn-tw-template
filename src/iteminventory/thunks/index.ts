import { createAsyncThunk } from "@reduxjs/toolkit";
import { ItemInventory, ItemInventoryProps } from "../interface";
import { deleteItem, getItems, postItem } from "../service";

export const setup = createAsyncThunk(
  "set/items",
  async () => await getItems()
);

export const addOne = createAsyncThunk(
  "post/item",
  async (item: ItemInventoryProps) => await postItem(item)
);

export const removeOne = createAsyncThunk(
  "delete/item",
  async (item: ItemInventory) => await deleteItem(item)
);
