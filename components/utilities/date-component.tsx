import { linkcolor, primarycolor } from "constants/color";
import { Textstyles } from "constants/fontsize";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export const DateComponent = () => {
    const [getDayArray, setDayArray] = useState<Date[]>([]);
    const currentDate = new Date();
    const [selectedDate, setSelectedDate] = useState<Date | null>(currentDate);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function getSurroundingDates() {
        const surroundingDates = [];
        for (let i = -2; i <= 31; i++) {
            const date = new Date(currentDate);
            date.setDate(currentDate.getDate() + i);
            surroundingDates.push(date);
        }
        return surroundingDates;
    }

    useEffect(() => {
        setDayArray(getSurroundingDates());
    }, []);

    return (
        <View className="px-3">
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View className="w-full flex-row gap-3 items-center justify-evenly">
                    {getDayArray.map((date, index) => {
                        const isSelectedDate =
                            selectedDate &&
                            date.toDateString() === selectedDate.toDateString();
                        return (
                            <TouchableOpacity
                                style={{
                                    borderColor: linkcolor,
                                    borderWidth: isSelectedDate ? 0 : 1,
                                    borderRadius: 30,
                                    height: 100,
                                    width: 60,
                                    backgroundColor: isSelectedDate
                                        ? primarycolor
                                        : "transparent",
                                }}
                                key={index}
                                className="flex justify-center items-center"
                                onPress={() => setSelectedDate(date)}
                            >
                                <Text
                                    style={[
                                        Textstyles.text_cmedium,
                                        { color: isSelectedDate ? "white" : "black" },
                                    ]}
                                >
                                    {days[date.getDay()]}
                                </Text>
                                <Text
                                    style={[
                                        Textstyles.text_cmedium,
                                        { color: isSelectedDate ? "white" : "black" },
                                    ]}
                                >
                                    {date.getDate()}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
};