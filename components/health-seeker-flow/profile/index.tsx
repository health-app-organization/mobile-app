// import React, { useRef, useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   Animated,
//   Alert,
//   FlatList,
// } from "react-native";
// import { FontAwesome } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for arrow

// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { SafeAreaView } from "react-native-safe-area-context";
// import data from "./profile-data";
// import { Textstyles } from "../../../constants/fontsize";
// import { LogIcon } from "../../../assets/iconsvg/Svgicon";
// import { primarycolor } from "../../../constants/colors";
// import { CustomButton } from "../../../utilities/buttons";
// import { router } from "expo-router";

// const Account = () => {
//   const [modalVisible, setModalVisible] = useState<boolean>(false);
//   const slideAnim = useRef(new Animated.Value(300)).current; // Starting position off-screen

//   const handleShowModal = () => {
//     setModalVisible(true);
//     Animated.spring(slideAnim, {
//       toValue: 0, // Slide into view
//       friction: 8, // Adjust for a more springy effect
//       tension: 40,
//       useNativeDriver: true,
//     }).start();
//   };

//   const user = {
//     firstName: "John",
//     lastName: "Doe",
//     email: "john25doe@gmail.com",
//     phoneNumber: "+254 700 000 000",
//   };

//   return (
//     <>
//       <View className=" pt-3">
//         <View className=" w-full flex justify-center   items-center">
//           <View className="   flex justify-center items-center    ">
//             {/* Profile Picture */}
//             <View
//               className="w-[80px]  h-[80px]  flex justify-center items-center  rounded-tl-lg overflow-hidden"
//               style={{
//                 opacity: 1,
//                 borderWidth: 3, // Set the border width to 3
//                 borderColor: "#FFFFFF", // Set the border color to white
//                 borderRadius: 10,
//               }}
//             >
//               <Image
//                 source={require("../../../assets/images/pro.png")} // Ensure the path is correct
//                 resizeMode="contain"
//                 className="w-full h-full"
//               />
//             </View>

//             {/* Camera Icon */}
//             <TouchableOpacity
//               className="w-8 h-8 bg-[#FFAA26] rounded-full -mt-6 ml-16"
//               style={{
//                 borderWidth: 3,
//                 borderColor: "#FFFFFF", // Set the border color to white
//                 opacity: 1,
//               }}
//             >
//               <FontAwesome
//                 name="camera"
//                 size={15}
//                 color="#000000"
//                 style={{
//                   alignSelf: "center",
//                   marginTop: "auto",
//                   marginBottom: "auto",
//                 }} // Center the icon
//               />
//             </TouchableOpacity>
//             <Text
//               className=" text-[24px] font-[700] leading-[36px] "
//               style={[Textstyles.text_medium]}
//             >
//               {user?.firstName + " " + user?.lastName}
//             </Text>
//             <Text
//               className=" text-[16px] leading-[24px] mb-1 "
//               style={{ color: "rgba(0, 0, 0, 0.5)" }}
//             >
//               {user?.email}
//             </Text>
//             <Text
//               className=" text-[16px] leading-[24px] "
//               style={{ color: "rgba(0, 0, 0, 0.5)" }}
//             >
//               {user?.phoneNumber}
//             </Text>
//           </View>
//         </View>
//       </View>

//       <View className="flex-1">
//         <FlatList
//           data={data}
//           scrollEnabled={true}
//           showsHorizontalScrollIndicator
//           renderItem={({ item }) => <SelectMenu item={item} />}
//           keyExtractor={(item) => item.id.toString()}
//           ListFooterComponent={() => (
//             <TouchableOpacity
//               onPress={handleShowModal}
//               className="h-[90px] flex justify-between items-center flex-row  border-b-1 pr-4"
//               style={{ borderBottomColor: "rgba(0, 0, 0, 0.2)" }}
//             >
//               <View className=" flex-row w-[185px]  justify-between items-center  ml-[24px]">
//                 <View className=" w-[45px] h-[45px] bg-[#00D5FD80] flex justify-center items-center rounded-[10px]">
//                   <LogIcon />
//                 </View>
//                 <View>
//                   <Text style={[Textstyles.text_xmedium]} className=" -ml-32">
//                     Log out
//                   </Text>
//                 </View>
//               </View>
//               <View className=" flex justify-center items-center w-8 h-8 mr-[8]">
//                 <Ionicons name="chevron-forward" size={32} color="#0099b8" />
//               </View>
//             </TouchableOpacity>
//           )}
//         />
//       </View>
//       {modalVisible && (
//         <Modallogout
//           slideAnim={slideAnim}
//           setModalVisible={(value: boolean) => setModalVisible(value)}
//         />
//       )}
//     </>
//   );
// };

