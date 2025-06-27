import { Route, Routes } from "react-router-dom";
import { PublicRoute } from "./PublicRoutes";
import LoginPage from "@/pages/Auth/Login/Login";
import RegisterPage from "@/pages/Auth/Register/Register";
import { ProtectedRoute } from "./PrivateRoutes";
import HomePage from "@/pages/app/Home";

export function AppRouter() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
