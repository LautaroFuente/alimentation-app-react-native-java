import { View, Text, Button} from 'react-native';

function Home({ navigation }) {
    return ( 
        <View >
            <Text >Bienvenido a la App</Text>
            <Button
            title="Registrate"
            onPress={() => navigation.navigate('Register')}
            />
            <Button
            title="Inicia Sesión"
            onPress={() => navigation.navigate('Login')}
            />
        </View>

     );
}

export default Home;