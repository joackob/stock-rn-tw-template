import { ActivityIndicator, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme, Text, Image, Input, Card } from "@rneui/themed";
import tw from "twrnc";
import { ItemList, ButtonAdd } from "./components";
import { SafeAreaView } from "react-native-safe-area-context";
import { ItemInventory } from "../item/interfaces";
import { Skeleton } from "@rneui/base";
import axios from "axios";

enum StateInventory {
  online,
  offline,
  error,
  loading,
}
const InventoryScreen = () => {
  const { theme } = useTheme();
  const [items, setItems] = useState<ItemInventory[]>([]);
  const [state, setState] = useState<StateInventory>(StateInventory.loading);

  const handleSearch = (search: string) => {
    setItems(items.filter((i) => i.name.includes(search)));
  };

  useEffect(() => {
    const get = async () => {
      const res = axios.get("https://rickandmortyapi.com/api/character/128");
      res
        .then((data) => {
          console.log(data.status);
          setState(StateInventory.online);
        })
        .catch((reason) => {
          console.log(reason);
          setState(StateInventory.error);
        });
    };
    get();
  }, []);

  const Alert = () => (
    <View style={tw`h-8 bg-[${theme.colors.warning}]`}>
      <Text style={tw`text-white font-bold`}>
        Ups, algo on ocurrio como debia
      </Text>
    </View>
  );

  const Msg = () => (
    <View style={tw`h-8 bg-[${theme.colors.success}]`}>
      <Text style={tw`text-white font-bold`}>Genial!!</Text>
    </View>
  );

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
      {state === StateInventory.loading && <Skeleton style={tw`h-8`} />}
      {state === StateInventory.offline && <Alert />}
      {state === StateInventory.online && <Msg />}
      <ButtonAdd />
    </SafeAreaView>
  );
};

export default InventoryScreen;
