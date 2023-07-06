import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigator } from "./Tab";

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {true && (
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
