import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UbshoppeScreen from "./screens/ubshoppe";
import LoginRegister from "./screens/LoginRegister";
import HomeScreen from "./screens/HomeScreen";


const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect (() => {
    const timer = setTimeout (() => {
      setIsLoading(false);
    }, 5000); //
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoading ? (
          <Stack.Screen name="ubshoppe" component={UbshoppeScreen} />
        ) : (
          <Stack.Screen name="LoginRegister" component={LoginRegister} />
        )}
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
  console.log("App rendering starts");
}
