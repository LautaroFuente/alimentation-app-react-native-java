import { Text, View, TextInput, Button } from "react-native";
import { useForm } from "../hooks/useForm";
import ErrorMessage from "./errorMessage";
import { useState } from "react";
import { useNavigation } from "expo-router";
import { fetchGeneric } from "../helpers/fetchGeneric.js";
import { userSchema } from "../schemas/User";
import { useUserContext } from "@/hooks/useUserContext";
import { RootStackParamList } from '../pages/home';
import { StackNavigationProp } from '@react-navigation/stack';

type LoginFormScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
  
interface LoginFormProps {
    navigation: LoginFormScreenNavigationProp;
}

const initialForm = {
    email: "",
    password: ""
}

const apiLoginUrl = "";

const LoginForm: React.FC<LoginFormProps> = ({navigation}) => {
    const {form,
        errorForm,
        handleInputChange,
        handleErrorForm,
        resetForm,
        resetErrorForm } = useForm(initialForm);
    
    const [formErrorServer, setFormErrorServer] = useState(false);  
    const [userNotRegistered, setUserNotRegistered] = useState({state:false, message:""});  

    const {stateUser, dispatchUser} = useUserContext();

    const navigate = useNavigation();
    
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            resetErrorForm();
            setFormErrorServer(false);
            setUserNotRegistered({
              state: false,
              message: "",
            });
            const result = userSchema.safeParse(form);
            if (result.success) {
              try {
                console.log(`Validacion correcta`);
                const response = await fetchGeneric(apiLoginUrl, "POST", {
                  "Content-Type": "application/json",
                }, JSON.stringify(form));
        
                if (response == null) {
                  throw new Error("Error al iniciar sesion");
                }
        
                const { token, data } = response;
                if (response.error) {
                  setUserNotRegistered({ state: true, message: response.error });
                } else {
                  console.log("Inicio de sesion exitoso");
                  dispatchUser({
                    type:"SET_CLIENT",
                    payload:{
                      client_id: data[0].client_id,
                      username: data[0].username,
                      email: data[0].email,
                      token,
                    }
                  })
                  navigation.navigate('LoginMenu');
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
                handleErrorForm(error.path, error.message);
              });
            }
          };        

    return ( 
        <View>
            <Text>Email</Text>
            <TextInput value={form.email} onChangeText={handleInputChange}/>
            {errorForm.email && (
            <ErrorMessage message={errorForm.email}></ErrorMessage>
            )}
            
            <Text>Contraseña</Text>
            <TextInput value={form.password} onChangeText={handleInputChange}/>
            {errorForm.password && (
            <ErrorMessage message={errorForm.password}></ErrorMessage>
            )}

          <Button title="Enviar" onPress={() => {}} />

        </View>
     );
}

export default LoginForm;