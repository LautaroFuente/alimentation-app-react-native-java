import { View, Text, Button} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Definir el tipo de las rutas disponibles en tu stack
export type RootStackParamList = {
    Home: undefined;  // "Home" no tiene parámetros
    Register: undefined;  
    Login: undefined;  
    CalendarDiet: undefined;
    LoginMenu: undefined;
    ViewFoods: undefined;
    ViewOneFood: { id: number };
    Configuration: undefined;
  };
  
  // Tipar las props de navegación usando el tipo de tu stack
  type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
  
  interface HomeProps {
    navigation: HomeScreenNavigationProp;
  }

const Home: React.FC<HomeProps> = ({ navigation }) => {
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