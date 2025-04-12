import { Text, View, TextInput, Button } from "react-native";
import { useForm } from "../hooks/useForm";
import ErrorMessage from "./errorMessage";
import { useState } from "react";
import { fetchGeneric } from "../helpers/fetchGeneric";
import { userLoginSchema } from "../schemas/User";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Routes/RootStackParamList.type";
import { useUserContext } from "../hooks/useUserContext";

type LoginFormScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

interface LoginFormProps {
  navigation: LoginFormScreenNavigationProp;
}

const initialForm = {
  email: "",
  password: "",
};

const apiLoginUrl = "";

const LoginForm: React.FC<LoginFormProps> = ({ navigation }) => {
  const {
    form,
    errorForm,
    handleInputChange,
    handleErrorForm,
    resetForm,
    resetErrorForm,
  } = useForm(initialForm);

  const [formErrorServer, setFormErrorServer] = useState(false);
  const [userNotRegistered, setUserNotRegistered] = useState({
    state: false,
    message: "",
  });

  const { stateUser, dispatchUser } = useUserContext();

  const handleSubmit = async () => {
    resetErrorForm();
    setFormErrorServer(false);
    setUserNotRegistered({
      state: false,
      message: "",
    });
    const result = userLoginSchema.safeParse(form);
    if (result.success) {
      try {
        console.log(`Validacion correcta`);
        const response = await fetchGeneric(
          apiLoginUrl,
          "POST",
          {
            "Content-Type": "application/json",
          },
          JSON.stringify(form)
        );

        if (response == null) {
          throw new Error("Error al iniciar sesion");
        }

        const { token, data } = response;
        if (response.error) {
          setUserNotRegistered({ state: true, message: response.error });
        } else {
          console.log("Inicio de sesion exitoso");
          dispatchUser({
            type: "SET_USER",
            payload: {
              id: data[0].id,
              username: data[0].username,
              email: data[0].email,
              token,
            },
          });
          navigation.navigate("LoginMenu");
        }
        resetForm();
        resetErrorForm();
      } catch (error) {
        console.error("Error:", error);
        resetForm();
        resetErrorForm();
        setFormErrorServer(true);
      }
    } else {
      console.log(`Falla validacion `);
      const errors = result.error.errors;
      errors.forEach((error) => {
        handleErrorForm(error.path.join("."), error.message);
      });
    }
  };

  return (
    <View>
      <Text>Email</Text>
      <TextInput
        value={form.email}
        onChangeText={(text) => handleInputChange("email", text)}
      />
      {errorForm.email && (
        <ErrorMessage message={errorForm.email}></ErrorMessage>
      )}

      <Text>Contraseña</Text>
      <TextInput
        value={form.password}
        onChangeText={(text) => handleInputChange("password", text)}
      />
      {errorForm.password && (
        <ErrorMessage message={errorForm.password}></ErrorMessage>
      )}

      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

export default LoginForm;
