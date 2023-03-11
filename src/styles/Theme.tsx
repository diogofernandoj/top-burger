import { ReactNode } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    white: "#FFFFFF",
    black: "#0C0D0F",
    red: "#cc092f",
    darkRed: "#8f0622",
    orange: "#E8590C",
    yellow: "#FCC419",
    green: "#23DB42",
    teal: "#89DD13",
    cyan: "#3BC9DB",
    blue: "#25BEFF",
    indigo: "#4263Eb",
    purple: "#7E5CEF",
    pink: "#FE5895",
    gray100: "#FAFAFA",
    gray200: "#E7E7E7",
    gray300: "#DEE2E6",
    gray400: "#CED4DA",
    gray500: "#A4ACB4",
    gray600: "#64666B",
    gray700: "#424449",
    gray800: "#1D1E21",
    gray900: "#141518",
    primary: "#F83600",
    secondary: "#FE8C00",
  },
};

interface ThemeProps {
  children: ReactNode;
}

export function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
