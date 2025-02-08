import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet, StatusBar, Image, Text } from "react-native";
import {
  logocolor,
  primarycolor,
  primarycolortwo,
  whitecolor,
} from "../../constants/color";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../types/stack";

const AnimatedBackground = () => {
  const navigation = useNavigation<StackNavigation>();
  const scaleAnimation = useRef(new Animated.Value(0)).current;
  const dropAnimation = useRef(new Animated.Value(-1000)).current; // Starts from off-screen (top)

  useEffect(() => {
    // Start the animations in sequence
    Animated.sequence([
      // Animate the scale of the yellow card
      Animated.timing(scaleAnimation, {
        toValue: 1,
        duration: 1000, // Scale up in 1 second
        useNativeDriver: true,
      }),
      // After scaling, drop the third card from the top
      Animated.timing(dropAnimation, {
        toValue: 0,
        duration: 1000, // Drop in 1 second
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const isFocused = useIsFocused();
  const goto = async () => {
    // const status = await getDeviceStatus();
    // if (status) {
    navigation.navigate("slider");
    //     } else {
    //       navigation.navigate('slider');
    //     }
  };
  useEffect(() => {
    if (isFocused) {
      const mystart = setTimeout(() => {
        goto();
      }, 4000);
      return () => clearTimeout(mystart);
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar />

      {/* First view: White background */}
      <View style={[styles.fullScreen, styles.whiteBackground]} />

      {/* Second view: Yellow card scaling */}
      <Animated.View
        style={[
          styles.fullScreen,
          styles.primaryCard,
          {
            transform: [{ scale: scaleAnimation }], // Scale the yellow card
          },
        ]}
      />

      {/* Third view: Blue card dropping from the top */}
      <Animated.View
        style={[
          styles.fullScreen,
          styles.primarytwoCard,
          {
            transform: [{ translateY: dropAnimation }], // Drop animation
          },
        ]}
        className="flex-col justify-center items-center"
      >
        <View>
          <Image
            source={require("../../assets/images/logo.png")}
            resizeMode="contain"
            className="h-24 w-24"
          />

        </View>
        <Text className="text-white font-bold text-center text-3xl"><Text>Westa</Text><Text>Care</Text></Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  whiteBackground: {
    backgroundColor: whitecolor, // White background
  },
  primaryCard: {
    backgroundColor: primarycolor, // blue color
    justifyContent: "center",
    alignItems: "center",
  },
  primarytwoCard: {
    backgroundColor: primarycolor, // Blue color
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AnimatedBackground;
