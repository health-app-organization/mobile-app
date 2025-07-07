// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const OrderHistory = () => {
//   return (
//     <View style={styles.container}>
//       <Text>OrderHistory</Text>
//     </View>
//   );
// };

// export default OrderHistory;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

import React from "react";
import { View, Image, Text } from "react-native";
import { Textstyles } from "../../constants/fontsize";

const OrderHistory = () => {
  return (
    <>
      <View className=" w-full flex mt-52 justify-center items-center">
        <View className="w-[154px] h-[139px] ">
          <Image
            source={require("../../assets/images/amico.png")}
            resizeMode="contain"
            className=" w-full"
          />
          <Text style={[Textstyles.text_xsma]} className=" text-center">
            Your orders will appear here
          </Text>
        </View>
      </View>
    </>
  );
};

export default OrderHistory;
