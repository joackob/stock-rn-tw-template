import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavBar from "./NavBar";

export type RootStackParamList = {
  NavBar: undefined;
};

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
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
