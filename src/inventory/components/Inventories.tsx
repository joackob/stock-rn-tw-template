import { View } from "react-native";
import React from "react";
import InventoryCard from "./InventoryCard";
import tw from "twrnc";

const Inventories = ({ inventories }: { inventories: string[] }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent:
          inventories.length > 2 ? "space-between" : "space-around",
      }}
    >
      {inventories.map((name, index) => {
        return <InventoryCard key={index} name={name} />;
      })}
    </View>
  );
};

export default Inventories;
