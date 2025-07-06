import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Textstyles } from "../../../constants/fontsize";
import { CustomButton } from "../../../utilities/buttons";
import { lightBlue, primarycolor } from "../../../constants/colors";

interface ReferralDetailsProps {
  id: string | string[];
}

const ReferralDetails: React.FC<ReferralDetailsProps> = ({ id }) => {
  console.log("ID: ", id);

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
            Referral details
          </Text>
          <DetailRow label="Clinic referred to:" value="Greenwood hospital" />
          <DetailRow label="Clinic address:" value="Ikeja, Lagos Nigeria" />
          <DetailRow label="Clinic contact number:" value="0903347593" />
          <DetailRow
            label="Reason for referral:"
            value="Follow-up care for hypertension"
          />
        </View>

        <View style={styles.spacer} />

        <View style={styles.section}>
          <Text style={[Textstyles.text_cfmedium, styles.sectionTitle]}>
            Additional details
          </Text>
          <Text style={[Textstyles.text_small, styles.additionalText]}>
            Please bring your medical history and test results to the
            appointment.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <CustomButton Textname="Visit hospital" />
        <View style={styles.buttonSpacer} />
        <CustomButton
          Textname="Download referral letter"
          backgroundColor={lightBlue}
          borderColor={primarycolor}
          borderWidth={1}
          TextColor={primarycolor}
        />
      </View>
    </View>
  );
};

// Helper component for consistent detail rows
const DetailRow: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <Text style={[Textstyles.text_small, styles.detailRow]}>
    <Text style={{ fontWeight: "700" }}>{label}</Text> <Text>{value}</Text>
  </Text>
);

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
  additionalText: {
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

export default ReferralDetails;
