// DrawerNavigator.js
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import MessagesScreen from './screens/MessageScreen'; // Correct path
import AddItemScreen from "./screens/AdditemScreen"; // Correct path

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Messages" component={MessagesScreen} />
      <Drawer.Screen name="AddItem" component={AddItemScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
