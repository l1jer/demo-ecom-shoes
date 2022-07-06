import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListener,
  signOutUser,
} from "../utils/firebase/firebase.utils";

// as the actual value to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  signOutUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
      setCurrentUser(user);
    });
    // Take callback value to onAuthStateChanged, whenever an user login or log out
    // a permanent open listener

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
