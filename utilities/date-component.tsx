import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import { linkcolor, primarycolor } from "../constants/colors";
import { Textstyles } from "../constants/fontsize";

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
        <View className="flex-row gap-x-3">
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

export function DatePicker({
  setBirthDate,
  birthDate,
  closeModal,
  className,
}: {
  setBirthDate: (value: string) => void;
  birthDate: string;
  closeModal: (value: boolean) => void;
  className?: string;
}) {
  const [date, setDate] = useState<Dayjs>(dayjs());

  // Update and close modal after date selection
  const setNewDate = (selectedDate: string) => {
    setBirthDate(dayjs(selectedDate).format("YYYY-MM-DD"));
    closeModal(false); // Close the modal
  };

  return (
    <View className={className}>
      <DateTimePicker
        mode="single"
        date={date}
        onChange={(params) => {
          setDate(dayjs(params.date)); // Update the date state
          if (params.date) {
            setNewDate(params.date.toString()); // Update the date and close the modal
          }
        }}
      />
    </View>
  );
}

export function HourPicker({
  selectedHour,
  ...props
}: { selectedHour?: number } & TouchableOpacityProps) {
  return (
    <View className="flex-wrap flex-row justify-between">
      {[...Array(16)].map((_, index) => (
        <View
          key={index}
          style={{
            width: "22%", // Adjust width to fit 4 items per row with spacing
            marginBottom: 10, // Add spacing between rows
          }}
          className="items-center"
        >
          <TouchableOpacity
            {...props}
            style={{
              borderWidth: selectedHour === index + 1 ? 0 : 1,
              borderColor: primarycolor,
              paddingVertical: 4,
              paddingHorizontal: 12,
              borderRadius: 30,
              backgroundColor:
                selectedHour === index + 1 ? primarycolor : "transparent",
            }}
          >
            <Text>9:00am</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
