import { CustomButton } from "components/utilities/buttons";
import { CustomDropdownWithHeader } from "components/utilities/dropdowns";
import { CustomInputWithHeader } from "components/utilities/inputs";
import { primarycolor } from "constants/color";
import { Textstyles } from "constants/fontsize";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import DateTimePicker, { DateType } from "react-native-ui-datepicker";

const MedicineReminderAdd: React.FC<{}> = () => {
    const [medicineName, setMedicineName] = useState<string>("");
    const [dosage, setDosage] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [time, setTime] = useState<string>("");
    const [guideline, setGuideline] = useState<string>("");

    const [selected, setSelected] = useState<DateType>(new Date());

    return (
        <>
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
                    placeholder="Select Dosage"
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
                            <Text>12:12</Text>
                        </TouchableOpacity>
                        <View className="w-20">
                            <CustomDropdownWithHeader
                                options={[{ value: "am", label: "AM" }, { value: "pm", label: "PM" }]}
                                placeholder="am"
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
        </>
    );
};

export default MedicineReminderAdd;