// export default Account;

// const SelectMenu = ({ item }: { item: any }) => {
//   console.log("item", item.label);

//   return (
//     <TouchableOpacity
//       onPress={item.action}
//       className="h-[90px] flex justify-between items-center flex-row  border-b-1 pr-4"
//       style={{ borderBottomColor: "rgba(0, 0, 0, 0.2)" }}
//     >
//       <View className=" flex-row w-[185px]  items-center  ml-[24px]">
//         <View className=" w-[45px] h-[45px] bg-[#00D5FD80] flex justify-center items-center rounded-[10px]">
//           {item.icon}
//         </View>
//         <View>
//           <Text style={[Textstyles.text_xmedium]} className="ml-4">
//             {item.name}
//           </Text>
//         </View>
//       </View>
//       <View className="flex justify-center items-center w-8 h-8 mr-[8]">
//         <Ionicons name="chevron-forward" size={32} color="#0099b8" />
//       </View>
//     </TouchableOpacity>
//   );
// };

// const Modallogout: React.FC<{
//   slideAnim: Animated.Value;
//   setModalVisible: (value: boolean) => void;
// }> = ({ slideAnim, setModalVisible }) => {
//   //   const navigation = useNavigation<StackNavigation>();

//   const handlehideModal = () => {
//     setModalVisible(false);
//     Animated.timing(slideAnim, {
//       toValue: 300, // Slide into view
//       duration: 500, // Adjust duration as needed
//       useNativeDriver: true,
//     }).start();
//   };

//   const handleLogout = async () => {
//     await AsyncStorage.clear();
//     setModalVisible(false);
//     router.replace("/(auth)");
//     // navigation.navigate("identity");
//     Alert.alert("Logout", "You have successfully logged out");
//   };

//   return (
//     <View className="h-full w-full absolute">
//       <View
//         style={{ backgroundColor: primarycolor }}
//         className="absolute h-full w-full opacity-70"
//       />
//       <Animated.View
//         style={[{ transform: [{ translateY: slideAnim }] }]}
//         className="w-full h-[25vh] bg-white absolute z-50  bottom-0  rounded-t-2xl"
//       >
//         <View className="items-center mt-5">
//           <Text style={[Textstyles.text_xmedium]}>Westacare</Text>
//           <Text style={[Textstyles.text_x16small]}>
//             Are you sure you want to logout ?
//           </Text>
//         </View>
//         <View className="px-5 mt-3">
//           <CustomButton
//             TextColor={"white"}
//             Textname={"Yes"}
//             backgroundColor={"red"}
//             onPress={handleLogout}
//           />
//           <View className="h-3" />
//           <CustomButton
//             onPress={handlehideModal}
//             TextColor={"white"}
//             Textname={"No"}
//             backgroundColor={primarycolor}
//           />
//         </View>
//       </Animated.View>
//     </View>
//   );
// };

import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
  Alert,
  FlatList,
  StyleSheet,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Textstyles } from "../../../constants/fontsize";
import { LogIcon } from "../../../assets/iconsvg/Svgicon";
import { primarycolor } from "../../../constants/colors";
import { CustomButton } from "../../../utilities/buttons";
import { router } from "expo-router";
import data from "./profile-data";

interface MenuItem {
  id: number;
  name: string;
  icon: React.ReactNode;
  action: () => void;
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

const Account = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const slideAnim = useRef(new Animated.Value(300)).current;

  const handleShowModal = () => {
    setModalVisible(true);
    Animated.spring(slideAnim, {
      toValue: 0,
      friction: 8,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const user: User = {
    firstName: "John",
    lastName: "Doe",
    email: "john25doe@gmail.com",
    phoneNumber: "+254 700 000 000",
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.profileImageContainer}>
          <Image
            source={require("../../../assets/images/pro.png")}
            resizeMode="contain"
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.cameraButton}>
            <FontAwesome
              name="camera"
              size={15}
              color="#000000"
              style={styles.cameraIcon}
            />
          </TouchableOpacity>
        </View>
        <Text style={[Textstyles.text_medium, styles.userName]}>
          {user.firstName} {user.lastName}
        </Text>
        <Text style={styles.userInfo}>{user.email}</Text>
        <Text style={styles.userInfo}>{user.phoneNumber}</Text>
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
    await AsyncStorage.clear();
    setModalVisible(false);
    router.replace("/(auth)");
    Alert.alert("Logout", "You have successfully logged out");
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
    width: 80,
    height: 80,
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
    bottom: -16,
    right: 16,
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
