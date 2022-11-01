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
      case "Home":
        return <Icon name="home" size={size} color={color} />;
      case "Actividad":
        return <Icon name="book" size={size} color={color} />;
      case "Inventario":
        return <Icon name="collections" size={size} color={color} />;
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
            tabBarActiveTintColor: theme.colors.white,
            tabBarInactiveTintColor: theme.colors.secondary,
            tabBarStyle: {
              backgroundColor: theme.colors.background,
            },
          };
        }}
      >
        <Tab.Screen
          name="Inventario"
          component={Inventory}
          options={{
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
            headerTintColor: theme.colors.white,
          }}
        />
        <Tab.Screen
          name="Actividad"
          component={Activity}
          options={{
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
            headerTintColor: theme.colors.white,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabBar;
