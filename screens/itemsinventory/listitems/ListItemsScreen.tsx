import { ActivityIndicator, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme, Image, Input } from "@rneui/themed";
import tw from "twrnc";
import { ItemList, ButtonAdd } from "./components";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch, useAppSelector } from "../../../src/store";
import { setup } from "../../../src/iteminventory/thunks";

const ListItemsScreen = () => {
  const { theme } = useTheme();
  const [search, setSearch] = useState<string>("");
  const { values: items } = useAppSelector((state) => state.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setup());
  }, []);

  return (
    <SafeAreaView style={tw`h-full`}>
      <ScrollView style={tw`bg-[${theme.colors.background}] h-full`}>
        <Image
          source={require(`./assets/control-inventario-erp-2.png`)}
          containerStyle={tw`w-full h-64`}
          style={tw`w-full h-64`}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={tw`mx-4`}>
          <Input
            placeholder="Buscar por nombre o descripción"
            onChangeText={setSearch}
            containerStyle={tw`bg-[${theme.colors.white}]  pt-5 pb-0 px-10 rounded-xl`}
          />
          <ItemList
            items={items.filter((item) => item.description.includes(search))}
          />
        </View>
      </ScrollView>
      <ButtonAdd />
    </SafeAreaView>
  );
};

export default ListItemsScreen;
