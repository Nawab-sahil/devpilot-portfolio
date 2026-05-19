"use client";

import { createContext, useContext, type ReactNode } from "react";

type ThemeContextValue = {
  themeName: string;
};

const ThemeContext = createContext<ThemeContextValue>({
  themeName: "devpilot",
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <ThemeContext.Provider value={{ themeName: "devpilot" }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}