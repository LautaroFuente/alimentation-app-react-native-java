import { createContext, ReactNode, useReducer } from "react";
import { actionsUser, activeUser, initialUser, userReducer } from "../reducers/userReducer";

type UserContextType = {
  stateUser: activeUser;
  dispatchUser: React.Dispatch<actionsUser>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [stateUser, dispatchUser] = useReducer(userReducer,initialUser);

  return (
    <UserContext.Provider value={{ stateUser, dispatchUser }}>
      {children}
    </UserContext.Provider>
  );
};