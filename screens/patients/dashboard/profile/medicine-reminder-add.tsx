import { CustomButton, CustomDropdownWithHeader, CustomInputWithHeader, Header } from "components/mycomponent";
import { primarycolor } from "constants/color";
import { Textstyles } from "constants/fontsize";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker, { DateType } from "react-native-ui-datepicker";
import { Ionicons } from "@expo/vector-icons";

const MedicineReminderAdd: React.FC<{}> = () => {
    const [medicineName, setMedicineName] = useState<string>("");
    const [dosage, setDosage] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [time, setTime] = useState<string>("");
    const [guideline, setGuideline] = useState<string>("");

    const [selected, setSelected] = useState<DateType>(new Date());

    return (
        <SafeAreaView className="flex-1 bg-primaryTwo">
            <StatusBar backgroundColor={primarycolor} />
            <Header title="Add Medicine Reminder" />
            <ScrollView className="p-6">
                <CustomInputWithHeader
                    headerText="Medicine Name"
                    placeholder="Enter Medicine Name"
                    value={medicineName}
                    onChange={(text: string) => setMedicineName(text)}
                />
                <View className="h-2" />
                <CustomDropdownWithHeader
                    headerText="Dosage"
                    options={[{ value: "dos1", label: "dos1" }]}
                    placeholder={
                        <View className="flex-row items-center justify-between w-full">
                            <Text>Select dosage</Text>
                            <Ionicons name="chevron-down" size={20} color="black" />
                        </View>
                    }
                    value={dosage}
                    onChange={(val: string) => setDosage(val)}
                />
                <View className="h-2" />
                <Text className="mb-2" style={[Textstyles.text_cmedium]}>
                    Select date
                </Text>
                <View className="bg-white rounded-sm">
                    <DateTimePicker
                        mode="single"
                        date={selected}
                        onChange={({ date }) => {
                            setSelected(date);
                        }}
                        selectedTextStyle={{ color: "black" }}
                        selectedItemColor={primarycolor}
                        headerContainerStyle={{ width: 216, marginHorizontal: "auto" }}
                    />
                </View>
                <View className="h-2" />
                <View>
                    <Text className="mb-2" style={[Textstyles.text_cmedium]}>
                        Select time
                    </Text>
                    <View className="flex-row items-center justify-start gap-x-2">
                        <TouchableOpacity className="p-4 border border-purple1 border-dashed rounded-lg">
                            <Text>00:00</Text>
                        </TouchableOpacity>
                        <View className="">
                            <CustomDropdownWithHeader
                                options={[{ value: "am", label: "AM" }, { value: "pm", label: "PM" }]}
                                placeholder={
                                    <View className="flex-row items-center">
                                        <Text>am</Text>
                                        <Ionicons name="chevron-down" size={20} color="black" />
                                    </View>
                                }
                                value={time}
                                onChange={(val: string) => setTime(val)}
                            />
                        </View>
                    </View>
                </View>
                <View className="h-2" />
                <CustomInputWithHeader
                    headerText="Guideline"
                    placeholder="Enter Guideline"
                    value={guideline}
                    onChange={(text: string) => setGuideline(text)}
                />
                <View className="h-8" />
                <CustomButton
                    Textname="Save"
                    onPress={() => {
                        console.log("Add Reminder");
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default MedicineReminderAdd;
