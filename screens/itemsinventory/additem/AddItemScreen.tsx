import {
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { useTheme, Image, Input, Button } from "@rneui/themed";

const AddItemScreen = () => {
  const { theme } = useTheme();
  return (
    <SafeAreaView style={tw`h-full`}>
      <View
        style={tw`h-full bg-[${theme.colors.background}] flex flex-col justify-center`}
      >
        <Image
          source={require(`./assets/control-inventario-erp.png`)}
          containerStyle={tw`w-full h-64 mt-4`}
          style={tw`w-full h-64`}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View
          style={tw`mx-4  py-5 px-10 rounded-xl bg-[${theme.colors.white}]`}
        >
          <Input placeholder="Nombre" autoFocus autoCapitalize="sentences" />
          <Input placeholder="Descripción" autoCapitalize="sentences" />
          <Input placeholder="Cantidad actual" />
          <Button>Agregar</Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddItemScreen;
