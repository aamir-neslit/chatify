import { createStackNavigator } from "@react-navigation/stack";
import { Profile } from "@screens";

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='Profile'
        component={Profile}></Stack.Screen>
    </Stack.Navigator>
  );
};

export { ProfileStack };
