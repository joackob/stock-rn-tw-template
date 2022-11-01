import { Text } from "react-native";
import React, { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@rneui/themed";
import { Colors } from "react-native/Libraries/NewAppScreen";

const theme = createTheme({
  components: {},
  lightColors: {
    primary: "#7e57c2",
    secondary: "#b085f5",
    black: "#000",
    white: "#fff",
    background: "#7e57c2",
  },
});

const Theme = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
