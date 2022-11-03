import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InventoryScreen from "../inventory/InventoryScreen";
import ActivityScreen from "../activity/ActivityScreen";
import { Icon } from "@rneui/themed";
import { useTheme } from "@rneui/themed";

const navBarIcon =
  (routeName: string) =>
  ({ color, size }: { color: string; size: number }) => {
    switch (routeName) {
      case "Actividad":
        return <Icon name="book" size={size} color={color} />;
      case "Inventario":
        return <Icon name="inventory" size={size} color={color} />;
      default:
        break;
    }
  };

const Nav = createBottomTabNavigator();

const NavBarParamList = {
  Inventario: undefined,
  Actividad: undefined,
};

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
        };
      }}
    >
      <Nav.Screen name="Inventario" component={InventoryScreen} />
      <Nav.Screen name="Actividad" component={ActivityScreen} />
    </Nav.Navigator>
  );
};

export default NavBar;
