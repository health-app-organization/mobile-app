import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  Animated,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Textstyles } from "../../../constants/fontsize";
import { LogIcon } from "../../../assets/iconsvg/Svgicon";
import { primarycolor } from "../../../constants/colors";
import { CustomButton } from "../../../utilities/buttons";
import data from "./profile-data";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../redux/store";
import * as ImagePicker from "expo-image-picker";
import Logout from "../../../utils/Logout";
import { uploadProfilePic } from "../../../redux/slices/update-user";

interface MenuItem {
  id: number;
  name: string;
  icon: React.ReactNode;
  action: () => void;
}

const NoImage = require("../../../assets/images/noProfile.png");

const Account = () => {
  const dispatch = useAppDispatch();

  const user = useSelector((state: RootState) => state.dashboard.data);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  // const [profileImage, setProfileImage] = useState("");
  const [profileImage, setProfileImage] = useState(user?.seeker?.image || "");

  const slideAnim = useRef(new Animated.Value(300)).current;

  // Set initial profile image based on role
  useEffect(() => {
    if (user?.role === "seeker" && user.seeker?.image) {
      setProfileImage(user.seeker.image);
    } else if (user?.role === "provider" && user.provider?.image) {
      setProfileImage(user.provider.image);
    }
  }, [user]);

  const handleShowModal = () => {
    setModalVisible(true);
    Animated.spring(slideAnim, {
      toValue: 0,
      friction: 8,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const handleProfileImgButtonClick = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access gallery is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!pickerResult.canceled && pickerResult.assets?.length > 0) {
      setProfileImage(pickerResult.assets[0].uri);

      if (pickerResult.assets[0].fileName && pickerResult.assets[0].mimeType) {
        await dispatch(
          uploadProfilePic({
            image: {
              fileName: pickerResult.assets[0].fileName,
              uri: pickerResult.assets[0].uri,
              mimeType: pickerResult.assets[0].mimeType,
            },
          })
        );
      }
    }
  };

  // Get user data based on role
  const getUserData = () => {
    if (user?.role === "seeker") {
      return {
        name:
          `${user.seeker?.firstName || ""} ${
            user.seeker?.lastName || ""
          }`.trim() || "Agwu Ezekiel",
        email: user.email || "email@gmail.com",
        phone: user.phone || "+254 700 000 000",
        image: profileImage || user.seeker?.image || NoImage,
      };
    } else if (user?.role === "provider") {
      return {
        // name: user.provider?.name || "Dr. Smith",
        name:
          `${user.provider?.firstName || ""} ${
            user.provider?.lastName || ""
          }`.trim() || "Dr. Smith",

        email: user.email || "doctor@gmail.com",
        phone: user.phone || "+254 700 000 001",
        image: profileImage || user.provider?.image || NoImage,
      };
    }
    return {
      name: "Guest User",
      email: "guest@gmail.com",
      phone: "+254 700 000 000",
      image: NoImage,
    };
  };

  const userData = getUserData();

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.profileImageContainer}>
          <Image
            source={
              typeof userData.image === "string"
                ? { uri: userData.image }
                : userData.image
            }
            resizeMode="contain"
            style={styles.profileImage}
          />
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={handleProfileImgButtonClick}
          >
            <FontAwesome
              name="camera"
              size={15}
              color="#000000"
              style={styles.cameraIcon}
            />
          </TouchableOpacity>
        </View>
        <Text style={[Textstyles.text_medium, styles.userName]}>
          {userData.name}
        </Text>
        <Text style={styles.userInfo}>{userData.email}</Text>
        <Text style={styles.userInfo}>{userData.phone}</Text>
      </View>

      <View style={styles.menuContainer}>
        <FlatList
          data={data}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <SelectMenu item={item as MenuItem} />}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={() => (
            <TouchableOpacity
              onPress={handleShowModal}
              style={styles.logoutButton}
            >
              <View style={styles.logoutContent}>
                <View style={styles.logoutIconContainer}>
                  <LogIcon />
                </View>
                <Text style={[Textstyles.text_xmedium, styles.logoutText]}>
                  Log out
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={32} color="#0099b8" />
            </TouchableOpacity>
          )}
        />
      </View>

      {modalVisible && (
        <ModalLogout slideAnim={slideAnim} setModalVisible={setModalVisible} />
      )}
    </View>
  );
};

