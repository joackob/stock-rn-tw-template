import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon, useTheme } from "@rneui/themed";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ItemInventory } from "../../item/interfaces";

type ItemCardNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "ItemScreen"
>;

const ItemCard = ({ item }: { item: ItemInventory }) => {
  const { theme } = useTheme();
  const nav = useNavigation<ItemCardNavigationProps>();
  return (
    <TouchableOpacity onPress={() => nav.navigate("ItemScreen", item)}>
      <View style={tw`mt-4 w-30`}>
        <View style={tw`bg-[${theme.colors.secondary}] rounded-xl `}>
          <View style={tw`flex flex-col justify-center items-center py-4 `}>
            <Icon name="inventory" size={32} />
            <Text style={tw`font-bold mt-2 text-[${theme.colors.black}]`}>
              {item.name}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;
