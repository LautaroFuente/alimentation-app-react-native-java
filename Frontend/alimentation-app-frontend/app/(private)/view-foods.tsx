import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../home";
import ListFoods from "../components/ListFoods";
import { useEffect } from "react";

type ViewFoodsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ViewFoods"
>;

interface ViewFoodsProps {
  navigation: ViewFoodsScreenNavigationProp;
}

const ViewFoods: React.FC<ViewFoodsProps> = ({ navigation }) => {
  // Metodo que se ejecuta solo una vez al cargar el componente para traer del backend los datos necesarios (lista de alimentos)
  useEffect(() => {
    fetchFoodList();
  }, []);

  // Metodo que hace la peticion de los datos
  const fetchFoodList = () => {};

  // Metodo para navegar a ver un elemento clickeado en particular
  const handleNavigateToOneFood = (id: number) => {
    navigation.navigate("ViewOneFood", { id });
  };

  return (
    <View>
      <ListFoods foods={[]}></ListFoods>
    </View>
  );
};

export default ViewFoods;
