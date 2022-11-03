import { View } from "react-native";
import React from "react";
import InventoryCard from "./InventoryCard";
import tw from "twrnc";
import { Inventory } from "../interfaces";

const InventoryList = ({ inventories }: { inventories: Inventory[] }) => {
  return (
    <View
      style={[
        tw`flex flex-row flex-wrap justify-${
          inventories.length > 2 ? "between" : "around"
        }`,
      ]}
    >
      {inventories.map(({ name, id }) => {
        return <InventoryCard key={id} id={id} name={name} />;
      })}
    </View>
  );
};

export default InventoryList;
