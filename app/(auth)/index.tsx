import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import {
  primarycolor,
  primarycolortwo,
  whitecolor,
} from "../../constants/colors";
import {
  CustomButton,
  CustomButton2,
  CustomButtonSmall,
  CustomButtonSmall2,
} from "../../utilities/buttons";

const Identity = () => {
  // State for identity selection
  const [selectedIdentity, setSelectedIdentity] = useState<string | null>(null);

  // State for showing the confirmation modal
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [Role, setRole] = useState<string>("");

  const ChangeRole = async () => {
    await AsyncStorage.setItem("role", Role);
  };

  useEffect(() => {
    ChangeRole();
  }, [Role]);

  // Function to handle the 'Create account' navigation
  const handletonewacc = async () => {
    if (selectedIdentity === "health-provider") {
      setShowConfirmation(true);
      await AsyncStorage.setItem("auth", "signup");
    } else if (selectedIdentity === "health-seeker") {
      router.push("/(healthcare-seeker)");
    }
  };

  // Function to handle the 'Login' navigation
  const handletologin = async () => {
    if (selectedIdentity === "health-provider") {
      setShowConfirmation(true);
      await AsyncStorage.setItem("auth", "login");
    } else {
      router.push("/(healthcare-seeker)");
    }
  };

  const handleSelection = (identity: string) => {
    setSelectedIdentity(identity);
  };

  // Function to proceed after confirmation
  const handleConfirmationContinue = () => {
    setShowConfirmation(false);
    router.push("/(healthcare-provider)");
  };

  // Function to close confirmation modal
  const handleConfirmationBack = () => {
    setShowConfirmation(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <StatusBar />

        <View style={styles.logoContainer}>
          <View style={styles.logoWrapper}>
            <Image
              source={require("../../assets/images/logo.png")}
              resizeMode="contain"
              style={styles.logo}
            />
          </View>
          <Text style={styles.title}>Choose identity</Text>
        </View>

        <View style={styles.identityRow}>
          {/* TouchableOpacity for Identity 1 */}
          <TouchableOpacity
            style={styles.identityButton}
            onPress={() => {
              handleSelection("health-seeker");
              setRole("user");
            }}
          >
            <Image
              source={require("../../assets/images/Frame 8.png")}
              resizeMode="contain"
              style={styles.identityImage}
            />
            {/* Show check mark if this one is selected */}
            {selectedIdentity === "health-seeker" && (
              <View style={styles.checkMark}>
                <FontAwesome name="check" size={16} color={whitecolor} />
              </View>
            )}
          </TouchableOpacity>

          {/* TouchableOpacity for Identity 2 (Health Provider) */}
          <TouchableOpacity
            style={styles.identityButton}
            onPress={() => {
              handleSelection("health-provider");
              setRole("provider");
            }}
          >
            <Image
              source={require("../../assets/images/Frame 9.png")}
              resizeMode="contain"
              style={styles.identityImage}
            />
            {/* Show check mark if this one is selected */}
            {selectedIdentity === "health-provider" && (
              <View style={[styles.checkMark, styles.providerCheckMark]}>
                <FontAwesome name="check" size={16} color={whitecolor} />
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.hospitalRow}>
          {/* TouchableOpacity for Identity 3 (Hospitals) */}
          <TouchableOpacity
            style={styles.identityButton}
            onPress={() => {
              handleSelection("hospitals");
            }}
          >
            <Image
              source={require("../../assets/images/hospital-identity.png")}
              resizeMode="contain"
              style={styles.identityImage}
            />
            {/* Show check mark if this one is selected */}
            {selectedIdentity === "hospitals" && (
              <View style={[styles.checkMark, styles.providerCheckMark]}>
                <FontAwesome name="check" size={16} color={whitecolor} />
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* Conditionally show buttons when an identity is selected */}
        {selectedIdentity && (
          <View style={styles.buttonContainer}>
            <CustomButton
              Textname={"Login"}
              onPress={handletologin}
              backgroundColor={primarycolor}
              TextColor={whitecolor}
            />
            <View style={styles.buttonSpacer} />
            <CustomButton2
              Textname={"Create account"}
              onPress={handletonewacc}
              backgroundColor={primarycolortwo}
              TextColor={primarycolor}
            />
          </View>
        )}

        {/* Modal for confirmation */}
        <Modal
          visible={showConfirmation}
          transparent={true}
          animationType="fade"
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Confirm</Text>
              <Text style={styles.modalText}>
                This is for trained health care providers only.
              </Text>
              <View style={styles.modalButtonRow}>
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: primarycolortwo,
    flex: 1,
    justifyContent: "center",
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: 30,
  },
  logoContainer: {
    width: "100%",
    height: 176,
    marginTop: 3,
    marginBottom: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  logoWrapper: {
    width: "50%",
    height: 128,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 96,
    width: 96,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  identityRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "25%",
    width: "100%",
  },
  hospitalRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "30%",
    marginTop: 40,
  },
  identityButton: {
    width: "40%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  identityImage: {
    width: "100%",
  },
  checkMark: {
    position: "absolute",
    top: 0,
    right: 8,
    backgroundColor: "black",
    padding: 4,
    borderRadius: 12,
  },
  providerCheckMark: {
    top: 8,
    zIndex: 10,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  buttonSpacer: {
    height: 12,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 350,
    paddingVertical: 56,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  modalTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  modalText: {
    textAlign: "center",
    marginBottom: 24,
    fontSize: 20,
  },
  modalButtonRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
});

export default Identity;
