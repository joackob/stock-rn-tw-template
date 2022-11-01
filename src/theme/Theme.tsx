import React, { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@rneui/themed";

const theme = createTheme({
  components: {},
  lightColors: {
    primary: "#dbf2f4",
    secondary: "#a9bfc1",
    black: "#1a2e35",
    white: "#fff",
    background: "#dbf2f4",
  },
});

const Theme = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
