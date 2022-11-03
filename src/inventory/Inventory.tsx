import { ActivityIndicator, ScrollView, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useTheme, Image, Input } from "@rneui/themed";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { Inventories } from "./components";
import { SafeAreaView } from "react-native-safe-area-context";

const Inventory = () => {
  const { theme } = useTheme();
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  });

  const [input, setInput] = useState<string>("");
  const handleEndEditing = () => {
    setInventories([input, ...inventories]);
    setInput("");
  };
  const [inventories, setInventories] = useState<string[]>([]);

  return (
    <SafeAreaView style={tw`h-full`}>
      <ScrollView
        style={{
          backgroundColor: theme.colors.background,
        }}
      >
        <Image
          source={require(`../../assets/img/control-inventario-erp.png`)}
          containerStyle={tw`w-full h-64`}
          style={tw`w-full h-64`}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={tw`mx-4`}>
          <Input
            placeholder="Crear un nuevo inventario"
            onEndEditing={handleEndEditing}
            onChangeText={setInput}
            containerStyle={tw`bg-white pt-5 pb-0 px-10 rounded-xl`}
            value={input}
          />
          <Inventories inventories={inventories} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Inventory;
