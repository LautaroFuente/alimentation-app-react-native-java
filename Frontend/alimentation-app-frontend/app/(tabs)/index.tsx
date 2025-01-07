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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Calendar-diet" component={CalendarDiet} />
        <Stack.Screen name="Login-menu" component={LoginMenu} />
        <Stack.Screen name="View-foods" component={ViewFoods} />
        <Stack.Screen name="View-one-food" component={ViewOneFood} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
