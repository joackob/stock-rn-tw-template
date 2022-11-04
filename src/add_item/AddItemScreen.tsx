import {
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { useTheme, Image, Input } from "@rneui/themed";

const AddItemScreen = () => {
  const { theme } = useTheme();
  return (
    <SafeAreaView style={tw`h-full`}>
      <ScrollView
        style={{
          backgroundColor: theme.colors.background,
        }}
      >
        <Image
          source={require(`../../assets/img/control-inventario-erp.png`)}
          containerStyle={tw`w-full h-64 mt-4`}
          style={tw`w-full h-64`}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={tw`mx-4`}>
          <Input
            placeholder="Nombre"
            containerStyle={tw`bg-white pt-5 pb-0 px-10 rounded-xl`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddItemScreen;
