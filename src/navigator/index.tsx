import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavBar from "./NavBar";

const RootStack = createNativeStackNavigator();
const RootStackParamList = {
  NavBar: undefined,
};

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
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
