import { createAsyncThunk } from "@reduxjs/toolkit";
import { getItems } from "../service";

export const setup = createAsyncThunk(
  "set/items",
  async () => await getItems()
);
