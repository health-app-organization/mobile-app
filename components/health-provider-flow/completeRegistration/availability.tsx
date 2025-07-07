import { DatePicker, HourPicker } from "components/utilities/date-component";
import { Textstyles } from "constants/fontsize";
import { Text, View } from "react-native";

export default function Availability() {
    return (
        <>
            <View className="gap-y-4">
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
        </>
    )
}