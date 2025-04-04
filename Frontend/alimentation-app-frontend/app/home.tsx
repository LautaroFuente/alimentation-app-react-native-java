import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./Routes/RootStackParamList.type";

// Tipar las props de navegación usando el tipo de tu stack
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const Home = ({ navigation }: HomeProps) => {
  return (
    <View>
      <Text>Bienvenido a la App</Text>
      <Button
        title="Registrate"
        onPress={() => navigation.navigate("Register")}
      />
      <Button
        title="Inicia Sesión"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default Home;
