import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomErrorBoundary from "./components/shared/error-boundary/ErrorBondary";
import Loader from "./components/shared/Loader";
import Home from "./pages/home/Home";
import Layout from "./Components/layout/Layout";
import Menu from "./pages/menu/Menu";

const AppRouting = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<Loader />}>
            <CustomErrorBoundary>
              <Layout>
                <Home />
              </Layout>
            </CustomErrorBoundary>
          </React.Suspense>
        }
      />
      <Route
        path="/menus"
        element={
          <React.Suspense fallback={<Loader />}>
            <CustomErrorBoundary>
              <Layout>
                <Menu />
              </Layout>
            </CustomErrorBoundary>
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default AppRouting;
