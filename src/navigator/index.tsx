import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavBar from "./NavBar";
import InventoryScreen from "../inventory/screens/InventoryScreen";
import { RootStackParamList } from "./interfaces";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <RootStack.Group>
        <RootStack.Screen name="NavBar" component={NavBar} />
      </RootStack.Group>

      <RootStack.Group>
        <RootStack.Screen name="InventoryScreen" component={InventoryScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
