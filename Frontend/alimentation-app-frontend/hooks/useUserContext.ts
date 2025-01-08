import { UserContext } from "@/app/(tabs)/contexts/userContext";
import { useContext } from "react";

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within a UserProvider");
  }

  return context;
};
