import { View, Text } from "react-native";
import React from "react";
import { FAB, useTheme } from "@rneui/themed";
import tw from "twrnc";
import { ItemInventory } from "../../../../src/iteminventory/interface";
import { useAppDispatch } from "../../../../src/store";
import { removeOne } from "../../../../src/iteminventory/thunks";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigator";
import { useNavigation } from "@react-navigation/native";

type EditItemNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "ListItemsScreen"
>;

const Buttons = (item: ItemInventory) => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const nav = useNavigation<EditItemNavigationProps>();

  const handleDelete = () => {
    dispatch(removeOne(item));
    nav.navigate("ListItemsScreen");
  };

  return (
    <View style={tw`flex flex-row absolute right-4 -top-16 `}>
      <FAB
        icon={{ name: "delete", color: theme.colors.white }}
        onPress={handleDelete}
      />
      <FAB
        icon={{ name: "edit", color: theme.colors.white }}
        style={tw`ml-2 `}
      />
    </View>
  );
};

export default Buttons;
