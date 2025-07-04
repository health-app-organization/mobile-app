// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// const index = () => {
//   return (
//     <View>
//       <Text>index</Text>
//     </View>
//   );
// };

// export default index;

// const styles = StyleSheet.create({});

import { Redirect } from "expo-router";

export default function AccountIndex() {
  return <Redirect href={"/(healthcare-seeker)/(auth)"} />;
}
