import { createContext, useContext, useEffect, useState } from 'react';
import authApi from '../api/authApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const { data } = await authApi.me()
        setUser(data.user)
      } catch {
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
