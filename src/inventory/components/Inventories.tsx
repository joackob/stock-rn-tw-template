import { View } from "react-native";
import React from "react";
import InventoryCard from "./InventoryCard";
import tw from "twrnc";

const Inventories = ({ inventories }: { inventories: string[] }) => {
  return (
    <View style={tw`flex flex-row justify-between flex-wrap`}>
      {inventories.map((name, index) => {
        return <InventoryCard key={index} name={name} />;
      })}
    </View>
  );
};

export default Inventories;
