import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "@screens";
import { Text, View } from "react-native";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export { HomeStack };
