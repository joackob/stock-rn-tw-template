import React, { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@rneui/themed";

// celeste #DBF2F5
// naranja #fc5b01
// amarillo #fcb834
// negro #375a64

const theme = createTheme({
  components: {},
  lightColors: {
    primary: "#dbf2f4",
    secondary: "#a9bfc1",
    black: "#365A61",
    white: "#fff",
    background: "#dbf2f4",
  },
});

const Theme = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
