import StepHeader from "components/health-provider/dashboard/registration/step-header";
import YourProfile from "components/health-provider/dashboard/registration/your-profile";
import { CustomButton } from "components/utilities/buttons";
import { HeaderWithTitleAndBackButton } from "components/utilities/headers";
import { useEffect, useLayoutEffect, useState } from "react";
import { BackHandler, Image, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { CustomInputSearch } from "components/utilities/inputs";
import AddQualification from "components/health-provider/dashboard/registration/add-qualification";
import RegistrationDetails from "components/health-provider/dashboard/registration/registration-details";
import OtherInformation from "components/health-provider/dashboard/registration/other-information";
import { primarycolor } from "constants/color";
import DateTimePicker, { DateType } from "react-native-ui-datepicker";
import { formatDate } from "utilities/utility";
import Availability from "components/health-provider/dashboard/registration/availability";
import Credentials from "components/health-provider/dashboard/registration/credentials";
import SessionTiming from "components/health-provider/dashboard/registration/session-timing";

export default function CompleteRegistration({
    navigation,
}: {
    navigation: any;
}) {
    const [currentPage, setCurrentPage] = useState<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>(
        0
    );
    const [showClinicModal, setShowClinicModal] = useState(false);
    const [clinicSearch, setClinicSearch] = useState("");
    const [openDateModal, setOpenDateModal] = useState(false);
    const [selected, setSelected] =
        useState<DateType>(new Date("1990-01-01T00:00:00.000Z"));
    const [birthDate, setBirthDate] = useState("");
    console.log(currentPage);
    const handleOnPress = async () => {
        if (currentPage === 0) {
            setCurrentPage(3);
        } else if (currentPage === 3) {
            setCurrentPage(6);
        } else if (currentPage === 6) {
            navigation.navigate("health-provider", { screen: "dashboard" });
        } else {
            // setCurrentPage(currentPage + 1);
        }
    }
    useEffect(() => {
        const handleBackPress = () => {
            if (currentPage === 0) {
                navigation.goBack();
                return true;
            } else if (currentPage === 1 || currentPage === 2 || currentPage === 3) {
                setCurrentPage(0);
                return true;
            } else if (currentPage === 4 || currentPage === 5 || currentPage === 6) {
                setCurrentPage(3);
                return true;
            }
            return true;
        };

        BackHandler.addEventListener("hardwareBackPress", handleBackPress);

        return () => {
            BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
        };
    }, [navigation, currentPage]);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Complete Registration",
            header: () => {
                if (currentPage === 0 || currentPage === 3 || currentPage === 6) {
                    return (
                        <StepHeader
                            step={currentPage === 0 ? 1 : currentPage === 3 ? 2 : 3}
                            title={
                                currentPage === 0
                                    ? "Your Profile"
                                    : currentPage === 3
                                        ? "Other Information"
                                        : "Credentials"
                            }
                            description={
                                currentPage === 0
                                    ? "Update your profile information"
                                    : currentPage === 3
                                        ? "Update your profile information"
                                        : "Update your documents/license"
                            }
                        />
                    );
                } else {
                    return (
                        <HeaderWithTitleAndBackButton
                            title={
                                currentPage === 1
                                    ? "Add Qualification"
                                    : currentPage === 2
                                        ? "Registration details"
                                        : currentPage === 4
                                            ? "Availability"
                                            : currentPage === 5
                                                ? "Session Timing"
                                                : undefined
                            }
                            onBackPress={() => {
                                if (currentPage === 1 || currentPage === 2) {
                                    setCurrentPage(0);
                                }
                                if (currentPage === 4 || currentPage === 5) {
                                    setCurrentPage(3);
                                }
                            }}
                        />
                    );
                }
            },
        });
    }, [navigation, currentPage]);
    return (
        <View className="flex-1">
            <ScrollView className="px-4">
                <View className="h-4" />
                <View className="flex-1 gap-y-8">
                    <View className="gap-y-4">
                        {currentPage === 0 && (
                            <YourProfile
                                setCurrentPage={setCurrentPage}
                                setShowClinicModal={setShowClinicModal}
                            />
                        )}
                        {currentPage === 1 && (
                            <AddQualification />
                        )}
                        {currentPage === 2 && (
                            <RegistrationDetails />
                        )}
                        {currentPage === 3 && (
                            <OtherInformation
                                setOpenDateModal={setOpenDateModal}
                                selected={selected}
                                setCurrentPage={setCurrentPage}
                            />
                        )}
                        {currentPage === 4 && (
                            <Availability />
                        )}
                        {currentPage === 5 && (
                            <SessionTiming />
                        )}
                        {currentPage === 6 && (
                            <Credentials />
                        )}
                    </View>
                    <CustomButton
                        Textname={
                            currentPage === 0 || currentPage === 3 || currentPage === 6
                                ? "Continue"
                                : "Save"
                        }
                        onPress={handleOnPress}
                    />
                </View>
            </ScrollView>
            <Modal
                visible={showClinicModal}
                animationType="slide"
                onRequestClose={() => setShowClinicModal(false)}
                transparent
            >
                <View className="flex-1 w-full bg-black/50 justify-end">
                    <View className="w-full h-[80%] bg-white rounded-t-[60px] py-12 px-8 gap-y-4">
                        <View className="justify-end flex-row">
                            <FontAwesome5 name="times" size={24} onPress={() => setShowClinicModal(false)} />
                        </View>
                        <CustomInputSearch
                            placeholder="Search clinic"
                            value={clinicSearch}
                            onChange={(text) => setClinicSearch(text)}
                            leftIcon={
                                <Image
                                    source={require("../../../assets/png-icon/search-01.png")}
                                    className="size-6"
                                    resizeMode="contain"
                                />
                            }
                        />
                        <View className="flex-1">
                            <Text className="m-auto font-semibold text-base">No result found</Text>
                        </View>
                    </View>
                </View>
            </Modal>
            {openDateModal && (
                <View className="absolute flex-1 bg-[#00000050] h-screen w-full justify-center">
                    <View className="w-[80%] mx-auto bg-white rounded-md p-4">
                        <TouchableOpacity onPress={() => setOpenDateModal(false)} className="flex-row justify-end">
                            <FontAwesome name="times" size={20} color={primarycolor} />
                        </TouchableOpacity>
                        <View className="h-10" />
                        <DateTimePicker
                            mode="single"
                            date={selected}
                            onChange={({ date }) => {
                                setSelected(date);
                                setBirthDate(formatDate(date));
                            }}
                            selectedRangeBackgroundColor={primarycolor}
                        />
                    </View>
                </View>
            )}
        </View>
    );
}
