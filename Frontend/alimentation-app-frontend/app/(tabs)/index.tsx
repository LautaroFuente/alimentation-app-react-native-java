import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import CalendarDiet from "./pages/calendar-diet";
import LoginMenu from "./pages/login-menu";
import ViewFoods from "./pages/view-foods";
import ViewOneFood from "./pages/view-one-food";

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="calendar-diet" component={CalendarDiet} />
        <Stack.Screen name="login-menu" component={LoginMenu} />
        <Stack.Screen name="view-foods" component={ViewFoods} />
        <Stack.Screen name="view-one-food" component={ViewOneFood} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
