import React, { useState } from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { primarycolor, whitecolor } from "../../../constants/color";
import { CustomDropdownWithHeader } from "components/utilities/dropdowns";
import { CustomButton } from "components/utilities/buttons";

const Medical = () => {
  const [allergy, setAllergy] = useState("Lactose");
  const allergies = [
    { label: "Lactose", value: "Lactose" },
    { label: "Soy", value: "Soy" },
    { label: "Seafood", value: "Seafood" },
    { label: "Nuts", value: "Nuts" },
    { label: "Eggs", value: "Eggs" },
    { label: "Fish", value: "Fish" },
  ];

  const [medication, setMedication] = useState("21st Century fish oil");
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

  const [pastMedication, setPastMedication] = useState("ACCULOL");
  const pastMedications = medications; // Use the same array for past medications

  const [disease, setDisease] = useState("Diabetes");
  const diseases = [
    { label: "Diabetes", value: "Diabetes" },
    { label: "Hypertension", value: "Hypertension" },
    { label: "PCOS", value: "PCOS" },
    { label: "Hypothyroidism", value: "Hypothyroidism" },
    { label: "COPD", value: "COPD" },
    { label: "Asthma", value: "Asthma" },
  ];

  const [surgery, setSurgery] = useState("Heart");
  const surgeries = [
    { label: "Heart", value: "Heart" },
    { label: "Liver", value: "Liver" },
    { label: "Kidney", value: "Kidney" },
    { label: "Lungs", value: "Lungs" },
    { label: "Brain", value: "Brain" },
  ];

  const [injury, setInjury] = useState("Fracture");
  const injuries = [
    { label: "Fracture", value: "Fracture" },
    { label: "Sprain", value: "Sprain" },
    { label: "Dislocation", value: "Dislocation" },
    { label: "Burn", value: "Burn" },
    { label: "Cut/Wound", value: "Cut/Wound" },
    { label: "Other", value: "Other" },
  ];

  const [smokingHabit, setSmokingHabit] = useState("I don’t smoke at all");
  const smokingHabits = [
    { label: "1-2/day", value: "1-2/day" },
    { label: "I don’t smoke at all", value: "I don’t smoke at all" },
    {
      label: "I used to, but I have quit",
      value: "I used to, but I have quit",
    },
  ];

  const [alcoholConsumption, setAlcoholConsumption] = useState("Non-drinker");
  const alcoholConsumptionList = [
    { label: "Non-drinker", value: "Non-drinker" },
    { label: "Rare", value: "Rare" },
    { label: "Socially", value: "Socially" },
    { label: "Regularly", value: "Regularly" },
    { label: "Heavy", value: "Heavy" },
  ];

  return (
    <View className="flex-1">
      <ScrollView className="">
        <View className="gap-y-4 p-6">
          <CustomDropdownWithHeader
            headerText="Allergy"
            placeholder="Any Allergy"
            options={allergies}
            value={allergy}
            onChange={(val) => setAllergy(val)}
          />
          <CustomDropdownWithHeader
            headerText="Current Medication"
            placeholder="Any Current Medication"
            options={medications}
            value={medication}
            onChange={(val) => setMedication(val)}
          />
          <CustomDropdownWithHeader
            headerText="Past Medication"
            placeholder="Any Past Medication"
            options={pastMedications}
            value={pastMedication}
            onChange={(val) => setPastMedication(val)}
          />
          <CustomDropdownWithHeader
            headerText="Chronic Disease"
            placeholder="Any Chronic Disease"
            options={diseases}
            value={disease}
            onChange={(val) => setDisease(val)}
          />
          <CustomDropdownWithHeader
            headerText="Injuries"
            placeholder="Any Injuries"
            options={injuries}
            value={injury}
            onChange={(val) => setInjury(val)}
          />
          <CustomDropdownWithHeader
            headerText="Surgery"
            placeholder="Any Past Surgery"
            options={surgeries}
            value={surgery}
            onChange={(val) => setSurgery(val)}
          />
          <CustomDropdownWithHeader
            headerText="Smoking Habit"
            placeholder="Any Smoking Habit"
            options={smokingHabits}
            value={smokingHabit}
            onChange={(val) => setSmokingHabit(val)}
          />
          <CustomDropdownWithHeader
            headerText="Alcohol Consumption"
            placeholder="How frequently do you drink alcohol"
            options={alcoholConsumptionList}
            value={alcoholConsumption}
            onChange={(val) => setAlcoholConsumption(val)}
          />
        </View>
      </ScrollView>
      <View className="pb-6 px-6">
        <CustomButton
          Textname={"Save"}
          backgroundColor={primarycolor}
          TextColor={whitecolor}
        />
      </View>
    </View>
  );
};

export default Medical;
