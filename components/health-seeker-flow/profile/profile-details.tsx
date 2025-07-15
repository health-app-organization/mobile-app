import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import DateTimePicker, { DateType } from "react-native-ui-datepicker";
import { formatDate } from "../../../utils/utility";
import { primarycolor, whitecolor } from "../../../constants/colors";
import { CustomButton } from "../../../utilities/buttons";
import { Textstyles } from "../../../constants/fontsize";
import CustomDropdownWithHeader from "../../../utilities/dropdowns";
import { CustomInputWithHeader } from "../../../utilities/inputs";
import { RootState, useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import { UserFormData } from "../../../types/general";
import { updateUser } from "../../../redux/slices/update-user";
import { ActivityIndicator } from "../../activity-indicator";

// Helper function to format date for API
const formatDateForAPI = (date: Date | undefined): string => {
  if (!date) return "";
  return date.toISOString().split("T")[0]; // YYYY-MM-DD
};

const ProfileDetailsPage = () => {
  const user = useSelector((state: RootState) => state.dashboard.data);

  const dispatch = useAppDispatch();

  const loading = useSelector((state: RootState) => state.dashboard.loading);

  const [formData, setFormData] = useState({
    firstName: user?.seeker?.firstName || "",
    lastName: user?.seeker?.lastName || "",
    dateOfBirth: "",
    gender: "",
    bloodGroup: "",
    height: "",
    weight: "",
    // Add maritalStatus if needed
    maritalStatus: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<DateType>();
  const [openDateModal, setOpenDateModal] = useState(false);

  const calculateProfileCompletion = () => {
    const totalFields = Object.keys(formData).length;
    const completedFields = Object.values(formData).filter(
      (value) => value !== "" && value !== null
    ).length;
    return (completedFields / totalFields) * 100;
  };

  const profileCompletion = calculateProfileCompletion();

  const bloodGroupOptions = [
    { label: "A+", value: "A+" },
    { label: "A-", value: "A-" },
    { label: "A", value: "A" }, //!to be removed
    { label: "B+", value: "B+" },
    { label: "B-", value: "B-" },
    { label: "AB+", value: "AB+" },
    { label: "AB-", value: "AB-" },
    { label: "O+", value: "O+" },
    { label: "O-", value: "O-" },
  ];

  const maritalStatusOptions = [
    { label: "Single", value: "single" },
    { label: "Married", value: "married" },
    { label: "Divorced", value: "divorced" },
  ];

  const active = [
    { label: "Athletic (very high)", value: "athletic" },
    { label: "Active (High)", value: "active" },
    {
      label: "Moderately active (normal)",
      value: "moderatelyActive",
    },
    { label: "  Sedentary (low)", value: "sedentary" },
  ];

  const diet = [
    { label: "Vegetarian", value: "vegetarian" },
    { label: "Non-Vegetarian", value: "nonVegetarian" },
    { label: "Vegan", value: "vegan" },
    { label: " Eggetarian", value: " eggetarian" },
  ];

  const occupationOptions = [
    { label: "Student", value: "Student" },
    { label: "Employed", value: "Employed" },
    { label: "Self-Employed", value: "Self-Employed" },
    { label: "Unemployed", value: "Unemployed" },
    { label: "Retired", value: "Retired" },
    { label: "Other", value: "Other" },
  ];

  const handleInputChange = (name: keyof UserFormData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formList = [
    {
      inputType: "input",
      headerText: "First name",
      placeHolder: "Enter your first name",
      leftIconName: "user",
      value: formData.firstName,
      onChange: (text: string) => handleInputChange("firstName", text),
    },
    {
      inputType: "input",
      headerText: "Last name",
      placeHolder: "Enter your last name",
      leftIconName: "user",
      value: formData.lastName,
      onChange: (text: string) => handleInputChange("lastName", text),
    },

    {
      inputType: "date-picker",
      headerText: "Date of birth",
      placeHolder: "Enter your date of birth",
      leftIconName: "calendar",
      value: formData.dateOfBirth,
      onChange: (text: string) => handleInputChange("birthDate", text),
    },
    {
      inputType: "dropdown",
      headerText: "Gender",
      placeHolder: "Enter your date of birth",
      leftIconName: "calendar",
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
      ],
      value: formData.gender,
      onChange: (value: string) => handleInputChange("gender", value),
    },
    {
      inputType: "dropdown",
      headerText: "Blood Group",
      placeHolder: "Select your blood group",
      options: bloodGroupOptions,
      value: formData.bloodGroup,
      onChange: (value: string) => handleInputChange("bloodGroup", value),
    },
    {
      inputType: "dropdown",
      headerText: "Height",
      placeHolder: "Select your height",
      options: [
        { label: "5'0", value: "5'0" },
        { label: "5'1", value: "5'1" },
        { label: "5'2", value: "5'2" },
        { label: "5'3", value: "5'3" },
        { label: "5'4", value: "5'4" },
        { label: "5'5", value: "5'5" },
        { label: "5'6", value: "5'6" },
        { label: "5'7", value: "5'7" },
        { label: "5'8", value: "5'8" },
        { label: "5'9", value: "5'9" },
        { label: "5'10", value: "5'10" },
        { label: "5'11", value: "5'11" },
        { label: "6'0", value: "6'0" },
        { label: "6'1", value: "6'1" },
        { label: "6'2", value: "6'2" },
        { label: "6'3", value: "6'3" },
        { label: "6'4", value: "6'4" },
        { label: "6'5", value: "6'5" },
        { label: "6'6", value: "6'6" },
        { label: "6'7", value: "6'7" },
        { label: "6'8", value: "6'8" },
        { label: "6'9", value: "6'9" },
        { label: "6'10", value: "6'10" },
        { label: "6'11", value: "6'11" },
      ],
      value: formData.height,
      onChange: (text: string) => handleInputChange("height", text),
    },
    {
      inputType: "dropdown",
      headerText: "Weight",
      placeHolder: "Select your weight",
      options: [
        { label: "40kg", value: "40kg" },
        { label: "41kg", value: "41kg" },
        { label: "42kg", value: "42kg" },
        { label: "43kg", value: "43kg" },
        { label: "44kg", value: "44kg" },
        { label: "45kg", value: "45kg" },
        { label: "46kg", value: "46kg" },
        { label: "47kg", value: "47kg" },
        { label: "48kg", value: "48kg" },
        { label: "49kg", value: "49kg" },
        { label: "50kg", value: "50kg" },
        { label: "51kg", value: "51kg" },
        { label: "52kg", value: "52kg" },
        { label: "53kg", value: "53kg" },
        { label: "54kg", value: "54kg" },
        { label: "55kg", value: "55kg" },
        { label: "56kg", value: "56kg" },
        { label: "57kg", value: "57kg" },
        { label: "58kg", value: "58kg" },
        { label: "59kg", value: "59kg" },
        { label: "60kg", value: "60kg" },
        { label: "61kg", value: "61kg" },
        { label: "62kg", value: "62kg" },
        { label: "63kg", value: "63kg" },
        { label: "64kg", value: "64kg" },
        { label: "65kg", value: "65kg" },
        { label: "66kg", value: "66kg" },
        { label: "67kg", value: "67kg" },
        { label: "68kg", value: "68kg" },
        { label: "69kg", value: "69kg" },
        { label: "70kg", value: "70kg" },
        { label: "71kg", value: "71kg" },
        { label: "72kg", value: "72kg" },
        { label: "73kg", value: "73kg" },
        { label: "74kg", value: "74kg" },
        { label: "75kg", value: "75kg" },
        { label: "76kg", value: "76kg" },
      ],
      value: formData.weight,
      onChange: (text: string) => handleInputChange("weight", text),
    },
    {
      inputType: "dropdown",
      headerText: "Marital Status",
      placeHolder: "Select your marital status",
      options: maritalStatusOptions,
      value: formData.maritalStatus,
      onChange: (text: string) => handleInputChange("activityLevel", text),
    },
  ];

  const handleUpdateUser = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    // Prepare the data for the updateUser action
    const updateData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      dateOfBirth: formData.dateOfBirth,
      gender: formData.gender,
      bloodGroup: formData.bloodGroup,
      maritalStatus: formData.maritalStatus, // Add if needed
      height: formData.height,
      weight: formData.weight,
    };

    // Dispatch the updateUser action
    await dispatch(updateUser(updateData)).unwrap();

    setIsLoading(false);
  };

  const [selected, setSelected] = useState<DateType>();

  if (loading) {
    return (
      <View className="flex justify-center items-center h-screen">
        <ActivityIndicator size={64} />
      </View>
    );
  }

  return (
    <>
      <View className="flex-1">
        <View className="flex-1">
          <ScrollView>
            <View className="gap-y-4 pb-1 pt-6 px-6">
              {formList.map((item, index) => {
                if (item.inputType === "input") {
                  return (
                    <View className="" key={index}>
                      <CustomInputWithHeader
                        headerText={item.headerText}
                        placeholder={item.placeHolder}
                        leftIcon={
                          <FontAwesome
                            name={
                              item.leftIconName as keyof typeof FontAwesome.glyphMap
                            }
                            color="#000"
                            size={20}
                          />
                        }
                        value={item.value}
                        onChange={item.onChange}
                      />
                    </View>
                  );
                } else if (item.inputType === "dropdown") {
                  return (
                    <View className="" key={index}>
                      <CustomDropdownWithHeader
                        headerText={item.headerText}
                        options={item.options || []}
                        placeholder={item.placeHolder}
                        value={item.value}
                        onChange={item.onChange}
                      />
                    </View>
                  );
                } else if (item.inputType === "date-picker") {
                  return (
                    <View className="" key={index}>
                      <Text
                        className="text-lg font-bold mb-2"
                        style={[Textstyles.text_cmedium]}
                      >
                        Date of Birth
                      </Text>
                      <TouchableOpacity
                        className="border border-primary rounded-md p-4 flex-row items-center gap-x-4"
                        onPress={() => setOpenDateModal(true)}
                      >
                        <FontAwesome name="calendar" size={20} color="#000" />
                        <Text className="">{formatDate(selected)}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                }
                return null;
              })}
            </View>
          </ScrollView>
        </View>
        <View className="pb-6 px-6">
          <CustomButton
            Textname="Save"
            backgroundColor={primarycolor}
            TextColor={whitecolor}
            onPress={handleUpdateUser}
            isLoading={isLoading}
            disabled={profileCompletion < 100}
          />
        </View>
        {openDateModal && (
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <TouchableOpacity
                onPress={() => setOpenDateModal(false)}
                style={styles.closeButton}
              >
                <FontAwesome name="times" size={20} color={primarycolor} />
              </TouchableOpacity>
              <View style={styles.spacer} />
              <DateTimePicker
                mode="single"
                date={selected}
                onChange={({ date }) => {
                  setSelected(date);
                  formData.dateOfBirth = formatDate(date);
                }}
              />
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default ProfileDetailsPage;
const styles = StyleSheet.create({
  modalOverlay: {
    position: "absolute",
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // #00000050 equivalent
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
  modalContainer: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "lightgrey",
    borderRadius: 8,
    padding: 16,
  },
  closeButton: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  spacer: {
    height: 40,
  },
});
