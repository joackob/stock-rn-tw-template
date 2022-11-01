import { ActivityIndicator, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useTheme, Image, Input } from "@rneui/themed";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

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
    console.log(input);
    setInput("");
  };

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
        PlaceholderContent={<ActivityIndicator />}
      />
      <Input
        placeholder="Crear un nuevo inventario"
        onEndEditing={handleEndEditing}
        onChangeText={setInput}
        containerStyle={tw`bg-white pt-5 pb-0 px-10`}
        value={input}
      />
    </ScrollView>
  );
};

export default Inventory;
