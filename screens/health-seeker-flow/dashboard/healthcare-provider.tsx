import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "types/stack";
import { Textstyles } from "constants/fontsize";
import { primarycolor, whitecolor } from "constants/color";
import { FontAwesome } from "@expo/vector-icons";
import { DataDisplayModal } from "components/utilities/data-display-modal";
import { SelectionPicker } from "components/utilities/selects";
import { CustomButton } from "components/utilities/buttons";
import { CustomInputSearch } from "components/utilities/inputs";
import { ProviderCard } from "components/utilities/provider-card";

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

    const department = [
        { label: "Pediatrics", value: "Pediatrics" },
        { label: "Cardiology", value: "Cardiology" },
        { label: "Oncology", value: "Oncology" },
    ];

    const [datadisplay, setDatadisplay] = useState<
        { label: string; value: string }[]
    >([]);
    const [showModal, setShowModal] = useState(false);
    const [healthProviderValue, setHealthProviderValue] = useState("");
    const [UrgencyTitle, setUrgencyTitle] = useState(
        "How soon do you want care?"
    );
    const [LocationTitle, setLocationTitle] = useState("Where do you want care?");
    const [healthProviderTitle, setHealthProviderTitle] = useState(
        "Select Healthcare Provider"
    );
    const [departmentValue, setDepartmentValue] = useState("");
    const [UrgencyValue, setUrgencyValue] = useState("");
    const [locationValue, setLocationValue] = useState("");
    const [departmentTitle, setDepartmentTitle] = useState("Select Department");
    const [title, setTitle] = useState("");

    // Show modal and set data display
    const handleShowModal: HandleShowModal = (
        data,
        modalTitle,
        setSelectedValue
    ) => {
        setDatadisplay(data);
        setTitle(modalTitle);
        setShowModal(true);
        setCurrentSetter(() => setSelectedValue); // Store the setter function
    };

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
            department: departmentValue,
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
                <>
                    <Text
                        className="text-[28px] font-semibold mt-5 ml-8 mb-7"
                        style={[Textstyles.text_cmedium]}
                    >
                        What sector would you like to book?
                    </Text>
                    <View className="px-3">
                        <View>
                            <Text style={[Textstyles.text_xmedium]}>Healthcare provider</Text>
                        </View>
                        <SelectionPicker
                            Title={healthProviderValue || healthProviderTitle}
                            onPress={() =>
                                handleShowModal(
                                    healthprovider,
                                    "Select Healthcare Provider",
                                    setHealthProviderValue
                                )
                            }
                        />
                        <View className="h-3" />
                        <View>
                            <Text style={[Textstyles.text_xmedium]}>Dapartment</Text>
                        </View>
                        <SelectionPicker
                            Title={departmentValue || departmentTitle}
                            onPress={() =>
                                handleShowModal(
                                    department,
                                    "Select Department",
                                    setDepartmentValue
                                )
                            }
                        />
                        <View className="h-3" />
                        <View>
                            <Text style={[Textstyles.text_xmedium]}>Urgency</Text>
                        </View>
                        <SelectionPicker
                            Title={UrgencyValue || UrgencyTitle}
                            onPress={() =>
                                handleShowModal(
                                    urgent,
                                    "How soon do you want care?",
                                    setUrgencyValue
                                )
                            }
                        />
                        <View className="h-3" />
                        <View>
                            <Text style={[Textstyles.text_xmedium]}>Location</Text>
                        </View>
                        <SelectionPicker
                            Title={locationValue || LocationTitle}
                            onPress={() =>
                                handleShowModal(
                                    location,
                                    "Where do you want care?",
                                    setLocationValue
                                )
                            }
                        />
                    </View>
                    <View className="mt-10 px-3">
                        <CustomButton
                            Textname={"Save"}
                            backgroundColor={primarycolor}
                            TextColor={whitecolor}
                            onPress={handleSave}
                        />
                    </View>
                </>
            ) : (
                <View className="w-full h-full flex">
                    <View className="mt-3 px-3">
                        <CustomInputSearch
                            placeholder="Search for chat"
                            leftIcon={<FontAwesome name="search" color="#000" size={20} />}
                            value={searchValue}
                            onChange={(text) => setSearchValue(text)}
                        />
                    </View>
                    <View className="mt-5 px-3 flex-1">
                        <ScrollView>
                            <ProviderCard
                                name="Dr Micheal Brains"
                                title="Gyneacologist"
                                rating={5}
                                reviews={50}
                                likes={100}
                                image="image_url_1"
                                onPress={() => navigation.navigate("apponitmentdetails")}
                            />
                            <ProviderCard
                                name="Dr Adeola Segusi"
                                title="Neulogist"
                                rating={5}
                                reviews={50}
                                likes={80}
                                image="image_url_2"
                                onPress={() => navigation.navigate("apponitmentdetails")}
                            />
                            <ProviderCard
                                name="Dr Babalola Tope"
                                title="General Medical Practioner"
                                rating={5}
                                reviews={50}
                                likes={120}
                                image="image_url_3"
                                onPress={() => navigation.navigate("apponitmentdetails")}
                            />
                            <ProviderCard
                                name="Dr Babalola Tope"
                                title="General Medical Practioner"
                                rating={5}
                                reviews={50}
                                likes={120}
                                image="image_url_3"
                                onPress={() => navigation.navigate("apponitmentdetails")}
                            />
                            <ProviderCard
                                name="Dr Babalola Tope"
                                title="General Medical Practioner"
                                rating={5}
                                reviews={50}
                                likes={120}
                                image="image_url_3"
                                onPress={() => navigation.navigate("apponitmentdetails")}
                            />
                            <ProviderCard
                                name="Dr Babalola Tope"
                                title="General Medical Practioner"
                                rating={5}
                                reviews={50}
                                likes={120}
                                image="image_url_3"
                                onPress={() => navigation.navigate("apponitmentdetails")}
                            />
                            <ProviderCard
                                name="Dr Babalola Tope"
                                title="General Medical Practioner"
                                rating={5}
                                reviews={50}
                                likes={120}
                                image="image_url_3"
                                onPress={() => navigation.navigate("apponitmentdetails")}
                            />
                            <ProviderCard
                                name="Dr Madame Koko"
                                title="Optomist"
                                rating={5}
                                reviews={50}
                                likes={90}
                                image="image_url_4"
                                onPress={() => navigation.navigate("apponitmentdetails")}
                            />
                        </ScrollView>
                    </View>
                </View>
            )}
        </>
    );
};

export default HealthcareProvider;
