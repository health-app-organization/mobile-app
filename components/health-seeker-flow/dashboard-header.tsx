// import { BackgroundIcon, Notificationicon } from "assets/iconsvg/Svgicon";
// import { Text, TouchableOpacity, View } from "react-native";
// import { Avatar } from "react-native-paper";
// import { primarycolor, whitecolor } from "../../constants/colors";
// import { Textstyles } from "../../constants/fontsize";
// import { QRCodeScreen } from "../../utilities/qr-code";

// const DashboardHeader = () => {
//   return (
//     <View
//       style={{
//         backgroundColor: primarycolor,
//         borderBottomEndRadius: 16,
//         borderBottomStartRadius: 16,
//         paddingHorizontal: 12,
//         paddingVertical: 20,
//       }}
//       className="w-full h-[35vh] pt-[44px]"
//     >
//       <View className="absolute -bottom-10 left-15 opacity-30">
//         <BackgroundIcon width={200} height={200} fill="#ffffff30" />
//       </View>
//       <View className="flex-row justify-between items-center">
//         <View className="flex-row items-center">
//           <View>
//             <Avatar.Image
//               source={require("../../assets/images/profileimage.png")}
//               size={60}
//             />
//           </View>
//           <View className="w-4" />
//           <View>
//             <Text style={[Textstyles.text_xmedium, { color: whitecolor }]}>
//               {"Hi " + "firstName"}
//             </Text>
//             <Text style={[Textstyles.text_xxmedium, { color: whitecolor }]}>
//               How’re you today?
//             </Text>
//           </View>
//         </View>
//         <TouchableOpacity
//           //   onPress={() =>
//           //     navigation.navigate("health-seeker", {
//           //       screen: "safe-area-view",
//           //       params: { screen: "notifications" },
//           //     })
//           //   }
//           style={{ elevation: 4 }}
//           className="w-10 h-10 rounded-xl bg-white flex justify-center items-center shadow-sm shadow-black"
//         >
//           <Notificationicon width={28} height={28} />
//         </TouchableOpacity>
//       </View>
//       <View className="h-16" />
//       <View className="flex-row justify-between items-center">
//         <View>
//           <Text style={[Textstyles.text_cmedium, { color: whitecolor }]}>
//             Available Balance
//           </Text>
//           <View className="items-center flex-row">
//             <BackgroundIcon width={50} height={50} />
//             <View className="w-4" />

//             <Text style={[Textstyles.text_medium, { color: whitecolor }]}>
//               0.00
//             </Text>
//           </View>
//         </View>
//         <View>
//           <TouchableOpacity
//             // onPress={() =>
//             //   navigation.navigate("health-seeker", {
//             //     screen: "safe-area-view",
//             //     params: { screen: "user-qr-code" },
//             //   })
//             // }
//             className="h-20 w-20 flex justify-center items-center rounded-full border-white border-2"
//           >
//             <View className="h-16 w-16 flex justify-center items-center rounded-full bg-white p-2">
//               <QRCodeScreen />
//             </View>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default DashboardHeader;

import { BackgroundIcon, Notificationicon } from "assets/iconsvg/Svgicon";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import { primarycolor, whitecolor } from "../../constants/colors";
import { Textstyles } from "../../constants/fontsize";
import { QRCodeScreen } from "../../utilities/qr-code";

const DashboardHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundIcon}>
        <BackgroundIcon width={200} height={200} fill="#ffffff30" />
      </View>

      <View style={styles.topRow}>
        <View style={styles.profileSection}>
          <View>
            <Avatar.Image
              source={require("../../assets/images/profileimage.png")}
              size={60}
            />
          </View>
          <View style={styles.spacer} />
          <View>
            <Text style={[Textstyles.text_xmedium, styles.whiteText]}>
              {"Hi " + "firstName"}
            </Text>
            <Text style={[Textstyles.text_xxmedium, styles.whiteText]}>
              How're you today?
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.notificationButton}>
          <Notificationicon width={28} height={28} />
        </TouchableOpacity>
      </View>

      <View style={styles.middleSpacer} />

      <View style={styles.bottomRow}>
        <View>
          <Text style={[Textstyles.text_cmedium, styles.whiteText]}>
            Available Balance
          </Text>
          <View style={styles.balanceContainer}>
            <BackgroundIcon width={50} height={50} />
            <View style={styles.spacer} />
            <Text style={[Textstyles.text_medium, styles.whiteText]}>0.00</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity style={styles.qrCodeContainer}>
            <View style={styles.qrCodeInner}>
              <QRCodeScreen />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: primarycolor,
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 20,
    width: "100%",
    height: "35%",
    paddingTop: 44,
  },
  backgroundIcon: {
    position: "absolute",
    bottom: -40,
    left: 60,
    opacity: 0.3,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  spacer: {
    width: 16,
  },
  whiteText: {
    color: whitecolor,
  },
  notificationButton: {
    elevation: 4,
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: whitecolor,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  middleSpacer: {
    height: 64,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  qrCodeContainer: {
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    borderWidth: 2,
    borderColor: whitecolor,
  },
  qrCodeInner: {
    height: 64,
    width: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
    backgroundColor: whitecolor,
    padding: 8,
  },
});

export default DashboardHeader;
