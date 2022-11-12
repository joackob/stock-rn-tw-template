import { ActivityIndicator, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme, Image, Input } from "@rneui/themed";
import tw from "twrnc";
import { ItemList, ButtonAdd } from "./components";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusInventory, useInventoryContext } from "../store/context";

const InventoryScreen = () => {
  const { theme } = useTheme();
  const { values, status, setItems } = useInventoryContext();
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const wrapAsync = async () => {
      setItems();
    };
    wrapAsync();
  }, []);

  return (
    <SafeAreaView style={tw`h-full`}>
      <ScrollView
        style={{
          backgroundColor: theme.colors.background,
        }}
      >
        <Image
          source={require(`../../assets/img/control-inventario-erp-2.png`)}
          containerStyle={tw`w-full h-64`}
          style={tw`w-full h-64`}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={tw`mx-4`}>
          <Input
            placeholder="Buscar por nombre o descripción"
            onChangeText={setSearch}
            containerStyle={tw`bg-white pt-5 pb-0 px-10 rounded-xl`}
          />
        </View>
        {status === StatusInventory.online && (
          <ItemList
            items={values.filter((item) => item.description.includes(search))}
          />
        )}
      </ScrollView>
      <ButtonAdd />
    </SafeAreaView>
  );
};

export default InventoryScreen;
