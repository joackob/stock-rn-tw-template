import { ActivityIndicator, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useTheme, Image } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

const Activity = () => {
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
        backgroundColor: theme.colors.background,
      }}
    >
      <Image
        source={require(`../../assets/img/control-inventario-erp-3.png`)}
        containerStyle={tw`w-full h-64`}
        style={tw`w-full h-64`}
        PlaceholderContent={<ActivityIndicator />}
      />
    </ScrollView>
  );
};

export default Activity;
