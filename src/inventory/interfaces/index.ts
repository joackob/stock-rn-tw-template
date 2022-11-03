export type InventoryProps = {
  name: string;
};

export type Inventory = InventoryProps & {
  id: string;
};

export type ItemInventoryProps = {
  name: string;
  description: string;
  amount: number;
};

export type ItemInventory = ItemInventoryProps & {
  id: string;
};
