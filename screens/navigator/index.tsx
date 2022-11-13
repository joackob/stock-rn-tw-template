import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DescriptionItemScreen from "../itemsinventory/descriptionitem/DescriptionItemScreen";
import ListItemsScreen from "../itemsinventory/listitems/ListItemsScreen";
import AddItemScreen from "../itemsinventory/additem/AddItemScreen";
import { ItemInventory } from "../../src/iteminventory/interface";

export type RootStackParamList = {
  DescriptionItemScreen: ItemInventory;
  ListItemsScreen: undefined;
  AddItemScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Group>
        <RootStack.Screen name="ListItemsScreen" component={ListItemsScreen} />
        <RootStack.Screen
          name="DescriptionItemScreen"
          component={DescriptionItemScreen}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen name="AddItemScreen" component={AddItemScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
