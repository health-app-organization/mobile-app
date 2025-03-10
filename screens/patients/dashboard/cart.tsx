import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import { CartCard, Header } from "../../../components/mycomponent";
import { SafeAreaView } from "react-native-safe-area-context";
import { primarycolor } from "constants/color";

const data = [
  {
    id: 1,
    name: "Amartem Paracetermol",
    rating: 5,
    likes: 250,
  },
  {
    id: 2,
    name: "Amartem Paracetermol",
    rating: 5,
    likes: 250,
  },
  {
    id: 3,
    name: "Amartem Paracetermol",
    rating: 5,
    likes: 250,
  },
  {
    id: 4,
    name: "Amartem Paracetermol",
    rating: 5,
    likes: 250,
  },
  {
    id: 5,
    name: "Amartem Paracetermol",
    rating: 5,
    likes: 250,
  }
]

const Cart = () => {
  return (
    <SafeAreaView className="h-screen w-full" style={{ flex: 1 }}>
      <StatusBar style="auto" backgroundColor={primarycolor} />

      <Header
        title="My Cart"
        rightIcon="shopping-cart" // Example FontAwesome icon name
        onRightIconPress={() => console.log("Right icon pressed!")}
      />
      <ScrollView className="flex w-full mt-8">
        {data.map((item) => (
          <CartCard
            key={item.id}
            name={item.name}
            rating={item.rating}
            likes={item.likes}
            onPress={() => console.log("view medicine")}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
