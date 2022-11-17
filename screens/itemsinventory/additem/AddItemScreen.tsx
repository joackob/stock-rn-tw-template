import { View, SafeAreaView, ActivityIndicator, TextInput } from "react-native";
import React, { createRef, RefObject, useState } from "react";
import tw from "twrnc";
import { useTheme, Image, Input, FAB } from "@rneui/themed";
import { ItemInventoryProps } from "../../../src/iteminventory/interface";
import { useAppDispatch } from "../../../src/store";
import { addOne } from "../../../src/iteminventory/slice/index";
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

  const descriptionRef = createRef<TextInput>();
  const amountRef = createRef<TextInput>();

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
            onSubmitEditing={() => descriptionRef.current?.focus()}
          />
          <Input
            onChangeText={handleTextChange("description")}
            placeholder="Descripción"
            autoCapitalize="sentences"
            blurOnSubmit={false}
            ref={descriptionRef as any}
            onSubmitEditing={() => amountRef.current?.focus()}
          />
          <Input
            onChangeText={handleAmountChange}
            placeholder="Cantidad actual"
            keyboardType="numeric"
            blurOnSubmit={false}
            ref={amountRef as any}
          />
          <FAB icon={{ name: "add", color: "white" }} onPress={handlePress} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddItemScreen;
