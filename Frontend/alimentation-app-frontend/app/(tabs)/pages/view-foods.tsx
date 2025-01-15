import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './home';
import ListFoods from '../components/ListFoods';

type ViewFoodsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ViewFoods'>;
  
interface ViewFoodsProps {
    navigation: ViewFoodsScreenNavigationProp;
}

const ViewFoods: React.FC<ViewFoodsProps> = ({navigation}) => {
    return ( 
        <View>
            <ListFoods></ListFoods>
        </View>
     );
}

export default ViewFoods;