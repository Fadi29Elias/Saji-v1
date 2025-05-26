import { GlobalStyles } from "@mui/material";

export const GlobalStyle = () => (
  <GlobalStyles
    styles={{
      body: {
        overflowX: "hidden",
      },
      ".table-scroll": {
        "::-webkit-scrollbar": {
          width: 5,
          height: 10,
        },
        " ::-webkit-scrollbar-track ": {},
        "::-webkit-scrollbar-thumb ": {
          background: "lightgray",
          borderRadius: " 10px",
        },
      },

      ".input-style": {
        zIndex: 1000,
        color: "#fff !important",
      },
      "#controllable-states-demo": {
        ":optional": {
          color: "#000",
        },
        ":params": {
          color: "#000",
        },
      },
      "#controllable-states-demo-listbox": {
        backgroundColor: "lightgray",
        zIndex: 10000,
      },
    }}
  />
);
