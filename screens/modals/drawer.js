import { useNavigation } from "@react-navigation/native";
import {
  greycolortwo,
  primarycolor,
  primarycolortwo,
  whitecolor,
} from "../../constants/color";
import { Image, Text, View } from "react-native";
import { Textstyles } from "../../constants/fontsize";
import { CustomButton } from "../mycomponents/mycomponent";
import { Avatar } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

export const Drawer = ({ navigateTo, buttonText, text, title }) => {

  const navigation = useNavigation();
  const handlePress = () => {
    console.log("to " + navigateTo);
    // navigation.navigate(navigateTo);
  };
  return (
    <>
      <View className="w-screen h-screen">
        <View
          style={{ backgroundColor: whitecolor }}
          className="absolute top-[14.5vh] w-full px-6 py-0 rounded-t-[24px] h-1/2 shadow-lg"
        >
          <View className="h-2" />
          <View
            style={{ backgroundColor: greycolortwo }}
            className="h-1 w-[67px] rounded-[11px] mx-auto"
          />
          <View className="h-10" />
          <Image
            source={require("../../assets/images/success-svg.png")}
            resizeMode="contain"
            className="w-20 h-20 mx-auto"
          />
          <View className="h-10" />
          <View className="items-center">
            <Text style={[Textstyles.text_medium, { color: primarycolortwo }]}>
              {title}
            </Text>
            <View className="h-3" />
            <Text
              style={[Textstyles.text_xsmall, { color: primarycolortwo }]}
              className="text-center"
            >
              {text}
            </Text>
          </View>
          <View className="h-10" />
          <CustomButton
            backgroundColor={primarycolor}
            Textname={buttonText}
            TextColor={whitecolor}
            onPress={handlePress}
          />
          <View className="h-11" />
          <View className="w-screen absolute bottom-0">
            <View className="w-[134px] h-[5px] rounded-[100px] bg-[#101010] mx-auto" />
          </View>
        </View>
      </View>
    </>
  );
};

export const MapDrawer = ({ navigateTo, buttonText, text, title }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    console.log("to " + navigateTo);
    // navigation.navigate(navigateTo);
  };
  return (
    <>
      <View className="w-screen h-screen">
        <View
          style={{ backgroundColor: whitecolor }}
          className="absolute top-[14.5vh] w-full px-6 py-0 rounded-t-[24px] h-1/2 shadow-lg"
        >
          <View className="h-2" />
          <View
            style={{ backgroundColor: greycolortwo }}
            className="h-1 w-[67px] rounded-[11px] mx-auto"
          />
          <View className="h-10" />
          <Text style={[Textstyles.text_xmedium]}>Your Package on The Way</Text>
          <Text style={[Textstyles.text_xsma]} className=" font-medium">
            Arriving at pick up point in 2 mins
          </Text>
          <View className="h-10" />

          <View className=" bg-white flex-1 -mt-4">
            {/* User Info Section */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Avatar.Image
                size={50}
                source={{ uri: "https://placekitten.com/200/200" }}
                className=" mr-4"
              />
              {/* User Name and Rating */}
              <View className=" flex-1">
                <Text>John Daniel</Text>
                <View className=" flex-row items-center">
                  <MaterialIcons name="star" size={16} color="gold" />
                  <View>
                    <Text className=" ml-1">4.9</Text>
                  </View>

    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate(navigateTo);
    }
    return (
        <>
            <View className="w-screen h-screen">
                <View style={{ backgroundColor: whitecolor }} className="absolute top-[14.5vh] w-full px-6 py-0 rounded-t-[24px] h-1/2 shadow-lg">
                    <View className="h-2" />
                    <View style={{ backgroundColor: greycolortwo }} className="h-1 w-[67px] rounded-[11px] mx-auto" />
                    <View className="h-10" />
                    <Image source={require("../../assets/images/success-svg.png")} resizeMode="contain" className="w-20 h-20 mx-auto" />
                    <View className="h-10" />
                    <View className="items-center">
                        <Text style={[Textstyles.text_medium, { color: primarycolortwo }]}>{title}</Text>
                        <View className="h-3" />
                        <Text style={[Textstyles.text_xsmall, { color: primarycolortwo }]} className="text-center">{text}</Text>
                    </View>
                    <View className="h-10" />
                    <CustomButton
                        backgroundColor={primarycolor}
                        Textname={buttonText}
                        TextColor={whitecolor}
                        onPress={handlePress}
                    />
                    <View className="h-11" />
                    <View className="w-screen absolute bottom-0">
                        <View className="w-[134px] h-[5px] rounded-[100px] bg-[#101010] mx-auto" />
                    </View>

                </View>
              </View>
              <View className=" flex-row items-center">
                <IconButton
                  icon="phone"
                  size={24}
                  color={primarycolor}
                  onPress={() => console.log("Call User")}
                />
                <IconButton
                  icon="message"
                  size={24}
                  color={primarycolor}
                  onPress={() => console.log("Message User")}
                />
              </View>
            </View>
            <View>
              <View className=" flex-row items-center mb-4">
                <FontAwesome name="circle-o" size={20} color="orange" />
                <Text className=" ml-4">Hall 1 Uniben</Text>
              </View>
              <View className=" flex-row items-center ">
                <FontAwesome name="map-marker" size={20} color="black" />
                <Text className=" ml-4">Lecture theater 1 Uniben</Text>
              </View>
            </View>
          </View>

          <View className="h-10" />

          <View className="h-11" />
          <View className="w-screen absolute bottom-0">
            <View className="w-[134px] h-[5px] rounded-[100px] bg-[#101010] mx-auto" />
          </View>
        </View>
      </View>
    </>
  );
};