const SelectMenu = ({ item }: { item: MenuItem }) => {
  return (
    <TouchableOpacity onPress={item.action} style={styles.menuItem}>
      <View style={styles.menuContent}>
        <View style={styles.menuIconContainer}>{item.icon}</View>
        <Text style={[Textstyles.text_xmedium, styles.menuText]}>
          {item.name}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={32} color="#0099b8" />
    </TouchableOpacity>
  );
};

interface ModalLogoutProps {
  slideAnim: Animated.Value;
  setModalVisible: (value: boolean) => void;
}

const ModalLogout: React.FC<ModalLogoutProps> = ({
  slideAnim,
  setModalVisible,
}) => {
  const handleHideModal = () => {
    setModalVisible(false);
    Animated.timing(slideAnim, {
      toValue: 300,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handleLogout = async () => {
    Logout();
  };

  return (
    <View style={styles.modalOverlay}>
      <View style={styles.modalBackground} />
      <Animated.View
        style={[
          styles.modalContent,
          { transform: [{ translateY: slideAnim }] },
        ]}
      >
        <View style={styles.modalHeader}>
          <Text style={[Textstyles.text_xmedium]}>Westacare</Text>
          <Text style={[Textstyles.text_x16small]}>
            Are you sure you want to logout?
          </Text>
        </View>
        <View style={styles.modalButtons}>
          <CustomButton
            TextColor="white"
            Textname="Yes"
            backgroundColor="red"
            onPress={handleLogout}
          />
          <View style={styles.buttonSpacer} />
          <CustomButton
            onPress={handleHideModal}
            TextColor="white"
            Textname="No"
            backgroundColor={primarycolor}
          />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
  },
  profileHeader: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImageContainer: {
    width: 90,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  cameraButton: {
    width: 32,
    height: 32,
    backgroundColor: "#FFAA26",
    borderRadius: 16,
    borderWidth: 3,
    borderColor: "#FFFFFF",
    position: "absolute",
    bottom: -7,
    right: 1,
    justifyContent: "center",
  },
  cameraIcon: {
    alignSelf: "center",
  },
  userName: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 36,
    marginTop: 16,
  },
  userInfo: {
    fontSize: 16,
    lineHeight: 24,
    color: "rgba(0, 0, 0, 0.5)",
    marginBottom: 4,
  },
  menuContainer: {
    flex: 1,
    marginTop: 16,
  },
  menuItem: {
    height: 90,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.2)",
  },
  menuContent: {
    flexDirection: "row",
    width: 185,
    alignItems: "center",
    marginLeft: 24,
  },
  menuIconContainer: {
    width: 45,
    height: 45,
    backgroundColor: "#00D5FD80",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  menuText: {
    marginLeft: 16,
  },
  logoutButton: {
    height: 90,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.2)",
    marginBottom: 30,
  },
  logoutContent: {
    flexDirection: "row",
    width: 185,
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 24,
  },
  logoutIconContainer: {
    width: 45,
    height: 45,
    backgroundColor: "#00D5FD80",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  logoutText: {
    marginLeft: -116,
  },
  modalOverlay: {
    position: "absolute",
    height: "90%",
    width: "100%",
  },
  modalBackground: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    opacity: 0.7,
  },
  modalContent: {
    width: "100%",
    height: "25%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    zIndex: 50,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  modalHeader: {
    alignItems: "center",
    marginTop: 20,
  },
  modalButtons: {
    paddingHorizontal: 20,
    marginTop: 12,
    backgroundColor: "white",
  },
  buttonSpacer: {
    height: 12,
  },
});

export default Account;
