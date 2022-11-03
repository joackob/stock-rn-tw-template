import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Inventory } from "../../inventory/interfaces";

export type RootStackParamList = {
  NavBar: undefined;
  InventoryScreen: Inventory;
};

export type TabStackParamList = {
  MainInventory: undefined;
  MainActivity: undefined;
};

export type InventoryMainNavProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "MainInventory">,
  NativeStackNavigationProp<RootStackParamList>
>;
