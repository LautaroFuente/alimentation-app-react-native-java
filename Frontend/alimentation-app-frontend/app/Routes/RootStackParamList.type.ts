// Definir el tipo de las rutas disponibles en tu stack
export type RootStackParamList = {
  Home: undefined; // "Home" no tiene parámetros
  Register: undefined;
  Login: undefined;
  CalendarDiet: undefined;
  LoginMenu: undefined;
  ViewFoods: undefined;
  ViewOneFood: { id: number };
  Configuration: undefined;
};
