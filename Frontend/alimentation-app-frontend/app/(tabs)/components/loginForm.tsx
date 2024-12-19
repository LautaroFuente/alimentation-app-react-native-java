import { Text, View, TextInput } from "react-native";
import { useForm } from "../hooks/useForm";
import ErrorMessage from "./errorMessage";

const initialForm = {
    email: "",
    password: ""
}

function LoginForm() {
    const {form,
        errorForm,
        handleInputChange,
        handleErrorForm,
        resetForm,
        resetErrorForm } = useForm(initialForm);

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
        </View>
     );
}

export default LoginForm;