import { CustomButton } from "components/utilities/buttons";
import { lightBlue, lightGreen } from "constants/color";
import { Textstyles } from "constants/fontsize";
import { Image, Text, View } from "react-native";

export const DoctorCard: React.FC<DoctorCardProps> = ({
    name,
    session,
    time,
    imageSource,
    onPress,
    status = "upcoming",
}) => {
    return (
        <View className="w-full flex-row rounded-xl overflow-hidden bg-white">
            <View style={{ aspectRatio: 1 }} className="w-[50%] overflow-hidden">
                <Image source={imageSource} className="w-full h-full" />
            </View>
            <View className="flex-1 p-4 flex-col justify-between">
                <Text style={[Textstyles.text_medium]} className="text-center">
                    Dr Micheal Brains
                </Text>
                <View>
                    <Text className="text-center">Morning Session</Text>
                    <Text className="text-center">09:00AM Prompt</Text>
                </View>
                <CustomButton
                    Textname="View Details"
                    backgroundColor={status === "upcoming" ? lightGreen : lightBlue}
                    TextColor="black"
                    onPress={onPress}
                />
            </View>
        </View>
    );
};