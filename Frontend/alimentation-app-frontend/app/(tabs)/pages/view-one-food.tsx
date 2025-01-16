import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './home';
import CardFood from '../components/CardFood';

type ViewOneFoodScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ViewOneFood'>;
  
interface ViewOneFoodProps {
    navigation: ViewOneFoodScreenNavigationProp;
}

const ViewOneFood: React.FC<ViewOneFoodProps> = ({navigation}) => {
    return ( 
        <View>
            <CardFood food={}></CardFood>
        </View>
     );
}

export default ViewOneFood;