// import { FontAwesome } from "@expo/vector-icons";
// import { Image, Text, TouchableOpacity, View } from "react-native";
// import { primarycolor } from "../constants/colors";

// export const ProviderCard: React.FC<ProviderCardProps> = ({
//   name,
//   title,
//   rating,
//   likes,
//   onPress,
//   image,
// }) => {
//   return (
//     <TouchableOpacity
//       className="flex-row items-center w-full rounded-xl bg-white overflow-hidden"
//       onPress={onPress}
//     >
//       <Image
//         source={require("../assets/images/appo.png")} //* to be changed to dynamic image
//         className="w-[120px] h-[120px]"
//         resizeMode="cover"
//       />
//       <View className="h-full flex-1 p-4">
//         <Text>{name}</Text>
//         <Text>{title}</Text>
//         <View className="flex-row items-center gap-x-2">
//           <View className="flex-row items-center gap-x-1">
//             {[...Array(5)].map((_, index) => (
//               <FontAwesome
//                 key={index}
//                 name={index < rating ? "star" : "star-o"}
//                 size={12}
//                 color={primarycolor}
//               />
//             ))}
//           </View>
//           <View className="flex-row items-center">
//             <Text>{likes} </Text>
//             <FontAwesome name="heart-o" size={13} color="#FF0000" />
//           </View>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export const ProviderCard2: React.FC<ProviderCardProps> = ({
//   name,
//   title,
//   rating,
//   reviews,
//   onPress,
//   image,
// }) => {
//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       className=" bg-white rounded-xl shadow-md w-[200px] h-[170px]"
//     >
//       {/* Left Section: Image */}
//       <View className="bg-gray-600 w-[200px] h-[97px] flex justify-center  rounded-t-xl items-center mr-4">
//         <Image
//           source={require("../assets/images/appo.png")}
//           className="w-full h-full" // Set height to full
//           resizeMode="contain"
//         />
//       </View>

//       <View className="flex-row justify-between px-3 mb-auto mt-auto">
//         <View>
//           <Text className="text-[1Opx] font-[500] leading-[27px] ">{name}</Text>
//           <Text className="text-gray-500 text-[10px] font-[500] leading-[21px] mb-1">
//             {title}
//           </Text>
//         </View>

//         {/* Ratings and Likes */}
//         <View className=" items-center fl justify-center  bg-[#0099b8] w-[68px] rounded-[10px]">
//           {/* Stars */}
//           <Text className=" text-white font-[8px] -mt-3 mb-1 ">
//             Reviews {reviews}
//           </Text>
//           <View className=" flex-row w-[60px]  space-x-1 justify-center items-center ">
//             {[...Array(rating)].map((_, index) => (
//               <FontAwesome key={index} name="star" size={6} color="white" />
//             ))}
//           </View>

//           {/* Likes */}
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { primarycolor } from "../constants/colors";

interface ProviderCardProps {
  name: string;
  title: string;
  rating: number;
  likes?: number;
  reviews?: number;
  onPress: () => void;
  image: any; // Adjust type as needed
}

export const ProviderCard: React.FC<ProviderCardProps> = ({
  name,
  title,
  rating,
  likes,
  onPress,
  image,
}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Image
        source={image || require("../assets/images/appo.png")}
        style={styles.cardImage}
        resizeMode="cover"
      />
      <View style={styles.cardContent}>
        <Text style={styles.providerName}>{name}</Text>
        <Text style={styles.providerTitle}>{title}</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.starsContainer}>
            {[...Array(5)].map((_, index) => (
              <FontAwesome
                key={index}
                name={index < rating ? "star" : "star-o"}
                size={12}
                color={primarycolor}
              />
            ))}
          </View>
          {likes !== undefined && (
            <View style={styles.likesContainer}>
              <Text style={styles.likesText}>{likes}</Text>
              <FontAwesome name="heart-o" size={13} color="#FF0000" />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const ProviderCard2: React.FC<ProviderCardProps> = ({
  name,
  title,
  rating,
  reviews,
  onPress,
  image,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card2Container}>
      <View style={styles.card2ImageContainer}>
        <Image
          source={image || require("../assets/images/appo.png")}
          style={styles.card2Image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.card2Content}>
        <View>
          <Text style={styles.card2Name}>{name}</Text>
          <Text style={styles.card2Title}>{title}</Text>
        </View>

        <View style={styles.card2RatingContainer}>
          <Text style={styles.reviewsText}>Reviews {reviews}</Text>
          <View style={styles.card2StarsContainer}>
            {[...Array(rating)].map((_, index) => (
              <FontAwesome key={index} name="star" size={6} color="white" />
            ))}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // ProviderCard1 styles
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderRadius: 12,
    backgroundColor: "white",
    overflow: "hidden",
  },
  cardImage: {
    width: 120,
    height: 120,
  },
  cardContent: {
    height: "100%",
    flex: 1,
    padding: 16,
  },
  providerName: {
    fontSize: 14,
    marginBottom: 4,
  },
  providerTitle: {
    fontSize: 12,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  likesContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  likesText: {
    fontSize: 12,
  },

  // ProviderCard2 styles
  card2Container: {
    backgroundColor: "white",
    borderRadius: 12,
    width: 200,
    height: 170,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  card2ImageContainer: {
    backgroundColor: "#4B5563", // gray-600
    width: 200,
    height: 97,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  card2Image: {
    width: "100%",
    height: "100%",
  },
  card2Content: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    marginTop: "auto",
    marginBottom: "auto",
  },
  card2Name: {
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 27,
  },
  card2Title: {
    color: "#6B7280", // gray-500
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 21,
    marginBottom: 4,
  },
  card2RatingContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primarycolor,
    width: 68,
    borderRadius: 10,
    paddingVertical: 4,
  },
  reviewsText: {
    color: "white",
    fontSize: 8,
    marginTop: -12,
    marginBottom: 4,
  },
  card2StarsContainer: {
    flexDirection: "row",
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});
