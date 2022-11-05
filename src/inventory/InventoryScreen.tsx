import { ActivityIndicator, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme, Text, Image, Input, Card } from "@rneui/themed";
import tw from "twrnc";
import { ItemList, ButtonAdd } from "./components";
import { SafeAreaView } from "react-native-safe-area-context";
import { ItemInventory } from "../item/interfaces";
import { Skeleton } from "@rneui/base";
import axios from "axios";
import { useInventoryContext } from "../store/context";

enum StateInventory {
  online,
  offline,
  error,
  loading,
}
const InventoryScreen = () => {
  const { theme } = useTheme();
  const { values } = useInventoryContext();
  const [items, setItems] = useState(values);

  const handleSearch = (search: string) => {
    setItems(items.filter((i) => i.name.includes(search)));
  };

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
            placeholder="Buscar por nombre, descripción o categoria"
            onChangeText={handleSearch}
            containerStyle={tw`bg-white pt-5 pb-0 px-10 rounded-xl`}
          />
          <ItemList items={items} />
        </View>
      </ScrollView>
      <ItemList items={items} />
      <ButtonAdd />
    </SafeAreaView>
  );
};

export default InventoryScreen;
