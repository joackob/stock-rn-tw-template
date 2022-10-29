import { Text, View, Image, ImageBackground } from "react-native";
import tw from "twrnc";
import Icon from "react-native-vector-icons/MaterialIcons";
import Column from "./components/Column";

export default function App() {
  return (
    <View style={tw`bg-violet-800 h-full w-full `}>
      <Column className="h-full w-full justify-center">
        <View style={tw` w-5/6 h-2/6 border-2 border-white rounded-lg p-4 `}>
          <Column className=" h-full justify-around">
            <Image
              source={require(`./assets/jacaranda.jpg`)}
              style={tw`rounded-full w-16 h-16`}
            />
            {/* Siempre parece imposible... hasta que se hace - Nelson Mandela */}
            <Column>
              <Text style={tw`text-xl font-bold text-white text-center`}>
                "Siempre parece imposible... hasta que se hace"
              </Text>
              <Text style={tw`text-xl font-light text-white text-center`}>
                Nelson Mandela
              </Text>
            </Column>
            <Icon name="book" style={tw`text-white text-4xl font-bold`} />
          </Column>
        </View>
      </Column>
    </View>
  );
}
