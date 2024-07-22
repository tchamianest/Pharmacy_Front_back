import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomePage from "./screens/Home";
import Profile from "./screens/SingleSeller";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomePage} />
        {/* <Stack.Screen
          name="orderPreparing"
          options={{ presentation: "fullScreenModal" }}
          component={OrderPreparing}
        />
        */}
        <Stack.Screen
          name="Profile"
          options={{ presentation: "modal" }}
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
