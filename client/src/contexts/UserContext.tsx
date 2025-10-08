import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { User } from "@shared/schema";

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const verifySession = async () => {
      try {
        const response = await fetch("/api/user", { credentials: "include" });
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else if (response.status === 401) {
          setUser(null);
          localStorage.removeItem("user");
        }
      } catch (error) {
        console.error("Session verification failed:", error);
      } finally {
        setVerified(true);
      }
    };

    verifySession();
  }, []);

  useEffect(() => {
    if (user && verified) {
      localStorage.setItem("user", JSON.stringify(user));
    } else if (!user && verified) {
      localStorage.removeItem("user");
    }
  }, [user, verified]);

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }
  return context;
}
