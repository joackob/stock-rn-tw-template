import axios from "axios";
import { API_URI } from "../../api";
import { ItemInventory } from "../interface";

export const api = {
  items: `${API_URI}/collections/item/records`,
};

export const getItems = async (): Promise<ItemInventory[]> => {
  const res = await axios.get(api.items);
  return res.data.items;
};
