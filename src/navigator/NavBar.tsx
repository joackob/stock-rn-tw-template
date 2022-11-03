import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainInventory from "../inventory/MainInventory";
import MainActivity from "../activity/MainActivity";
import { Icon } from "@rneui/themed";
import { useTheme } from "@rneui/themed";
import tw from "twrnc";
import { TabStackParamList } from "./interfaces";

const navBarIcon =
  (routeName: string) =>
  ({ color, size }: { color: string; size: number }) => {
    switch (routeName) {
      case "MainActivity":
        return <Icon name="book" size={size} color={color} />;
      case "MainInventory":
        return <Icon name="inventory" size={size} color={color} />;
      default:
        break;
    }
  };

const Nav = createBottomTabNavigator<TabStackParamList>();

const NavBar = () => {
  const { theme } = useTheme();
  return (
    <Nav.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarIcon: navBarIcon(route.name),
          tabBarActiveTintColor: theme.colors.black,
          tabBarInactiveTintColor: theme.colors.grey0,
          tabBarStyle: {
            backgroundColor: theme.colors.white,
          },
          headerShown: false,
          tabBarLabelStyle: [tw`font-bold`, { color: theme.colors.black }],
        };
      }}
    >
      <Nav.Screen
        name="MainInventory"
        component={MainInventory}
        options={{
          title: "Menu",
        }}
      />
      <Nav.Screen
        name="MainActivity"
        component={MainActivity}
        options={{
          title: "Actividad",
        }}
      />
    </Nav.Navigator>
  );
};

export default NavBar;
