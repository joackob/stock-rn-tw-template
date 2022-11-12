import { createContext, FC, ReactNode, useContext, useState } from "react";
import { ItemInventory, ItemInventoryProps } from "../../item/interfaces";
import { getItems, postItem } from "../service";
import { View, Text } from "react-native";
import tw from "twrnc";
import { LinearProgress, useTheme } from "@rneui/themed";

export enum StatusInventory {
  loading,
  online,
  offline,
  error,
}

export type ActionPayload<T> = {
  payload: T;
};

export interface InventoryState {
  status: StatusInventory;
  values: ItemInventory[];
  addOne: (item: ItemInventoryProps) => void;
  setItems: () => void;
}

const initialState: InventoryState = {
  status: StatusInventory.loading,
  values: [],
  addOne: () => {},
  setItems: () => {},
};

const InventoryContext = createContext<InventoryState>(initialState);

export const useInventoryContext = () => useContext(InventoryContext);

const InvetoryProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<InventoryState>(initialState);

  const setItems = async () => {
    try {
      const res = await getItems();
      setState({
        ...state,
        values: res.data.items,
        status:
          res.status === 200 ? StatusInventory.online : StatusInventory.error,
      });
    } catch (error) {
      console.log(error);
      setState({
        ...state,
        status: StatusInventory.offline,
      });
    }
  };

  const addOne = async (item: ItemInventoryProps) => {
    try {
      const res = await postItem(item);
      setState({
        ...state,
        values: [res.data.items, ...state.values],
        status:
          res.status === 201 ? StatusInventory.online : StatusInventory.error,
      });
    } catch (error) {
      console.log(error);
      setState({
        ...state,
        status: StatusInventory.offline,
      });
    }
  };

  return (
    <InventoryContext.Provider value={{ ...state, setItems, addOne }}>
      {children}
      {state.status === StatusInventory.error && (
        <Alert>
          <Text>ups!!! Algo no ocurrio como debiera</Text>
        </Alert>
      )}
      {state.status === StatusInventory.offline && (
        <Alert>
          <Text>Ups!!! Revisa tu conexión a la red</Text>
        </Alert>
      )}
      {state.status === StatusInventory.loading && <LinearProgress />}
    </InventoryContext.Provider>
  );
};

const Alert = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return <View style={tw`bg-[${theme.colors.warning}] p-4`}>{children}</View>;
};

export default InvetoryProvider;
