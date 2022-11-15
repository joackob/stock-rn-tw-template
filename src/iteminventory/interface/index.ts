export type ItemInventoryProps = {
  name: string;
  description: string;
  amount: number;
  location: string;
};

export type ItemInventory = ItemInventoryProps & {
  id: string;
};
