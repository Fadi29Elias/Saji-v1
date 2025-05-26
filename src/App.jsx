import { Box } from "@mui/material";
import { Suspense, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AppRouting from "./AppRouting";
import { RTLProvider } from "./theme/provider/RTLProvider";
import { ThemeProviderWrapper } from "./theme/provider/ThemeProvider";

function App() {
  useEffect(() => {
    const handleVisibilityChange = () => {
      document.title = document.hidden ? "Come Back :(" : "Saji's";
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <Box sx={{ backgroundColor: "rgba(0 , 0 , 0, 0.9)" }}>
      <Suspense fallback="Loading">
        <RTLProvider>
          <ThemeProviderWrapper>
            <>
              <AppRouting />
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </>
          </ThemeProviderWrapper>
        </RTLProvider>
      </Suspense>
    </Box>
  );
}

export default App;
