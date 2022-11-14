import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { RootStackNavigator, Theme } from "./screens";
import { store } from "./src/store";
import { Provider } from "react-redux";
import Alert from "./screens/alert/Alert";

export default function App() {
  return (
    <Theme>
      <Provider store={store}>
        <NavigationContainer>
          <Alert>
            <RootStackNavigator />
          </Alert>
        </NavigationContainer>
      </Provider>
    </Theme>
  );
}
