import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import CalendarDiet from "./pages/calendar-diet";
import LoginMenu from "./pages/login-menu";
import ViewFoods from "./pages/view-foods";
import ViewOneFood from "./pages/view-one-food";
import { UserProvider } from "./contexts/userContext";
import Configuration from "./pages/configuration";
import { RootStackParamList } from "./Routes/RootStackParamList.type";

const Stack = createStackNavigator<RootStackParamList>();

export default function HomeScreen() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="CalendarDiet" component={CalendarDiet} />
          <Stack.Screen name="LoginMenu" component={LoginMenu} />
          <Stack.Screen name="ViewFoods" component={ViewFoods} />
          <Stack.Screen
            name="ViewOneFood"
            component={ViewOneFood}
            initialParams={{ id: 0 }}
          />
          <Stack.Screen name="Configuration" component={Configuration} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
