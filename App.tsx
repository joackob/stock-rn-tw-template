import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { RootStackNavigator, Theme } from "./src";

export default function App() {
  return (
    <Theme>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </Theme>
  );
}
