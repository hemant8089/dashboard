import { apiLogin, apiLogout, apiSignup } from '@/api/auth';
import React, { createContext, useState, useMemo, ReactNode, useCallback } from 'react';

export interface AuthState {

  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
}

// Create the authentication context with a default value
export const AuthContext = createContext<AuthState | undefined>(undefined);

// Provider Component for AuthContext
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  // Handle login
  const login = useCallback(async (email: string, password: string) => {
   
    
     const userData = await apiLogin(email, password);
     console.log(userData);
     
    
  }, []);

  // Handle signup
  const signup = useCallback(async (email: string, password: string, name: string) => {
    const userData = await apiSignup(email, password, name);
    console.log(userData);
    
  }, []);

  // Handle logout
  const logout = useCallback(async () => {
    await apiLogout();
    setUser(null);
  }, []);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
    
      login,
      signup,
      logout,
    }),
    [user, login, signup, logout]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

