import { createContext, useReducer } from "react";
import { initialUser, userReducer } from "../reducers/userReducer";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [stateUser, dispatchUser] = useReducer(userReducer,initialUser);

  return (
    <UserContext.Provider value={{ stateUser, dispatchUser }}>
      {children}
    </UserContext.Provider>
  );
};