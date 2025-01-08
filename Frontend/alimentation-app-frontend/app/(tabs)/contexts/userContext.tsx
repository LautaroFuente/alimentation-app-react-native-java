import { createContext, ReactNode, useReducer } from "react";
import { initialUser, userReducer } from "../reducers/userReducer";
import User from "../interfaces/User.interface";

type UserContextType = {
  stateUser: User;
  dispatchUser: React.Dispatch<any>;
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