import { View, Text, Button} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './home';

type ConfigurationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Configuration'>;
  
interface ConfigurationProps {
    navigation: ConfigurationScreenNavigationProp;
}

const Configuration: React.FC<ConfigurationProps> = ({navigation}) => {
    return ( 
        <View >
            <Text >Configuracion</Text>
            <Button
            title="Volver"
            onPress={() => navigation.navigate('Home')}
            />
        </View>

     );
}

export default Configuration;