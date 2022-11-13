import { SafeAreaView, ScrollView, ActivityIndicator } from "react-native";
import React from "react";
import tw from "twrnc";
import { useTheme } from "@rneui/themed";
import { Image } from "@rneui/themed";

const ItemScreen = () => {
  const { theme } = useTheme();
  return (
    <SafeAreaView style={tw`h-full`}>
      <ScrollView
        style={{
          backgroundColor: theme.colors.background,
        }}
      >
        <Image
          source={require(`./assets/control-inventario-erp-3.png`)}
          containerStyle={tw`w-full h-64 mt-4`}
          style={tw`w-full h-64 `}
          PlaceholderContent={<ActivityIndicator />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen;
