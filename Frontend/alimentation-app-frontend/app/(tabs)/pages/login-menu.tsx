import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './home';
import { useUserContext } from '../hooks/useUserContext';

type LoginMenuScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LoginMenu'>;
  
interface LoginMenuProps {
    navigation: LoginMenuScreenNavigationProp;
}

const LoginMenu: React.FC<LoginMenuProps> = ({navigation}) => {

    const {stateUser, dispatchUser} = useUserContext();

    const closeSession = () => {
        dispatchUser({type:"RESET_USER"});
        navigation.navigate('Home');
    }

    return ( 
        <View>
            <Text >Bienvenido {stateUser.username}</Text>
            <Button
            title="Dieta semanal"
            onPress={() => navigation.navigate('CalendarDiet')}
            />
            <Button
            title="Ver alimentos"
            onPress={() => navigation.navigate('ViewFoods')}
            />
            <Button
            title="Configuracion"
            onPress={() => navigation.navigate('Configuration')}
            />
            <Button
            title="Cerrar sesion"
            onPress={closeSession}
            />
        </View>
     );
}

export default LoginMenu;