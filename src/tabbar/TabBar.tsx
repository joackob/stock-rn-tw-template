import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Inventory from "../inventory/Inventory";
import Activity from "../activity/Activity";
import { Icon } from "@rneui/themed";
import { useTheme } from "@rneui/themed";

const TabBarIcon =
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
const TabBar = () => {
  const Tab = createBottomTabNavigator();
  const { theme } = useTheme();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => {
          return {
            tabBarIcon: TabBarIcon(route.name),
            tabBarActiveTintColor: theme.colors.black,
            tabBarInactiveTintColor: theme.colors.secondary,
            tabBarStyle: {
              backgroundColor: theme.colors.white,
            },
          };
        }}
      >
        <Tab.Screen name="Inventario" component={Inventory} />
        <Tab.Screen name="Actividad" component={Activity} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabBar;
