import { ActivityIndicator, ScrollView } from "react-native";
import React from "react";
import { useTheme, Image } from "@rneui/themed";
import tw from "twrnc";

const ActivityScreen = () => {
  const { theme } = useTheme();
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

export default ActivityScreen;
