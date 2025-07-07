import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { HeaderWithTitleAndBackButton } from "../../utilities/headers";
import UserQrCode from "../../components/health-seeker-flow/dashboard/qr-code";

const QRCodeScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderWithTitleAndBackButton
        title="Patient QR Code"
        profileCompletion={""}
      />
      <ScrollView>
        <UserQrCode />
      </ScrollView>
    </View>
  );
};

export default QRCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
