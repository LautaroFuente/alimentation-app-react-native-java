import { View, Button } from "react-native";
import RegisterForm from "../components/registerForm";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Routes/RootStackParamList.type";

type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Register"
>;

interface RegisterProps {
  navigation: RegisterScreenNavigationProp;
}

const Register = ({ navigation }: RegisterProps) => {
  return (
    <View>
      <RegisterForm navigation={navigation} />
      <Button title="Volver" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Register;
