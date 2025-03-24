import { useNavigation } from "@react-navigation/native";
import { CustomButton } from "components/utilities/buttons";
import { DatePicker, HourPicker } from "components/utilities/date-component";
import { Textstyles } from "constants/fontsize";
import { ScrollView, Text } from "react-native";
import { View } from "react-native";
import { StackNavigation } from "types/stack";

export default function BookAppointment() {
    const navigation = useNavigation<StackNavigation>();
    return (
        <View className="w-full h-full flex-1">
            <ScrollView>
                <View className="gap-y-4 p-6">
                    <Text style={[Textstyles.text_small, { fontWeight: "900" }]}>Select date</Text>
                    <DatePicker
                        setBirthDate={(value: string) => console.log("Birth date set to:", value)}
                        birthDate="1990-01-01"
                        closeModal={(value: boolean) => console.log("Modal closed:", value)}
                        className="bg-white"
                    />
                    <Text style={[Textstyles.text_small, { fontWeight: "900" }]}>Select hour</Text>
                    <HourPicker selectedHour={1} />
                </View>
            </ScrollView>
            <View className="pb-6 px-6">
                <CustomButton
                    Textname="Next"
                    onPress={() =>
                        navigation.navigate("health-seeker", {
                            screen: "safe-area-view",
                            params: { screen: "pay-for-appointment" },
                        })
                    }
                />
            </View>
        </View>
    )
}