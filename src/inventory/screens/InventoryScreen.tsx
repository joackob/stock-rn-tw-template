import {
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { useTheme } from "@rneui/themed";
import { Image, Input } from "@rneui/themed";

const InventoryScreen = () => {
  const { theme } = useTheme();
  const [name, setName] = useState<string>("");
  return (
    <SafeAreaView style={tw`h-full`}>
      <ScrollView
        style={{
          backgroundColor: theme.colors.background,
        }}
      >
        <Image
          source={require(`../../../assets/img/control-inventario-erp-2.png`)}
          containerStyle={tw`w-full h-64 mt-4`}
          style={tw`w-full h-64 `}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={tw`mx-4`}>
          <Input
            placeholder="Buscar por nombre o descripción"
            onChangeText={setName}
            containerStyle={tw`bg-white pt-5 pb-0 px-10 rounded-xl`}
            value={name}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InventoryScreen;
