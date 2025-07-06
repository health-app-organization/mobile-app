import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { primarycolor } from "../constants/colors";

export const ProviderCard: React.FC<ProviderCardProps> = ({
  name,
  title,
  rating,
  likes,
  onPress,
  image,
}) => {
  return (
    <TouchableOpacity
      className="flex-row items-center w-full rounded-xl bg-white overflow-hidden"
      onPress={onPress}
    >
      <Image
        source={require("../assets/images/appo.png")} //* to be changed to dynamic image
        className="w-[120px] h-[120px]"
        resizeMode="cover"
      />
      <View className="h-full flex-1 p-4">
        <Text>{name}</Text>
        <Text>{title}</Text>
        <View className="flex-row items-center gap-x-2">
          <View className="flex-row items-center gap-x-1">
            {[...Array(5)].map((_, index) => (
              <FontAwesome
                key={index}
                name={index < rating ? "star" : "star-o"}
                size={12}
                color={primarycolor}
              />
            ))}
          </View>
          <View className="flex-row items-center">
            <Text>{likes} </Text>
            <FontAwesome name="heart-o" size={13} color="#FF0000" />
          </View>
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
    <TouchableOpacity
      onPress={onPress}
      className=" bg-white rounded-xl shadow-md w-[200px] h-[170px]"
    >
      {/* Left Section: Image */}
      <View className="bg-gray-600 w-[200px] h-[97px] flex justify-center  rounded-t-xl items-center mr-4">
        <Image
          source={require("../assets/images/appo.png")}
          className="w-full h-full" // Set height to full
          resizeMode="contain"
        />
      </View>

      <View className="flex-row justify-between px-3 mb-auto mt-auto">
        <View>
          <Text className="text-[1Opx] font-[500] leading-[27px] ">{name}</Text>
          <Text className="text-gray-500 text-[10px] font-[500] leading-[21px] mb-1">
            {title}
          </Text>
        </View>

        {/* Ratings and Likes */}
        <View className=" items-center fl justify-center  bg-[#0099b8] w-[68px] rounded-[10px]">
          {/* Stars */}
          <Text className=" text-white font-[8px] -mt-3 mb-1 ">
            Reviews {reviews}
          </Text>
          <View className=" flex-row w-[60px]  space-x-1 justify-center items-center ">
            {[...Array(rating)].map((_, index) => (
              <FontAwesome key={index} name="star" size={6} color="white" />
            ))}
          </View>

          {/* Likes */}
        </View>
      </View>
    </TouchableOpacity>
  );
};
