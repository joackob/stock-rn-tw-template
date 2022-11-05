import axios from "axios";
import { ItemInventoryProps } from "../../item/interfaces";

export const api = {
  items: `${process.env.NEXT_PUBLIC_API_URI}/items`,
  item: `${process.env.NEXT_PUBLIC_API_URI}/item`,
};

export const getItems = async () => {
  const res = await axios.get(api.items);
  return res;
};

export const postItem = async (item: ItemInventoryProps) => {
  const res = await axios.post(api.item);
  return res;
};
