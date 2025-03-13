import React, { useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { primarycolor, whitecolor } from "../../../../constants/color";
import useAuthStore from "../../../../store/auth-store";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { baseUrl } from "../../../../api/end-point";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../../../types/stack";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Textstyles } from "constants/fontsize";
import DateTimePicker, { DateType } from "react-native-ui-datepicker";
import { formatDate } from "utilities/utility";
import { UserFormData } from "types/general";
import { Header9 } from "components/utilities/headers";
import { CustomInputWithHeader } from "components/utilities/inputs";
import { CustomDropdownWithHeader } from "components/utilities/dropdowns";
import { CustomButton } from "components/utilities/buttons";

const Personal = () => {
  const { login, getUser } = useAuthStore();
  const user = getUser();
  const navigation = useNavigation<StackNavigation>();

  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    birthDate: user?.birthDate || "",
    gender: user?.gender || "",
    bloodGroup: user?.bloodGroup || "",
    height: user?.height || "",
    weight: user?.weight || "",
    activityLevel: user?.activityLevel || "",
    foodPreferences: user?.foodPreferences || "",
    occupation: user?.occupation || "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
      inputType: "input",
      headerText: "Email address",
      placeHolder: "Enter your email address",
      leftIconName: "envelope",
      value: formData.email,
      onChange: (text: string) => handleInputChange("email", text),
    },
    {
      inputType: "input",
      headerText: "Phone number",
      placeHolder: "Enter your phone number",
      leftIconName: "phone",
      value: formData.phoneNumber,
      onChange: (text: string) => handleInputChange("phoneNumber", text),
    },
    {
      inputType: "date-picker",
      headerText: "Date of birth",
      placeHolder: "Enter your date of birth",
      leftIconName: "calendar",
      value: formData.birthDate,
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
      headerText: "Activity Level",
      placeHolder: "Select your activity level",
      options: active,
      value: formData.activityLevel,
      onChange: (text: string) => handleInputChange("activityLevel", text),
    },
    {
      inputType: "dropdown",
      headerText: "Food preference",
      placeHolder: "Select your food preference",
      options: diet,
      value: formData.foodPreferences,
      onChange: (text: string) => handleInputChange("foodPreferences", text),
    },
    {
      inputType: "dropdown",
      headerText: "Occupation",
      placeHolder: "Select your occupation",
      options: occupationOptions,
      value: formData.occupation,
      onChange: (text: string) => handleInputChange("occupation", text),
    },
  ];

  const handleUpdateUser = async () => {
    setIsLoading(true);
    const role = await AsyncStorage.getItem("role");
    const token = await AsyncStorage.getItem("token");

    const filteredFormData = Object.fromEntries(
      Object.entries(formData).filter(([key, value]) => value !== "")
    );

    try {
      if (user) {
        const response = await axios.put(
          `${baseUrl}/users/update/${user.id}`,
          { ...filteredFormData, role },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (
          response.status === 201 ||
          response.status === 200 ||
          response.status === 203
        ) {
          setErrorMessage("");
          login(response.data, {});
          Alert.alert("Profile updated successfully");
          navigation.navigate("profile");
        }
      }
    } catch (error: any) {
      if (error.response) {
        console.error("Error response:", error.response.data);

        // Extract the error message or compose it
        const message =
          error.response.data.error?.message ||
          JSON.stringify(error.response.data.error) ||
          "An error occurred. Please try again.";

        setErrorMessage(message);
      } else if (error.request) {
        console.error("Error request:", error.request);
        setErrorMessage(
          "No response from the server. Please check your network connection."
        );
      } else {
        console.error("Error message:", error.message);
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const [selected, setSelected] = useState<DateType>();
  const [openDateModal, setOpenDateModal] = useState(false);

  return (
    <SafeAreaView className="bg-primaryTwo">
      <StatusBar style="auto" backgroundColor="#00A8CC" />
      <FlatList
        alwaysBounceVertical={false}
        ListHeaderComponent={() => (
          <Header9
            profileName={user?.firstName + " " + user?.lastName}
            profileCompletion={profileCompletion.toFixed(0)}
          />
        )}
        data={formList}
        renderItem={({ item }) => {
          if (item.inputType === "input") {
            return (
              <View className="mx-4 my-1">
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
              <View className="mx-4 my-1">
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
              <View className="mx-4 my-1">
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
        }}
        keyExtractor={(item) => item.headerText}
        ListFooterComponent={() => (
          <>
            {errorMessage && (
              <Text className="text-red-500">{errorMessage}</Text>
            )}
            {profileCompletion < 100 && (
              <Text className="text-red-500">
                Complete all fields to save your profile
              </Text>
            )}
            <View className="h-1" />
            <CustomButton
              Textname="Save"
              backgroundColor={primarycolor}
              TextColor={whitecolor}
              onPress={handleUpdateUser}
              isLoading={isLoading}
              disabled={profileCompletion < 100}
            />
          </>
        )}
        ListFooterComponentStyle={{ padding: 10 }}
      />
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
                formData.birthDate = formatDate(date);
              }}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Personal;
