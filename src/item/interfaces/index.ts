export type ItemInventoryProps = {
  name: string;
  description: string;
  amount: number;
};

export type ItemInventory = ItemInventoryProps & {
  id: string;
};
