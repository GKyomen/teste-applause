import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../mocks/user';
import { fetchUser } from '../api';

interface UserContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  claimExperience: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadUser = async () => {
    try {
      setLoading(true);
      setError(null);
      const userData = await fetchUser();
      setUser(userData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar usuário');
    } finally {
      setLoading(false);
    }
  };

  const claimExperience = () => {
    if (user) {
      setUser({
        ...user,
        canClaimExperience: false
      });
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, error, claimExperience }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
