// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const Favorites = () => {
//   return (
//     <View>
//       <Text>Favorites</Text>
//     </View>
//   );
// };

// export default Favorites;

// const styles = StyleSheet.create({});

import { View, Image, Text } from "react-native";
import { Textstyles } from "../../../constants/fontsize";

const Favorites = () => {
  return (
    <>
      <View className=" w-full flex mt-52 justify-center items-center">
        <View className="w-[154px] h-[139px] ">
          <Image
            source={require("../../../assets/images/amico.png")}
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

export default Favorites;
