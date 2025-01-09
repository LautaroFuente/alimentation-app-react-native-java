import { View, TextInput, Button, Text } from "react-native";
import { useForm } from "../hooks/useForm";
import { RootStackParamList } from '../pages/home';
import { StackNavigationProp } from '@react-navigation/stack';
import { useState } from "react";
import { userRegisterSchema } from "../schemas/User";
import { fetchGeneric } from "../helpers/fetchGeneric";
import ErrorMessage from "./errorMessage";

type RegisterFormScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;
  
interface RegisterFormProps {
    navigation: RegisterFormScreenNavigationProp;
}

const initialForm = {
    username: "",
    email: "",
    password: ""
}

const apiRegisterUrl = "";

const RegisterForm: React.FC<RegisterFormProps> = ({navigation}) => {
    const {form,
        errorForm,
        handleInputChange,
        handleErrorForm,
        resetForm,
        resetErrorForm } = useForm(initialForm);
    
    const [formErrorServer, setFormErrorServer] = useState(false);  
    
        const handleSubmit = async () => {
            resetErrorForm();
            setFormErrorServer(false);
            const result = userRegisterSchema.safeParse(form);
            if (result.success) {
              try {
                console.log(`Validacion correcta`);
                const response = await fetchGeneric(apiRegisterUrl, "POST", {
                  "Content-Type": "application/json",
                }, JSON.stringify(form));
        
                if (response == null) {
                  throw new Error("Error al registrar");
                }

                console.log("Registro exitoso");
                navigation.navigate('Login');
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
                handleErrorForm(error.path.join('.'), error.message);
              });
            }
          };        

    return ( 
        <View>
            <Text>Nombre de usuario</Text>
            <TextInput value={form.username} onChangeText={(text) => handleInputChange("username", text)}/>
            {errorForm.username && (
            <ErrorMessage message={errorForm.username}></ErrorMessage>
            )}

            <Text>Email</Text>
            <TextInput value={form.email} onChangeText={(text) => handleInputChange("email", text)}/>
            {errorForm.email && (
            <ErrorMessage message={errorForm.email}></ErrorMessage>
            )}
            
            <Text>Contraseña</Text>
            <TextInput value={form.password} onChangeText={(text) => handleInputChange("password", text)}/>
            {errorForm.password && (
            <ErrorMessage message={errorForm.password}></ErrorMessage>
            )}

          <Button title="Enviar" onPress={handleSubmit} />

        </View>
     );
}

export default RegisterForm;