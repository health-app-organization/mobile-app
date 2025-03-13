import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

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
            style={{ elevation: 4 }}
            onPress={onPress}
            className="flex-row bg-white rounded-xl mb-4 shadow-sm shadow-cyan-300 w-[359px] h-[120px]"
        >
            <TouchableOpacity
                onPress={onPress}
                className="flex-row bg-white rounded-xl mb-4 shadow-md w-[359px] h-[120px]"
            >
                <View className="bg-gray-600 rounded-l-xl w-[130px] h-[120px] flex justify-center items-center mr-4">
                    <Image
                        source={require("../../assets/images/appo.png")}
                        className="w-full h-full" // Set height to full
                        resizeMode="contain"
                    />
                </View>

                <View className="flex-1 mb-auto mt-auto">
                    <Text className="text-[18px] font-[500] leading-[27px] mb-1">
                        {name}
                    </Text>
                    <Text className="text-gray-500 text-[14px] font-[500] leading-[21px] mb-1">
                        {title}
                    </Text>

                    {/* Ratings and Likes */}
                    <View className="flex-row items-center mt-2">
                        {/* Stars */}
                        <View className="flex-row w-[60p] space-x-1">
                            {[...Array(rating)].map((_, index) => (
                                <FontAwesome
                                    key={index}
                                    name="star"
                                    size={16}
                                    color="#0099b8"
                                />
                            ))}
                        </View>

                        {/* Likes */}
                        <View className=" flex-row space-x-1">
                            <Text className="ml-3 text-gray-600">{likes}</Text>
                            <FontAwesome
                                name="heart"
                                size={16}
                                color="red"
                                className="ml-1"
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
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
            className=" bg-white rounded-xl shadow-md w-[200px] h-[170px] mr-4"
        >
            {/* Left Section: Image */}
            <View className="bg-gray-600 w-[200px] h-[97px] flex justify-center  rounded-t-xl items-center mr-4">
                <Image
                    source={require("../../assets/images/appo.png")}
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