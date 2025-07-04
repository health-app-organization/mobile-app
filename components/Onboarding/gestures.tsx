// // src/screens/slider/SliderGestures.tsx
// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { primarycolor, whitecolor } from "../../constants/colors";
// import { Textstyles } from "../../constants/fontsize";
// import { CustomButton } from "../../utilities/buttons";
// import { sliderSteps } from "./data";

// type SliderGesturesProps = {
//   screenIndex: number;
//   onContinue: () => void;
//   onSkip: () => void;
//   onGetStarted: () => void;
// };

// const SliderGestures = ({
//   screenIndex,
//   onContinue,
//   onSkip,
//   onGetStarted,
// }: SliderGesturesProps) => {
//   const data = sliderSteps[screenIndex];
//   const isLastScreen = screenIndex === sliderSteps.length - 1;

//   return (
//     <View style={styles.page}>
//       <StatusBar style="auto" />

//       {/* Slider Section */}
//       <View>
//         {/* {!isLastScreen && (
//           <TouchableOpacity onPress={onSkip}>
//             <Text style={[Textstyles.text_small]}>Skip</Text>
//           </TouchableOpacity>
//         )} */}

//         {/* <View>
//           <Image source={data.image} />
//         </View> */}
//       </View>

//       {/* White View Section */}
//       <View>
//         <View>
//           <Text>{data.title}</Text>
//           <Text>{data.description}</Text>
//         </View>

// {/* Buttons */}
// <View>
//   <CustomButton
//     Textname={isLastScreen ? "Get started" : "Next"}
//     onPress={isLastScreen ? onGetStarted : onContinue}
//     backgroundColor={primarycolor}
//     TextColor={whitecolor}
//   />
// </View>
//       </View>
//     </View>
//   );
// };

// export default SliderGestures;

// const styles = StyleSheet.create({
//   page: {
//     justifyContent: "center",
//     flex: 1,
//   },
// });

// src/screens/slider/SliderGestures.tsx
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import { primarycolor, whitecolor } from "../../constants/colors";
import { CustomButton } from "../../utilities/buttons";
import { sliderSteps } from "./data";

type SliderGesturesProps = {
  screenIndex: number;
  onContinue: () => void;
  onSkip: () => void;
  onBack: () => void;
  onGetStarted: () => void;
};

const SliderGestures = ({
  screenIndex,
  onContinue,
  onSkip,
  onBack,
  onGetStarted,
}: SliderGesturesProps) => {
  const data = sliderSteps[screenIndex];
  const isLastScreen = screenIndex === sliderSteps.length - 1;

  // const swipes = Gesture.Simultaneous(
  //   Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
  //   Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  // );

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue).runOnJS(true),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack).runOnJS(true)
  );

  return (
    <View style={styles.page}>
      <StatusBar style="auto" />
      <GestureDetector gesture={swipes}>
        <View style={{ flex: 1 }}>
          <View
            // entering={FadeIn}
            // exiting={FadeOut}
            style={styles.imageContainer}
          >
            <Image source={data.image} style={styles.image} />
          </View>

          <View style={styles.footer}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.description}>{data.description}</Text>
          </View>
        </View>
      </GestureDetector>
      <View
        style={{
          // paddingTop: 20,
          paddingBottom: 10,
          marginBottom: 50,
          backgroundColor: "white",
          paddingHorizontal: 20,
        }}
      >
        <CustomButton
          Textname={isLastScreen ? "Get started" : "Next"}
          onPress={isLastScreen ? onGetStarted : onContinue}
          backgroundColor={primarycolor}
          TextColor={whitecolor}
        />
      </View>

      {/* Buttons */}
    </View>
  );
};

export default SliderGestures;

const styles = StyleSheet.create({
  page: {
    justifyContent: "center",
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    width: "100%",
  },
  image: {
    flex: 1,
    alignSelf: "center",
    objectFit: "cover",
    resizeMode: "contain",
    width: "100%",
  },
  footer: {
    flex: 0.4,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "white",
    marginTop: -15,
  },
  title: {
    fontSize: 24,
    color: "black",
    lineHeight: 29.05,
    fontWeight: "900",
    paddingHorizontal: 45,
    marginTop: 30,
    textAlign: "center",
  },
  description: {
    color: "black",
    fontSize: 16,
    lineHeight: 28,
    marginTop: 20,
    fontWeight: "700",
    paddingHorizontal: 30,
    marginBottom: 20,
    textAlign: "center",
  },
});
