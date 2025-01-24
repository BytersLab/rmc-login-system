import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener } from "../firebase/auth/auth.listener.jsx";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChangedListener(async (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
