import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './home';
import CardFood from '../components/CardFood';
import { RouteProp } from '@react-navigation/native';
import { useEffect } from 'react';

type ViewOneFoodScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ViewOneFood'>;
type ViewOneFoodRouteProp = RouteProp<RootStackParamList, 'ViewOneFood'>;

interface ViewOneFoodProps {
  navigation: ViewOneFoodScreenNavigationProp;
  route: ViewOneFoodRouteProp;
}

const ViewOneFood: React.FC<ViewOneFoodProps> = ({navigation, route}) => {

    const { id } = route.params;

    // Metodo que se ejecuta solo una vez al cargar el componente para traer del backend los datos necesarios (alimento con el id recibido)
    useEffect(() => {
        fetchOneFood();
    }, [])

    // Metodo que hace la peticion para obtener el alimento con el id recibido
    const fetchOneFood = () => {

    }

    return ( 
        <View>
            <CardFood food={}></CardFood>
        </View>
     );
}

export default ViewOneFood;