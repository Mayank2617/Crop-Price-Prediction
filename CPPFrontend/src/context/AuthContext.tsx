// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   ReactNode,
// } from "react";

// // Define types for authentication context
// type AuthContextType = {
//   token: string | null;
//   user: any | null;
//   login: (token: string, user: any) => void;
//   logout: () => void;
//   isAuthenticated: boolean;
// };

// // Create context with default values
// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<any | null>(null);
//   const [token, setToken] = useState<string | null>(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true); // ✅ Added loading state

//   // Load user data from localStorage on app load
//   useEffect(() => {
//     try {
//       const storedToken = localStorage.getItem("token");
//       const storedUser = localStorage.getItem("user");

//       if (storedToken && storedUser) {
//         setToken(storedToken);
//         setUser(JSON.parse(storedUser));
//         setIsAuthenticated(true);
//       }
//     } catch (error) {
//       console.error("Error reading auth data:", error);
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");
//     } finally {
//       setLoading(false); // ✅ Done loading after checking storage
//     }
//   }, []);

//   // Login function to store user info and update state
//   const login = (token: string, user: any) => {
//     setToken(token);
//     setUser(user);
//     setIsAuthenticated(true);
//     localStorage.setItem("token", token);
//     localStorage.setItem("user", JSON.stringify(user));
//   };

//   // Logout function to clear user info
//   const logout = () => {
//     setToken(null);
//     setUser(null);
//     setIsAuthenticated(false);
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//   };

//   // ✅ Don’t render children until loading is done
//   if (loading) {
//     return <div>Loading...</div>; // You can add spinner here instead
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         token,
//         user,
//         login,
//         logout,
//         isAuthenticated,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Hook to use AuthContext easily
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type AuthContextType = {
  token: string | null;
  user: any | null;
  login: (token: string, user: any) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("token"));
  const [user, setUser] = useState<any>(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      return null;
    }
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => !!localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = (newToken: string, newUser: any) => {
    setToken(newToken);
    setUser(newUser);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
