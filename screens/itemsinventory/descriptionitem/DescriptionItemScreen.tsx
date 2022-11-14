import { SafeAreaView, ActivityIndicator, View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { Badge, Divider, FAB, Icon, useTheme } from "@rneui/themed";
import { Image } from "@rneui/themed";
import { RootStackParamList } from "../../navigator";
import { RouteProp, useRoute } from "@react-navigation/native";
import Buttons from "./components/Buttons";

type DescriptionItemScreenRouteProps = RouteProp<
  RootStackParamList,
  "DescriptionItemScreen"
>;

const ItemScreen = () => {
  const { theme } = useTheme();
  const {
    params: { name, amount, description, id },
  } = useRoute<DescriptionItemScreenRouteProps>();
  return (
    <SafeAreaView
      style={[
        tw`h-full flex flex-col justify-between bg-[${theme.colors.background}]`,
      ]}
    >
      <Image
        source={require(`./assets/control-inventario-erp-3.png`)}
        containerStyle={tw`w-full h-64 mt-4`}
        style={tw`w-full h-64 `}
        PlaceholderContent={<ActivityIndicator />}
      />

      <View style={tw`bg-[${theme.colors.white}] rounded-tl-xl rounded-tr-xl`}>
        <Buttons
          name={name}
          description={description}
          amount={amount}
          id={id}
        />
        <View style={tw`p-4`}>
          <View style={tw`flex flex-row justify-between`}>
            <View>
              <Text
                style={tw`font-bold  text-[${theme.colors.black}] text-2xl`}
              >
                {name}
              </Text>
              <Text style={tw`font-bold  text-[${theme.colors.grey0}] text-sm`}>
                ID: {id}
              </Text>
            </View>
            <View>
              <Icon name="inventory" size={64} />
              <Badge
                status="warning"
                value={amount}
                containerStyle={tw`absolute left-12`}
              />
            </View>
          </View>
          <Divider style={tw`my-2`} />
          <Text style={tw`font-bold text-[${theme.colors.black}]  `}>
            Descripción: {description}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ItemScreen;
