import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "@screens";

const Stack = createStackNavigator();

const HomeStack = () => {
  <Stack.Navigator initialRouteName='HomeScreen'>
    <Stack.Screen
      name='HomeScreen'
      component={HomeScreen}
    />
  </Stack.Navigator>;
};

export { HomeStack };
