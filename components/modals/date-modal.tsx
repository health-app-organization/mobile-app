import DateTimePicker from "react-native-ui-datepicker";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { primarycolor } from "../../constants/color";

const DateModal = ({
  setBirthDate,
  birthDate,
  closeModal,
}: {
  setBirthDate: (value: string) => void;
  birthDate: string;
  closeModal: (value: boolean) => void;
}) => {
  const [date, setDate] = useState<Dayjs>(dayjs());

  // Update and close modal after date selection
  const setNewDate = (selectedDate: string) => {
    setBirthDate(dayjs(selectedDate).format("YYYY-MM-DD"));
    closeModal(false); // Close the modal
  };

  return (
    <View className="rounded-2xl p-3 z-50 bg-slate-100 top-16 absolute">
      <View className="items-end">
        <TouchableOpacity onPress={() => closeModal(false)}>
          <Text>
            <FontAwesome size={20} name="times" color={primarycolor} />
          </Text>
        </TouchableOpacity>
      </View>
      <DateTimePicker
        mode="single"
        date={date}
        selectedItemColor={primarycolor}
        onChange={(params) => {
          setDate(dayjs(params.date)); // Update the date state
          if (params.date) {
            setNewDate(params.date.toString()); // Update the date and close the modal
          }
        }}
      />
    </View>
  );
};

export default DateModal;
