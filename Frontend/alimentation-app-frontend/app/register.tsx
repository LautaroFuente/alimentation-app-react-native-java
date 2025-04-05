import { useRouter } from "expo-router";
import { View, Button } from "react-native";
import RegisterForm from "./components/registerForm";

const Register = () => {
  const router = useRouter();

  return (
    <View>
      <RegisterForm />
      <Button title="Volver" onPress={() => router.push("/")} />
    </View>
  );
};

export default Register;
