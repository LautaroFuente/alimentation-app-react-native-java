import { Stack } from "expo-router";
import { UserProvider } from "../contexts/userContext";

const PrivateLayout = () => {
  return (
    <UserProvider>
      <Stack />
    </UserProvider>
  );
};

export default PrivateLayout;
