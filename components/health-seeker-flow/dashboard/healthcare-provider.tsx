import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { DataDisplayModal } from "../../../utilities/data-display-modal";
import { Textstyles } from "../../../constants/fontsize";
import { CustomDropdownWithHeader } from "../../../utilities/dropdowns";
import { CustomButton } from "../../../utilities/buttons";
import { CustomInputSearch } from "../../../utilities/inputs";
import { ProviderCard } from "../../../utilities/provider-card";
import { healthProviderList } from "../notification/notification-data";
import { primarycolor, whitecolor } from "../../../constants/colors";
// import { healthProviderList } from "mock-data/mock-data";

const HealthcareProvider = () => {
  //   const navigation = useNavigation<StackNavigation>();

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

  //   const handleSelectValue: HandleSelectValue = (value) => {
  //     if (currentSetter) {
  //       currentSetter(value);
  //     }
  //     setShowModal(false);
  //   };

  const handleSelectValue: React.Dispatch<React.SetStateAction<string>> = (
    value
  ) => {
    if (currentSetter) {
      currentSetter(value);
    }
    setShowModal(false);
  };

  const handleSave = () => {
    console.log("Saved:", {
      healthProvider: healthProviderValue,
    });
    setShowQuestionsModal(false);
  };

  return (
    <>
      {showModal && (
        <View style={styles.modalContainer}>
          <DataDisplayModal
            setshowmodal={setShowModal}
            data={datadisplay}
            setSelectedValue={handleSelectValue}
            title={title}
          />
        </View>
      )}
      {showQuestionsModal ? (
        <View style={styles.questionsContainer}>
          <ScrollView>
            <View style={styles.questionsContent}>
              <Text style={[Textstyles.text_cmedium, styles.questionText]}>
                What sector would you like to book?
              </Text>
              <CustomDropdownWithHeader
                headerText="Healthcare provider"
                options={healthprovider}
                placeholder="Select healthcare provider"
                onChange={(value: string) => setHealthProviderValue(value)}
                value={healthProviderValue}
              />
              <CustomDropdownWithHeader
                headerText="Urgency"
                options={urgent}
                placeholder="How soon do you want care?"
                onChange={(value: string) => setUrgencyValue(value)}
                value={UrgencyValue}
              />
              <CustomDropdownWithHeader
                headerText="Location"
                options={location}
                placeholder="Where do you want care?"
                onChange={(value: string) => setLocationValue(value)}
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
        <View style={styles.providerContainer}>
          <View style={styles.searchContainer}>
            <CustomInputSearch
              placeholder="Search for chat"
              leftIcon={<FontAwesome name="search" color="#000" size={20} />}
              value={searchValue}
              onChange={(text: string) => setSearchValue(text)}
            />
          </View>
          <View style={styles.providerListContainer}>
            <ScrollView>
              <View style={styles.providerList}>
                {healthProviderList.map((provider, index) => (
                  <ProviderCard
                    key={index}
                    name={provider.name}
                    title={provider.title}
                    rating={provider.rating}
                    reviews={50}
                    likes={provider.likes}
                    image={provider.image}
                    // onPress={() =>
                    //   navigation.navigate("health-seeker", {
                    //     screen: "appointment-details",
                    //     params: { providerId: 1234 },
                    //   })
                    // }
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

const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    height: "100%",
    zIndex: 50,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  questionsContainer: {
    flex: 1,
    padding: 24,
  },
  questionsContent: {
    gap: 24,
  },
  questionText: {
    marginBottom: 8,
  },
  providerContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    padding: 20,
    gap: 24,
  },
  searchContainer: {
    marginBottom: 8,
  },
  providerListContainer: {
    flex: 1,
  },
  providerList: {
    gap: 12,
  },
});

export default HealthcareProvider;
