import { View, Button } from "react-native";
import LoginForm from "../components/loginForm";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Routes/RootStackParamList.type";

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  return (
    <View>
      <LoginForm navigation={navigation} />
      <Button title="Volver" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Login;
