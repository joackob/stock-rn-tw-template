import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { RootStackNavigator, Theme } from "./screens";
import { store } from "./src/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Theme>
      <Provider store={store}>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </Provider>
    </Theme>
  );
}
