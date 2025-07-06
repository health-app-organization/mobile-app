import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import { primarycolor, whitecolor } from "../../constants/colors";
import { Textstyles } from "../../constants/fontsize";
import { QRCodeScreen } from "../../utilities/qr-code";
import { BackgroundIcon, Notificationicon } from "../../assets/iconsvg/Svgicon";
import { router } from "expo-router";

const DashboardHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.page}>
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
                {`How're you today?`}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.notificationButton}
            onPress={() => {
              router.push("/(notification)");
            }}
          >
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
              <Text style={[Textstyles.text_medium, styles.whiteText]}>
                0.00
              </Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: primarycolor,
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 50,
    width: "100%",
    height: "55%",
    flex: 0.4,
  },
  page: {
    flex: 1,
    position: "relative",
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
    height: 44,
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
