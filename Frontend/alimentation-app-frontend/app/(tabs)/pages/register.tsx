import { View, Button } from 'react-native';
import RegisterForm from '../components/registerForm';
import { RootStackParamList } from './home';
import { StackNavigationProp } from '@react-navigation/stack';

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;
  
interface RegisterProps {
    navigation: RegisterScreenNavigationProp;
}

const Register: React.FC<RegisterProps> = ({navigation}) => {
    return (
      <View>
        <RegisterForm navigation={navigation} />
        <Button
          title="Volver"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  };

export default Register;