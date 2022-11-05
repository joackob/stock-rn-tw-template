import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { RootStackNavigator, Theme } from "./src";
import InvetoryProvider from "./src/store/context";

export default function App() {
  return (
    <Theme>
      <InvetoryProvider>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </InvetoryProvider>
    </Theme>
  );
}
