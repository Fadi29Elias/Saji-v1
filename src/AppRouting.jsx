import React from "react";
import { Route, Routes } from "react-router-dom";


import Home from "./pages/home/Home";
import Layout from "./Components/layout/Layout";
import Menu from "./pages/menu/Menu";
import Location from "./Components/LocationComponent/Location";
import Contact from "./Components/ContactComponent/Contact";

const AppRouting = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback>
            <Layout>
              <Home />
            </Layout>
          </React.Suspense>
        }
      />
      <Route
        path="/menus"
        element={
          <React.Suspense fallback>
            <Layout>
              <Menu />
            </Layout>
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default AppRouting;
