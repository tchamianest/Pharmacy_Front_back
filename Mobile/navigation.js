import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import CartScreen from "./screens/CartScreen";
import OrderPreparing from "./screens/OrderPreparing";
import DeliveryScreen from "./screens/DeliveryScreen";
import HomePage from "./screens/Home";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Restaurent" component={RestaurantScreen} />
        <Stack.Screen name="Delivery" component={DeliveryScreen} />
        <Stack.Screen
          name="orderPreparing"
          options={{ presentation: "fullScreenModal" }}
          component={OrderPreparing}
        />
        <Stack.Screen
          name="Cart"
          options={{ presentation: "modal" }}
          component={CartScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
