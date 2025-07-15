import React, { useState } from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { primarycolor, whitecolor } from "../../../constants/colors";
import { CustomButton } from "../../../utilities/buttons";
import CustomDropdownWithHeader from "../../../utilities/dropdowns";
import { RootState, useAppDispatch } from "../../../redux/store";
import { medicalRecords } from "../../../redux/slices/medical-records";
import { useSelector } from "react-redux";

const Medical = () => {
  const dispatch = useAppDispatch();

  const loading = useSelector(
    (state: RootState) => state.medicalRecords.loading
  );

  const [allergy, setAllergy] = useState("");
  const [medication, setMedication] = useState("");
  const [pastMedication, setPastMedication] = useState("");
  const [disease, setDisease] = useState("");
  const [surgery, setSurgery] = useState("");
  const [injury, setInjury] = useState("");
  const [smokingHabit, setSmokingHabit] = useState("");
  const [alcoholConsumption, setAlcoholConsumption] = useState("");

  const allergies = [
    { label: "Lactose", value: "Lactose" },
    { label: "Soy", value: "Soy" },
    { label: "Seafood", value: "Seafood" },
    { label: "Nuts", value: "Nuts" },
    { label: "Eggs", value: "Eggs" },
    { label: "Fish", value: "Fish" },
  ];

  const medications = [
    { label: "21st Century fish oil", value: "21st Century fish oil" },
    { label: "Abidec", value: "Abidec" },
    {
      label: "Accord Bendroflumethiazide",
      value: "Accord Bendroflumethiazide",
    },
    { label: "ACCULOL", value: "ACCULOL" },
    { label: "ACTAVIS DOXYCYCLINE", value: "ACTAVIS DOXYCYCLINE" },
    { label: "ACTINAZA", value: "ACTINAZA" },
    { label: "ADAY kit tablets", value: "ADAY kit tablets" },
    { label: "Afrab Vite", value: "Afrab Vite" },
    { label: "AFRICO 1000 CAPSULES", value: "AFRICO 1000 CAPSULES" },
  ];

  const pastMedications = medications; // Use the same array for past medications

  const diseases = [
    { label: "Diabetes", value: "Diabetes" },
    { label: "Hypertension", value: "Hypertension" },
    { label: "PCOS", value: "PCOS" },
    { label: "Hypothyroidism", value: "Hypothyroidism" },
    { label: "COPD", value: "COPD" },
    { label: "Asthma", value: "Asthma" },
  ];

  const surgeries = [
    { label: "Heart", value: "Heart" },
    { label: "Liver", value: "Liver" },
    { label: "Kidney", value: "Kidney" },
    { label: "Lungs", value: "Lungs" },
    { label: "Brain", value: "Brain" },
  ];

  const injuries = [
    { label: "Fracture", value: "Fracture" },
    { label: "Sprain", value: "Sprain" },
    { label: "Dislocation", value: "Dislocation" },
    { label: "Burn", value: "Burn" },
    { label: "Cut/Wound", value: "Cut/Wound" },
    { label: "Other", value: "Other" },
  ];

  const smokingHabits = [
    { label: "1-2/day", value: "1-2/day" },
    { label: "I don’t smoke at all", value: "I don’t smoke at all" },
    {
      label: "I used to, but I have quit",
      value: "I used to, but I have quit",
    },
  ];

  const alcoholConsumptionList = [
    { label: "Non-drinker", value: "Non-drinker" },
    { label: "Rare", value: "Rare" },
    { label: "Socially", value: "Socially" },
    { label: "Regularly", value: "Regularly" },
    { label: "Heavy", value: "Heavy" },
  ];

  const updateMedical = async () => {
    // Prepare the data object
    const medicalData = {
      allergies: allergy,
      currMed: medication,
      pastMed: pastMedication,
      chronicDisease: disease,
      injuries: injury,
      surgeries: surgery,
      smokingHabits: smokingHabit,
      alcoholConsumption: alcoholConsumption,
    };
    // Dispatch the medicalRecords action
    await dispatch(medicalRecords(medicalData)).unwrap();
  };

  return (
    <View className="flex-1">
      <ScrollView className="">
        <View className="gap-y-4 p-6">
          <CustomDropdownWithHeader
            headerText="Allergy"
            placeholder="Any Allergy"
            options={allergies}
            value={allergy}
            onChange={setAllergy}
          />
          <CustomDropdownWithHeader
            headerText="Current Medication"
            placeholder="Any Current Medication"
            options={medications}
            value={medication}
            onChange={setMedication}
          />
          <CustomDropdownWithHeader
            headerText="Past Medication"
            placeholder="Any Past Medication"
            options={pastMedications}
            value={pastMedication}
            onChange={setPastMedication}
          />
          <CustomDropdownWithHeader
            headerText="Chronic Disease"
            placeholder="Any Chronic Disease"
            options={diseases}
            value={disease}
            onChange={setDisease}
          />
          <CustomDropdownWithHeader
            headerText="Injuries"
            placeholder="Any Injuries"
            options={injuries}
            value={injury}
            onChange={setInjury}
          />
          <CustomDropdownWithHeader
            headerText="Surgery"
            placeholder="Any Past Surgery"
            options={surgeries}
            value={surgery}
            onChange={setSurgery}
          />
          <CustomDropdownWithHeader
            headerText="Smoking Habit"
            placeholder="Any Smoking Habit"
            options={smokingHabits}
            value={smokingHabit}
            onChange={setSmokingHabit}
          />
          <CustomDropdownWithHeader
            headerText="Alcohol Consumption"
            placeholder="How frequently do you drink alcohol"
            options={alcoholConsumptionList}
            value={alcoholConsumption}
            onChange={setAlcoholConsumption}
          />
        </View>
      </ScrollView>
      <View className="pb-6 px-6">
        <CustomButton
          Textname={"Save"}
          backgroundColor={primarycolor}
          TextColor={whitecolor}
          onPress={updateMedical}
        />
      </View>
    </View>
  );
};

export default Medical;
