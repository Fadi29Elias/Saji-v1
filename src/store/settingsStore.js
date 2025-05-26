import { create } from "zustand";
import Cookies from "js-cookie";

export const settingsStore = create((set) => ({
  direction: Cookies.get("direction") || "ltr",
  mode:
    Cookies.get("mode") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"),

  setDirection: (dir) => {
    Cookies.set("direction", dir, { expires: 365 });
    set({ direction: dir });
  },
  setMode: (mode) => {
    Cookies.set("mode", mode, { expires: 365 });
    set({ mode });
  },
}));

export const useSettingsStore = (selector) => settingsStore(selector);
