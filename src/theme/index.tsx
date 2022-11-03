import React, { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@rneui/themed";

const celeste = "#dbf2f5";
const naranja = "#fc5b01";
const amarillo = "#fcb834";
const negro = "#375a64";
const gris = "#a9bfc1";
const blanco = "#fff";

const theme = createTheme({
  components: {},
  lightColors: {
    primary: naranja,
    secondary: amarillo,
    grey0: gris,
    black: negro,
    white: blanco,
    background: celeste,
  },
});

const Theme = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
