import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, SplashScreen } from "@screens";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Splash'
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='Splash'
        component={SplashScreen}
      />
      <Stack.Screen
        name='Login'
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

export { AuthStack };
