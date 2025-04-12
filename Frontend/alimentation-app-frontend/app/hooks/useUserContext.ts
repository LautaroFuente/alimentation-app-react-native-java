import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext debe ser utilizado con UserProvider");
  }

  return context;
};
