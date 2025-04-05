import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

const Home = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Bienvenido a la App</Text>
      <Button title="Registrate" onPress={() => router.push("/register")} />
      <Button title="Inicia Sesión" onPress={() => router.push("/login")} />
    </View>
  );
};

export default Home;
