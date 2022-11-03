import { View, Text } from "react-native";
import React from "react";
import { Icon, useTheme } from "@rneui/themed";
import tw from "twrnc";

const InventoryCard = ({ name }: { name: string }) => {
  const { theme } = useTheme();
  return (
    <View style={tw`mt-4 w-30`}>
      <View style={tw`bg-[${theme.colors.white}] rounded-xl `}>
        <View style={tw`flex flex-col justify-center items-center py-4 `}>
          <Icon name="inventory" size={32} />
          <Text style={tw`font-bold`}>{name}</Text>
        </View>
      </View>
    </View>
  );
};

export default InventoryCard;
