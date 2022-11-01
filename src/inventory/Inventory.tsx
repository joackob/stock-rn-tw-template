import { ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useTheme } from "@rneui/themed";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { Image } from "@rneui/themed";

const Inventory = () => {
  const { theme } = useTheme();
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  });
  return (
    <ScrollView
      style={{
        backgroundColor: theme.colors.primary,
      }}
    >
      <Image
        source={require(`../../assets/img/control-inventario-erp.png`)}
        containerStyle={tw`w-full h-64`}
        style={tw`w-full h-64`}
      />
    </ScrollView>
  );
};

export default Inventory;
