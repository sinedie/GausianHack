import { createContext, useState } from "react";

//what is actually exported is this
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }: { children: JSX.Element }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser }; //calling the values we want to give out

  // @ts-ignore
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
