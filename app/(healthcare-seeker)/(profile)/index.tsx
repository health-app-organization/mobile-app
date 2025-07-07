import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { primarycolor } from "../../../constants/colors";
import { Textstyles } from "../../../constants/fontsize";
import Account from "../../../components/health-seeker-flow/profile";

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <View
        style={{
          width: "100%",
          backgroundColor: primarycolor,
          borderEndEndRadius: 30,
          borderBottomStartRadius: 30,
          height: "25%",
        }}
      >
        <Text
          style={{
            color: "white",
            ...Textstyles.text_medium,
            marginLeft: 32,
            marginTop: 80,
          }}
        >
          My Account
        </Text>
      </View>

      {/* <ProfileData /> */}
      <View>
        <Account />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
