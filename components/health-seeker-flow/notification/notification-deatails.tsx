import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Textstyles } from "../../../constants/fontsize";
import { CustomButton } from "../../../utilities/buttons";
import { lightBlue, primarycolor } from "../../../constants/colors";
import DrugItem from "../../../helper/DrugItem";
import DetailRow from "../../../helper/DetailRow";
interface DrugReferralDetailsProps {
  id: string | string[];
}

// This component displays detailed information about a drug referral

const DrugReferralDetails: React.FC<DrugReferralDetailsProps> = ({ id }) => {
  console.log("====================================");
  console.log("ID: ", id);
  console.log("====================================");
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={[Textstyles.text_cfmedium, styles.sectionTitle]}>
            Patient Information
          </Text>
          <DetailRow label="Patient name:" value="Praise" />
          <DetailRow label="Patient ID:" value="2819377489" />
          <DetailRow label="Patient contact number:" value="0903347593" />
          <DetailRow label="Patient email address:" value="Praise@gmail.com" />
        </View>

        <View style={styles.spacer} />

        <View style={styles.section}>
          <Text style={[Textstyles.text_cfmedium, styles.sectionTitle]}>
            Drug details
          </Text>
          <DrugItem name="Amoxicillin 500mg" quantity="10 tablets" />
          <DrugItem name="Ibuprofen 200mg" quantity="20 tablets" />
        </View>

        <View style={styles.spacer} />

        <View style={styles.section}>
          <Text style={[Textstyles.text_cfmedium, styles.sectionTitle]}>
            Prescription details
          </Text>
          <Text style={[Textstyles.text_small, styles.prescriptionText]}>
            Ensure to take medications as directed. For inquiries, contact the
            pharmacist or your doctor.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <CustomButton Textname="Locate Pharmacy" />
        <View style={styles.buttonSpacer} />
        <CustomButton
          Textname="Download prescription letter"
          backgroundColor={lightBlue}
          borderColor={primarycolor}
          borderWidth={1}
          TextColor={primarycolor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24, // pt-6
    paddingHorizontal: 24, // px-6
    flex: 1,
  },
  scrollView: {
    height: "83%",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 8,
  },
  detailRow: {
    marginBottom: 4,
  },
  drugItem: {
    marginBottom: 8,
  },
  prescriptionText: {
    marginTop: 4,
  },
  spacer: {
    height: 24, // h-6
  },
  buttonContainer: {
    marginTop: 16,
  },
  buttonSpacer: {
    height: 12, // h-3
  },
});

export default DrugReferralDetails;
