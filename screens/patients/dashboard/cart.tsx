import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Cartcard, Header } from "../../../components/mycomponent";

const Cart = () => {

  return (
    <View className="h-screen w-full  " style={{ flex: 1 }}>
      <StatusBar style="auto" />

      <Header
        title="My Cart"
        rightIcon="shopping-cart" // Example FontAwesome icon name
        onRightIconPress={() => console.log("Right icon pressed!")}
      />
      <View className=" flex justify-center w-full items-center mt-8">
        <Cartcard
          name="Amartem Paracetermol"
          rating={5}
          likes={250}
          onPress={() => console.log("view medicine")}
        />
        <View className=" h-3" />
        <Cartcard
          name="Amartem Paracetermol"
          rating={5}
          likes={250}
          onPress={() => console.log("view medicine")}
        />
        <View className=" h-3" />
        <Cartcard
          name="Amartem Paracetermol"
          rating={5}
          likes={250}
          onPress={() => console.log("view medicine")}
        />
        <View className=" h-3" />
        <Cartcard
          name="Amartem Paracetermol"
          rating={5}
          likes={250}
          onPress={() => console.log("view medicine")}
        />
        <View className=" h-3" />
        <Cartcard
          name="Amartem Paracetermol"
          rating={5}
          likes={250}
          onPress={() => console.log("view medicine")}
        />
      </View>
    </View>
  );
};

export default Cart;
