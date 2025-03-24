import React, { useEffect, useState } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Modal,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  primarycolor,
  primarycolortwo,
  whitecolor,
} from "../../constants/color";
import { useNavigation } from "@react-navigation/native";
import { height, width } from "../../constants/mobileDimensions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigation } from "../../types/stack";
import { CustomButton, CustomButton2, CustomButtonSmall, CustomButtonSmall2 } from "components/utilities/buttons";

const Identity = () => {
  const navigation = useNavigation<StackNavigation>();

  // State for identity selection
  const [selectedIdentity, setSelectedIdentity] =
    useState<IdentitySelectionProps["identity"]>(null);

  // State for showing the confirmation modal
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [Role, setRole] = useState("");

  const ChangeRole = async () => {
    await AsyncStorage.setItem("role", Role);
  };

  useEffect(() => {
    ChangeRole();
  }, [Role]);
  // Functions to handle navig// Function to handle the 'Create account' navigation
  const handletonewacc = () => {
    if (selectedIdentity === "health-provider") {
      // navigation.navigate("healthptype"); // Navigate to healthtype for health provider
    } else if (selectedIdentity === "health-seeker") {
      navigation.navigate("health-seeker", { screen: "safe-area-view", params: { screen: "signup" } });
    }
  };

  // Function to handle the 'Login' navigation
  const handletologin = () => {
    if (selectedIdentity === "health-provider") {
      // navigation.navigate("doctor-login"); // Navigate to healthtype for health provider
    } else {
      navigation.navigate("health-seeker", { screen: "safe-area-view", params: { screen: "login" } });
    }
  };

  const handleSelection = (identity: IdentitySelectionProps["identity"]) => {
    setSelectedIdentity(identity);
  };

  // Function to proceed after confirmation
  const handleConfirmationContinue = () => {
    setShowConfirmation(false);
    if (selectedIdentity === "health-provider") {
      // navigation.navigate("healthptype"); // Adjust the route for health provider login/signup
    }
  };

  // Function to close confirmation modal
  const handleConfirmationBack = () => {
    setShowConfirmation(false);
  };

  return (
    <View
      style={{ height: height, width: width }}
      className="bg-primaryTwo py-[40px]"
    >
      <StatusBar />

      <View className="w-full h-44 mt-12 flex mb-7 justify-center items-center">
        <View className="w-[50%] h-32 flex justify-center items-center">
          <Image
            source={require("../../assets/images/logo.png")}
            resizeMode="contain"
            className="h-24 w-24"
          />
        </View>
        <Text className=" font-bold text-xl">Choose identity</Text>
      </View>

      <View className="flex-row items-center justify-evenly w-full h-64">
        {/* TouchableOpacity for Identity 1 */}
        <TouchableOpacity
          className="w-[143.01px] h-[188.56px] justify-center items-center relative"
          onPress={() => {
            handleSelection("health-seeker");
            setRole("user");
          }}
        >
          <Image
            source={require("../../assets/images/Frame 8.png")}
            resizeMode="contain"
            className="w-full"
          />
          {/* Show check mark if this one is selected */}
          {selectedIdentity === "health-seeker" && (
            <View className="absolute top-0 right-2 bg-black p-1 rounded-full">
              <FontAwesome name="check" size={16} color={whitecolor} />
            </View>
          )}
        </TouchableOpacity>

        {/* TouchableOpacity for Identity 2 (Health Provider) */}
        <TouchableOpacity
          className="w-[143.01px] h-[188.56px] justify-center items-center relative"
          onPress={() => {
            handleSelection("health-provider");
            setRole("provider");
          }}
        >
          <Image
            source={require("../../assets/images/Frame 9.png")}
            resizeMode="contain"
            className="w-full"
          />
          {/* Show check mark if this one is selected */}
          {selectedIdentity === "health-provider" && (
            <View className="absolute top-2 right-2 bg-black p-1 rounded-full z-10">
              <FontAwesome name="check" size={16} color={whitecolor} />
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center justify-evenly w-full h-64">
        {/* TouchableOpacity for Identity 3 (Hospitals) */}
        <TouchableOpacity
          className="w-[143.01px] h-[188.56px] justify-center items-center relative"
          onPress={() => {
            handleSelection("hospitals");
            //! setRole("provider");
          }}
        >
          <Image
            source={require("../../assets/images/hospital-identity.png")}
            resizeMode="contain"
            className="w-full"
          />
          {/* Show check mark if this one is selected */}
          {selectedIdentity === "hospitals" && (
            <View className="absolute top-2 right-2 bg-black p-1 rounded-full z-10">
              <FontAwesome name="check" size={16} color={whitecolor} />
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Conditionally show buttons when an identity is selected */}
      {
        selectedIdentity && (
          <View className="px-4 mt-10">
            <CustomButton
              Textname={"Login"}
              onPress={handletologin}
              backgroundColor={primarycolor}
              TextColor={whitecolor}
            />
            <View className="h-3" />
            <CustomButton2
              Textname={"Create account"}
              onPress={handletonewacc}
              backgroundColor={primarycolortwo}
              TextColor={primarycolor}
            />
          </View>
        )
      }

      {/* Modal for confirmation */}
      <Modal visible={showConfirmation} transparent={true} animationType="fade">
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View className=" w-[350px] py-14 bg-white flex justify-center items-center rounded-xl">
            <Text className="text-center text-2xl font-bold mb-3">Confirm</Text>
            <Text className="text-center mb-6 text-xl">
              This is for trained health care providers only.
            </Text>
            <View className=" flex-row  w-full justify-between px-6">
              <CustomButtonSmall
                Textname={"Continue"}
                onPress={handleConfirmationContinue}
                backgroundColor={primarycolor}
                TextColor={whitecolor}
              />
              <CustomButtonSmall2
                Textname={"Back"}
                onPress={handleConfirmationBack}
                backgroundColor={primarycolortwo}
                TextColor={primarycolor}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View >
  );
};

export default Identity;
