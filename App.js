import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Picker } from '@react-native-picker/picker';
import UbshoppeScreen from "./screens/ubshoppe";
import LoginRegister from "./screens/LoginRegister";
import HomeScreen from "./screens/HomeScreen";
import MessagesScreen from './screens/MessageScreen'; // Correct path based on your file structure
import AddItemScreen from "./screens/AdditemScreen";

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Adjust loading time as needed
    return () => clearTimeout(timer);
  }, []);

  // Log rendering starts
  console.log("App rendering starts");

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoading && (
          <Stack.Screen name="Ubshoppe" component={UbshoppeScreen} />
        )}
        {!isLoading && (
          <>
            <Stack.Screen name="LoginRegister" component={LoginRegister} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Message" component={MessagesScreen} />
            <Stack.Screen name="Additem" component={AddItemScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
