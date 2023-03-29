import { createContext, useState } from "react";

//what is actually exported is this
export const UserContext = createContext({
    currentUser : null,
    setCurrentUser : () => {}
});

export const UserProvider = (children:any) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}; //calling the values we want to give out

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

