import { createStackNavigator } from "@react-navigation/stack";
import { Profile } from "@screens";

const Stack = createStackNavigator();

const ProfileStack = () => {
  <Stack.Navigator initialRouteName='HomeScreen'>
    <Stack.Screen
      name='Profile'
      component={Profile}></Stack.Screen>
  </Stack.Navigator>;
};

export { ProfileStack };
