import { ActivityIndicator, ScrollView, View } from "react-native";
import React, { useState } from "react";
import { useTheme, Image, Input } from "@rneui/themed";
import tw from "twrnc";
import { InventoryList } from "./components";
import { SafeAreaView } from "react-native-safe-area-context";
import { Inventory } from "./interfaces";

const MainInventory = () => {
  const { theme } = useTheme();
  const [name, setName] = useState<string>("");
  const [inventories, setInventories] = useState<Inventory[]>([]);

  const handleEndEditing = () => {
    const inventory = {
      name: name,
      id: inventories.length >= 1 ? inventories[0].id + 1 : "1",
    };
    setInventories([inventory, ...inventories]);
    setName("");
  };

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
            onChangeText={setName}
            containerStyle={tw`bg-white pt-5 pb-0 px-10 rounded-xl`}
            value={name}
          />
          <InventoryList inventories={inventories} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainInventory;
