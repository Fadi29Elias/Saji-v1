import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { useEffect, useSyncExternalStore } from "react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { settingsStore } from "../../store/settingsStore";

const cacheRtl = createCache({
  key: "mui-rtl",
  prepend: true,
  stylisPlugins: [prefixer, rtlPlugin],
});

export const RTLProvider = ({ children }) => {
  // ✅ Use useSyncExternalStore to prevent unnecessary re-renders
  const direction = useSyncExternalStore(
    settingsStore.subscribe,
    () => settingsStore.getState().direction
  );

  useEffect(() => {
    document.dir = direction;
  }, [direction]);

  return direction === "rtl" ? (
    <CacheProvider value={cacheRtl}>{children}</CacheProvider>
  ) : (
    <>{children}</>
  );
};
