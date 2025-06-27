/* eslint-disable react-refresh/only-export-components */
import authService from "@/services/auth";
import { AuthContextType } from "@/types/AuthContextTypes";
import { RegisterRequest } from "@/types/AuthRequests";
import { User } from "@/types/User";
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext({} as AuthContextType);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStoredToken = async () => {
      const storedToken = await authService.getStoredToken();

      if (storedToken) {
        setToken(storedToken);
      }
      setIsLoading(false);
    };

    fetchStoredToken();
  }, []);

  const login = async (email: string, senha: string): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await authService.login({ email, senha });
      setToken(response.resposta.token);
      setUser(response.resposta.usuario);
      authService.storeToken(response.resposta.token);
      toast.success("Login successful!");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please check your credentials.");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (data: RegisterRequest): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await authService.register(data);
      setToken(response.resposta.token);
      setUser(response.resposta.usuario);
      authService.storeToken(response.resposta.token);
      toast.success("Registration successful!");
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed. Please try again.");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = (): void => {
    setUser(null);
    setToken(null);
    authService.clearStoredToken();
  };

  const isAuthenticated = !!token;

  const value: AuthContextType = {
    user,
    token,
    login,
    register,
    logout,
    isLoading,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
