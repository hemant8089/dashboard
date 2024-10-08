import { useContext } from 'react';
import { AuthContext, AuthState } from '../context/authContext';

export const useAuth = (): AuthState => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};