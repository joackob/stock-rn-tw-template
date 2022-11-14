import { ScrollView, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { ItemInventory } from "../../../../src/iteminventory/interface";
import ItemCard from "./ItemCard";

const ItemsList = ({ items }: { items: ItemInventory[] }) => {
  return (
    <View style={[tw`flex flex-col mb-4`]}>
      {items.map((item) => {
        return <ItemCard key={item.id} item={item} />;
      })}
    </View>
  );
};

export default ItemsList;
