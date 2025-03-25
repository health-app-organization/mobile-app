import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "types/stack";
import { Textstyles } from "constants/fontsize";
import { primarycolor, whitecolor } from "constants/color";
import { FontAwesome } from "@expo/vector-icons";
import { DataDisplayModal } from "components/utilities/data-display-modal";
import { CustomButton } from "components/utilities/buttons";
import { CustomInputSearch } from "components/utilities/inputs";
import { ProviderCard } from "components/utilities/provider-card";
import { CustomDropdownWithHeader } from "components/utilities/dropdowns";
import { healthProviderList } from "mock-data/mock-data";

const HealthcareProvider = () => {
    const navigation = useNavigation<StackNavigation>();

    const [showQuestionsModal, setShowQuestionsModal] = useState(true);
    const [searchValue, setSearchValue] = useState("");

    const healthprovider = [
        { label: "General Doctor", value: "General Doctor" },
        { label: "Nurse", value: "Nurse" },
        { label: "Massage Therapist", value: "Massage Therapist" },
        { label: "Optometrist", value: "Optometrist" },
        { label: "Gynecologists", value: "Gynecologists" },
        { label: "Cardiologist", value: "Cardiologist" },
        { label: "Pharmacist", value: "Pharmacist" },
        { label: "Surgeon", value: "Surgeon" },
    ];

    const [datadisplay, setDatadisplay] = useState<
        { label: string; value: string }[]
    >([]);
    const [showModal, setShowModal] = useState(false);
    const [healthProviderValue, setHealthProviderValue] = useState("");
    const [UrgencyValue, setUrgencyValue] = useState("");
    const [locationValue, setLocationValue] = useState("");
    const [title, setTitle] = useState("");

    // State to track the current setter function
    const [currentSetter, setCurrentSetter] = useState<React.Dispatch<
        React.SetStateAction<string>
    > | null>(null);
    const urgent = [
        { label: "Urgent Care", value: "Urgent Care" },
        { label: "Non-Urgent Care", value: "Non-Urgent Care" },
    ];
    const location = [
        { label: "Video Consultation", value: "Video Consultation" },
        { label: "Home Consultation", value: "Home Consultation" },
        { label: "Clinic Consultation", value: "Clinic Consultation" },
    ];

    const handleSelectValue: HandleSelectValue = (value) => {
        if (currentSetter) {
            currentSetter(value);
        }
        setShowModal(false);
    };

    // Save action
    const handleSave = () => {
        console.log("Saved:", {
            healthProvider: healthProviderValue,
        });
        setShowQuestionsModal(false);
    };

    return (
        <>
            {showModal && (
                <View className="absolute h-full z-50 justify-center items-center w-full">
                    <DataDisplayModal
                        setshowmodal={setShowModal}
                        data={datadisplay}
                        setSelectedValue={handleSelectValue} // Generic function to set the selected value
                        title={title}
                    />
                </View>
            )}
            {showQuestionsModal ? (
                <View className="flex-1 p-6">
                    <ScrollView>
                        <View className="gap-y-6">
                            <Text className="" style={[Textstyles.text_cmedium]}>
                                What sector would you like to book?
                            </Text>
                            <CustomDropdownWithHeader
                                headerText="Healthcare provider"
                                options={healthprovider}
                                placeholder="Select healthcare provider"
                                onChange={(value) => setHealthProviderValue(value)}
                                value={healthProviderValue}
                            />
                            <CustomDropdownWithHeader
                                headerText="Urgency"
                                options={urgent}
                                placeholder="How soon do you want care?"
                                onChange={(value) => setUrgencyValue(value)}
                                value={UrgencyValue}
                            />
                            <CustomDropdownWithHeader
                                headerText="Location"
                                options={location}
                                placeholder="Where do you want care?"
                                onChange={(value) => setLocationValue(value)}
                                value={locationValue}
                            />
                        </View>
                    </ScrollView>
                    <CustomButton
                        Textname="Save"
                        backgroundColor={primarycolor}
                        TextColor={whitecolor}
                        onPress={handleSave}
                    />
                </View>
            ) : (
                <View className="w-full h-full flex p-5 gap-y-6">
                    <View className="">
                        <CustomInputSearch
                            placeholder="Search for chat"
                            leftIcon={<FontAwesome name="search" color="#000" size={20} />}
                            value={searchValue}
                            onChange={(text) => setSearchValue(text)}
                        />
                    </View>
                    <View className="flex-1">
                        <ScrollView>
                            <View className="gap-y-3">
                                {healthProviderList.map((provider, index) => (
                                    <ProviderCard
                                        key={index}
                                        name={provider.name}
                                        title={provider.title}
                                        rating={provider.rating}
                                        reviews={50}
                                        likes={provider.likes}
                                        image={provider.image}
                                        onPress={() =>
                                            navigation.navigate("health-seeker", {
                                                screen: "appointment-details",
                                                params: { providerId: 1234 },
                                            })
                                        }
                                    />
                                ))}
                            </View>
                        </ScrollView>
                    </View>
                </View>
            )}
        </>
    );
};

export default HealthcareProvider;
