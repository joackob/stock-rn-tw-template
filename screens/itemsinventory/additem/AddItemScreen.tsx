import { View, SafeAreaView, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { useTheme, Image, Button, Input, FAB } from "@rneui/themed";
import { ItemInventoryProps } from "../../../src/iteminventory/interface";
import { useAppDispatch } from "../../../src/store";
import { addOne } from "../../../src/iteminventory/thunks";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigator";

type AddItemNavigatorProps = NativeStackNavigationProp<
  RootStackParamList,
  "ListItemsScreen"
>;
const AddItemScreen = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const nav = useNavigation<AddItemNavigatorProps>();
  const [data, setData] = useState<ItemInventoryProps>({
    name: "",
    description: "",
    amount: 0,
  });

  const handleTextChange = (field: string) => (value: string) => {
    setData({
      ...data,
      [field]: value,
    });
  };

  const handleAmountChange = (value: string) => {
    const amount = Number(value);
    setData({
      ...data,
      amount: isNaN(amount) ? 0 : amount,
    });
  };

  const handlePress = () => {
    dispatch(addOne(data));
    nav.navigate("ListItemsScreen");
  };

  return (
    <SafeAreaView style={tw`h-full`}>
      <View
        style={tw`h-full bg-[${theme.colors.background}] flex flex-col justify-between`}
      >
        <Image
          source={require(`./assets/control-inventario-erp.png`)}
          containerStyle={tw`w-full h-64 mt-4`}
          style={tw`w-full h-64`}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View
          style={tw`  py-5 px-10 rounded-tl-xl rounded-tr-xl bg-[${theme.colors.white}]`}
        >
          <Input
            onChangeText={handleTextChange("name")}
            placeholder="Nombre"
            autoCapitalize="sentences"
            autoFocus
            blurOnSubmit={false}
          />
          <Input
            onChangeText={handleTextChange("description")}
            placeholder="Descripción"
            autoCapitalize="sentences"
            blurOnSubmit={false}
          />
          <Input
            onChangeText={handleAmountChange}
            placeholder="Cantidad actual"
            keyboardType="numeric"
            blurOnSubmit={false}
          />
          <FAB icon={{ name: "add", color: "white" }} onPress={handlePress} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddItemScreen;
