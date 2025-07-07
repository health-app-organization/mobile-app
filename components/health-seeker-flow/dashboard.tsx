import { View, Text, StyleSheet } from "react-native";
import { MenuButton } from "../../utilities/menu-button";
import { AmbulanceIcon, LabIcon, SethIcon } from "../../assets/iconsvg/Svgicon";
// import { AmbulanceIcon, LabIcon, SethIcon } from "../../assets/iconsvg/Svgicon";
import { Textstyles } from "../../constants/fontsize";
import { router } from "expo-router";

const DashboardMenu = () => {
  const healthProvider = () => {
    router.push("/dashboard");
  };

  const medicine = () => {
    router.push("/dashboard/medicine");
  };
  return (
    <View style={styles.container}>
      <View style={styles.menuRow}>
        <MenuButton
          icon={<SethIcon width={40} height={40} />}
          onPress={healthProvider}
          text={
            <Text style={[Textstyles.text_xsmall, styles.menuText]}>
              Healthcare Provider
            </Text>
          }
        />
        <MenuButton
          icon={<AmbulanceIcon width={40} height={40} />}
          onPress={medicine}
          text={
            <Text style={[Textstyles.text_xsmall, styles.menuText]}>
              Medicine
            </Text>
          }
        />
        <MenuButton
          icon={<LabIcon width={40} height={40} />}
          text={
            <Text style={[Textstyles.text_xsmall, styles.menuText]}>
              Labs & Radiology
            </Text>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginHorizontal: "auto",
    alignItems: "center",
    width: "100%",
  },
  menuRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  menuText: {
    textAlign: "center",
    marginTop: 8,
  },
});

export default DashboardMenu;
