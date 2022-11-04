import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemScreen from "../item/ItemScreen";
import InventoryScreen from "../inventory/InventoryScreen";
import AddItemScreen from "../add_item/AddItemScreen";
import { ItemInventory } from "../item/interfaces";

export type RootStackParamList = {
  ItemScreen: ItemInventory;
  InventoryScreen: undefined;
  AddItemScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Group>
        <RootStack.Screen name="InventoryScreen" component={InventoryScreen} />
        <RootStack.Screen name="ItemScreen" component={ItemScreen} />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen name="AddItemScreen" component={AddItemScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
