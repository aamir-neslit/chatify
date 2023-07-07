import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { HomeStack, ProfileStack } from "@screenStack";
import { HomeStack } from "../Stack/ScreenStack/HomeStack";
import { ProfileStack } from "../Stack/ScreenStack/ProfileStack";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='Home'
        component={HomeStack}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};

export { TabNavigator };
