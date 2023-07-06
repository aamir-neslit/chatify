import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack, ProfileStack } from "navigation/Stack/ScreenStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name='HomeStack'
        component={HomeStack}
      />
      <Tab.Screen
        name='ProfileStack'
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};

export { TabNavigator };
