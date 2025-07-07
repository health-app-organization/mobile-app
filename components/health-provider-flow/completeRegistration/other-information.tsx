import { Textstyles } from "constants/fontsize";
import { useState } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { formatDate } from "utilities/utility";
import { DateType } from "react-native-ui-datepicker";
import { CustomTextInput } from "components/utilities/inputs";
import { primarycolor } from "constants/color";
import { CustomDropdownWithHeader } from "components/utilities/dropdowns";
import SelectInput from "./select-input";
import Fontisto from '@expo/vector-icons/Fontisto';

export default function OtherInformation({
    setOpenDateModal,
    selected,
    setCurrentPage,

}: {
    setOpenDateModal: (value: boolean) => void;
    selected: DateType;
    setCurrentPage: (num: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7) => void;
}) {
    const [gender, setGender] = useState<"female" | "male">("female");
    return (
        <>
            <ProfileGenderPicker
                gender={gender}
                setGender={setGender}
            />
            <View className="">
                <View className="flex-row">
                    <Text className="font-normal text-base">Date of Birth</Text>
                    <Text style={{ color: "#A30202" }}>*</Text>
                </View>
                <TouchableOpacity
                    className="border border-primary rounded-md p-4 flex-row items-center gap-x-4"
                    onPress={() => setOpenDateModal(true)}
                >
                    <FontAwesome name="calendar" size={20} color="#000" />
                    <Text className="">{formatDate(selected)}</Text>
                </TouchableOpacity>
            </View>
            <CustomTextInput
                label="Address"
                placeholder="Enter your residential address"
                value=""
                onChange={() => { }}
                leftIcon={
                    <Image
                        source={require("../../../../assets/png-icon/location-06.png")}
                        className="size-6"
                        resizeMode="contain"
                    />
                }
                required
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                borderColor={primarycolor}
            />
            <CustomDropdownWithHeader
                label="City"
                options={[
                    { label: "Option 1", value: "option1" },
                    { label: "Option 2", value: "option2" },
                ]}
                placeholder="Select city"
                value=""
                onChange={() => { }}
                required
            />
            <CustomDropdownWithHeader
                label="Country"
                options={[
                    { label: "Option 1", value: "option1" },
                    { label: "Option 2", value: "option2" },
                ]}
                placeholder="Select country"
                value=""
                onChange={() => { }}
                required
            />
            <SelectInput
                label="Availability"
                required
                placeholder="Add available date and time"
                borderColor={primarycolor}
                onPress={() => setCurrentPage(4)}
            />
            <View className="gap-y-2">
                <CustomTextInput
                    label="Charge per minutes"
                    placeholder="Enter amount"
                    value=""
                    onChange={() => { }}
                    leftIcon={
                        <Text className="font-normal text-2xl">₦</Text>
                    }
                    rightIcon={
                        <Pressable className="h-full" onPress={() => setCurrentPage(5)}>
                            <Text className="text-primary font-normal text-base">/session</Text>
                        </Pressable>
                    }
                    required
                    borderColor={primarycolor}
                />
                <CustomTextInput
                    placeholder="Video consultation"
                    value=""
                    onChange={() => { }}
                    leftIcon={
                        <Text className="font-normal text-2xl">₦</Text>
                    }
                    rightIcon={
                        <Pressable className="h-full" onPress={() => setCurrentPage(5)}>
                            <Text className="text-primary font-normal text-base">/session</Text>
                        </Pressable>
                    }
                    required
                    borderColor={primarycolor}
                />
                <CustomTextInput
                    placeholder="Clinic consultation"
                    value=""
                    onChange={() => { }}
                    leftIcon={
                        <Text className="font-normal text-2xl">₦</Text>
                    }
                    rightIcon={
                        <Pressable className="h-full" onPress={() => setCurrentPage(5)}>
                            <Text className="text-primary font-normal text-base">/session</Text>
                        </Pressable>
                    }
                    required
                    borderColor={primarycolor}
                />
            </View>
        </>
    )
}

function ProfileGenderPicker({
    gender,
    setGender,
}: {
    gender: "female" | "male";
    setGender: (gender: "female" | "male") => void;
}) {
    return (
        <View className="flex-row justify-between px-8">
            {data.map((item, index) => (
                <View key={index} className="items-center">
                    <TouchableOpacity className={`bg-gray-800 rounded-lg w-16 py-4 items-center  ${gender === item && "border border-primary"}`} onPress={() => setGender(item)}>
                        <Fontisto name={item} size={24} color="#4b5563" />
                    </TouchableOpacity>
                    <Text className="capitalize">{item}</Text>
                </View>
            ))}
        </View>
    );
}

const data: ("female" | "male")[] = [
    "female",
    "male",
]