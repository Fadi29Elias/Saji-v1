import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { settingsStore } from "../../store/settingsStore";
import { createTheme } from "../index";

export const ThemeProviderWrapper = ({ children }) => {
  const mode = settingsStore((state) => state.mode);
  const direction = settingsStore((state) => state.direction);
  const responsiveFontSizes = settingsStore(
    (state) => state.responsiveFontSizes
  );

  // ✅ Memoize theme
  const theme = useMemo(
    () =>
      createTheme({
        direction,
        mode,
        responsiveFontSizes,
      }),
    [direction, mode, responsiveFontSizes]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
