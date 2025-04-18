
import React, { createContext, useContext, useState, useEffect } from "react";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// This is a mock implementation since we don't have a real backend
const mockUsers: Record<string, { id: string; name: string; email: string; password: string }> = {
  "user@example.com": { 
    id: "1", 
    name: "Demo User", 
    email: "user@example.com", 
    password: "password123" 
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in via localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    
    // Simulating API request delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser = mockUsers[email];
    
    if (!mockUser || mockUser.password !== password) {
      setLoading(false);
      throw new Error("Invalid email or password");
    }
    
    const loggedInUser = {
      id: mockUser.id,
      name: mockUser.name,
      email: mockUser.email
    };
    
    setUser(loggedInUser);
    localStorage.setItem("user", JSON.stringify(loggedInUser));
    setLoading(false);
  };

  const register = async (name: string, email: string, password: string) => {
    setLoading(true);
    
    // Simulating API request delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (mockUsers[email]) {
      setLoading(false);
      throw new Error("Email already in use");
    }
    
    const newUserId = Date.now().toString();
    
    // In a real app, this would be a server-side operation
    mockUsers[email] = {
      id: newUserId,
      name,
      email,
      password
    };
    
    const newUser = {
      id: newUserId,
      name,
      email
    };
    
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
