import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HealthProvider({ navigation }: { navigation: any }) {
  const handleSelection = async (role: string) => {
    const auth = await AsyncStorage.getItem("auth");
    await AsyncStorage.setItem("role", role);
    navigation.navigate("health-provider", {
      screen: "safe-area-view",
      params: { screen: auth === "signup" ? "signup" : "login" },
    });
  };
  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <ScrollView>
        <View className="flex-col items-center py-20 gap-y-10">
          <View className="flex-col items-center">
            <Image
              source={require("../../../assets/png-icon/image-3.png")}
              resizeMode="contain"
              className="size-[140px]"
            />
            <Text className=" font-bold text-2xl">Health Provider</Text>
          </View>
          <View className="flex-row flex-wrap justify-between w-full px-4 gap-4">
            {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="w-[30%] items-center"
                onPress={() => handleSelection(item)}
              >
                <Image
                  source={require("../../../assets/png-icon/rectangle-25.png")}
                  resizeMode="contain"
                />
                <Text className="text-center font-bold text-base">{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const data = [
  "Doctor",
  "Pharmacists",
  "Optometrist",
  "Nurse",
  "Physiotherapist",
  "Radiology",
  "Lab Tests",
  "Pharmacists",
  "Optometrist",
];
