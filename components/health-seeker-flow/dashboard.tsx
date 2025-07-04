// import { View, Text, StyleSheet } from "react-native";
// import { MenuButton } from "../../utilities/menu-button";
// import { AmbulanceIcon, LabIcon, SethIcon } from "../../assets/iconsvg/Svgicon";
// import { Textstyles } from "../../constants/fontsize";

// const DashboardMenu = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.menuRow}>
//         <MenuButton
//           icon={<SethIcon width={40} height={40} />}
//           text={
//             <Text style={[Textstyles.text_xsmall, styles.menuText]}>
//               Healthcare Provider
//             </Text>
//           }
//         />
//         <MenuButton
//           icon={<AmbulanceIcon width={40} height={40} />}
//           text={
//             <Text style={[Textstyles.text_xsmall, styles.menuText]}>
//               Medicine
//             </Text>
//           }
//         />
//         <MenuButton
//           icon={<LabIcon width={40} height={40} />}
//           text={
//             <Text style={[Textstyles.text_xsmall, styles.menuText]}>
//               Lab and Radiology
//             </Text>
//           }
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 8,
//     marginHorizontal: "auto",
//     alignItems: "center",
//     width: "100%",
//   },
//   menuRow: {
//     flexDirection: "row",
//     gap: 16,
//   },
//   menuText: {
//     textAlign: "center",
//   },
// });

// export default DashboardMenu;

import { View, Text, StyleSheet } from "react-native";
import { MenuButton } from "../../utilities/menu-button";
import { AmbulanceIcon, LabIcon, SethIcon } from "../../assets/iconsvg/Svgicon";
import { Textstyles } from "../../constants/fontsize";

const DashboardMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menuRow}>
        <MenuButton
          icon={<SethIcon width={40} height={40} />}
          text={
            <Text style={[Textstyles.text_xsmall, styles.menuText]}>
              Healthcare Provider
            </Text>
          }
        />
        <MenuButton
          icon={<AmbulanceIcon width={40} height={40} />}
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
