import { createContext, FC, ReactNode, useContext, useState } from "react";
import { ItemInventory, ItemInventoryProps } from "../../item/interfaces";
import { getItems, postItem } from "../service";
import { View } from "react-native";
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

  const wrapRequest = (req: () => void) => {
    try {
      req();
    } catch (error) {
      setState({
        ...state,
        status: StatusInventory.offline,
      });
    }
  };

  const setItems = () =>
    wrapRequest(async () => {
      const res = await getItems();
      setState({
        ...state,
        values: res.data,
        status:
          res.status === 200 ? StatusInventory.online : StatusInventory.error,
      });
    });

  const addOne = (item: ItemInventoryProps) =>
    wrapRequest(async () => {
      const res = await postItem(item);
      setState({
        ...state,
        values: [res.data, ...state.values],
        status:
          res.status === 201 ? StatusInventory.online : StatusInventory.error,
      });
    });

  return (
    <InventoryContext.Provider value={{ ...initialState, setItems, addOne }}>
      {state.status === StatusInventory.error && (
        <Alert>ups!!! Algo no ocurrio como debiera</Alert>
      )}
      {state.status === StatusInventory.offline && (
        <Alert>Ups!!! Revisa tu conexión a la red</Alert>
      )}
      {state.status === StatusInventory.loading && <LinearProgress />}
      {children}
    </InventoryContext.Provider>
  );
};

const Alert = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return <View style={tw`bg-[${theme.colors.warning}] p-4`}>{children}</View>;
};

export default InvetoryProvider;
