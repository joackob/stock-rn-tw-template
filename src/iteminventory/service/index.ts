import axios from "axios";
import { API_URI } from "../../api";
import { ItemInventory, ItemInventoryProps } from "../interface";

export const api = {
  items: `${API_URI}/collections/item/records`,
};

const header = {
  "Content-Type": "application/json",
};

export const getItems = async (): Promise<ItemInventory[]> => {
  const res = await axios.get(api.items);
  return res.data.items;
};

export const postItem = async (
  item: ItemInventoryProps
): Promise<ItemInventory> => {
  const res = await axios.post(api.items, item, {
    headers: header,
  });

  return {
    ...item,
    id: res.data.id,
  };
};
