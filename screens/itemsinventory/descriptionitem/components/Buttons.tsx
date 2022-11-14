import { View, Text } from "react-native";
import React from "react";
import { FAB, useTheme } from "@rneui/themed";
import tw from "twrnc";

const Buttons = () => {
  const { theme } = useTheme();
  return (
    <View style={tw`flex flex-row absolute right-4 -top-16 `}>
      <FAB
        icon={{ name: "delete", color: theme.colors.white }}
        // style={tw`ml-4 `}
      />
      <FAB
        icon={{ name: "edit", color: theme.colors.white }}
        style={tw`ml-2 `}
      />
    </View>
  );
};

export default Buttons;
