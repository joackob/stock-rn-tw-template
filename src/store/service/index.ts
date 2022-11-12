import axios from "axios";
import { ItemInventoryProps } from "../../item/interfaces";

const API_URI = "http://192.168.0.7:8090/api";
export const api = {
  items: `${API_URI}/collections/item/records`,
};

export const getItems = async () => {
  const res = await axios.get(api.items);
  return res;
};

export const postItem = async (item: ItemInventoryProps) => {
  const res = await axios.post(api.items, { data: item });
  return res;
};
