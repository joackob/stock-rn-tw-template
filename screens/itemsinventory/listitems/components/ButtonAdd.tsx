import React from "react";
import { FAB } from "@rneui/themed";
import tw from "twrnc";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigator";
import { useNavigation } from "@react-navigation/native";

type AddItemNavigatorProps = NativeStackNavigationProp<
  RootStackParamList,
  "AddItemScreen"
>;

const ButtonAdd = () => {
  const nav = useNavigation<AddItemNavigatorProps>();
  return (
    <FAB
      icon={{ name: "add", color: "white" }}
      style={tw`absolute bottom-4 right-4 `}
      onPress={() => nav.navigate("AddItemScreen")}
    />
  );
};

export default ButtonAdd;
