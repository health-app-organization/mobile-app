import { StyleSheet, Text, View } from "react-native";
import Chat from "../../components/health-provider-flow/dashboard/chat";
import HeaderWithTitleAndBackButton from "../../components/health-seeker-flow/notification/notification-header";

const ChatsScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderWithTitleAndBackButton title="Patient" profileCompletion={""} />
      <Chat />
    </View>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
