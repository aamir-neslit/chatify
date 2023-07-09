import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigator } from "./Tab";
import { AuthStack } from "./Stack/AuthStack/AuthStack";

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {true ? (
          <RootStack.Screen
            name='AuthStack'
            component={AuthStack}
          />
        ) : (
          <RootStack.Screen
            name='TabNavigator'
            component={TabNavigator}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export { RootNavigator };
