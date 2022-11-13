import { createAsyncThunk } from "@reduxjs/toolkit";
import { ItemInventoryProps } from "../interface";
import { getItems, postItem } from "../service";

export const setup = createAsyncThunk(
  "set/items",
  async () => await getItems()
);

export const addOne = createAsyncThunk(
  "post/item",
  async (item: ItemInventoryProps) => await postItem(item)
);
