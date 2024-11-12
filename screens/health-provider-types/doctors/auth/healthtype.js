import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { height, width } from "../../../../constants/mobileDimensions";
import { Textstyles } from "../../../../constants/fontsize";

// mock data
const typeList = [
  {
    image: "../../../../assets/images/health-provider-image.png",
    name: "Doctors",
    linkTo: "doctor-signup",
  },
  {
    image: "../../../../assets/images/health-provider-image.png",
    name: "Pharmacists",
    linkTo: "",
  },
  {
    image: "../../../../assets/images/health-provider-image.png",
    name: "Optiometrist",
    linkTo: "",
  },
  {
    image: "../../../../assets/images/health-provider-image.png",
    name: "Nurse",
    linkTo: "",
  },
  {
    image: "../../../../assets/images/health-provider-image.png",
    name: "Physiotherapist",
    linkTo: "",
  },
  {
    image: "../../../../assets/images/health-provider-image.png",
    name: "Radiology",
    linkTo: "",
  },
  {
    image: "../../../../assets/images/health-provider-image.png",
    name: "Lab Tests",
    linkTo: "",
  },
];

const Provider = () => {
  const navigation = useNavigation();
  const handleContinue = (link) => {
    navigation.navigate(link);
  };
  return (
    <View
      style={{ height: height, width: width }}
      className="bg-white py-[40px]"
    >
      <StatusBar style="auto" />
      <View className="w-full h-44 mt-12 flex mb-7 justify-center items-center">
        <View className="w-[50%] h-32 flex justify-center items-center">
          <Image
            source={require("../../../../assets/images/logo-2.png")}
            resizeMode="contain"
            className="h-36 w-36"
          />
        </View>
      </View>
      <FlatList
        data={typeList}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="w-[103px] h-[115.39px] justify-center items-center"
            onPress={() => handleContinue(item.linkTo)}
          >
            <Image
              source={require("../../../../assets/images/health-provider-image.png")}
              resizeMode="contain"
              className="w-full"
            />
            <Text style={[Textstyles.text_xxmedium]}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
        numColumns={3}
        ListHeaderComponent={
          <Text className="mx-auto mb-5" style={[Textstyles.text_medium]}>
            Health Provider
          </Text>
        }
        contentContainerStyle={{ paddingBottom: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        style={{ paddingHorizontal: 10, paddingVertical: 5 }}
      />
    </View>
  );
};

export default Provider;
