import { View } from "react-native";
import React from "react";
import tw from "twrnc";
import { ItemInventory } from "../../item/interfaces";
import ItemCard from "./ItemCard";

const ItemsList = ({ items }: { items: ItemInventory[] }) => {
  return (
    <View
      style={[
        tw`flex flex-row flex-wrap justify-${
          items.length > 2 ? "between" : "around"
        }`,
      ]}
    >
      {items.map((item) => {
        return <ItemCard key={item.id} item={item} />;
      })}
    </View>
  );
};

export default ItemsList;
