import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { primarycolor } from "../../../constants/color";
import { useNavigation } from "@react-navigation/native";
import {
  HeaderWithTitleAndBackButton,
  NotificationCard,
} from "../../mycomponents/mycomponent";
import { notificationsMockData } from "../../../mock-data/mock-data";

const Notifications = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <StatusBar style="auto" backgroundColor={primarycolor} />
      <FlatList
        ListHeaderComponent={() => (
          <HeaderWithTitleAndBackButton title="Notifications" />
        )}
        data={notificationsMockData}
        renderItem={({ item }) => (
          <NotificationCard
            title={item.title}
            description={item.description}
            type={item.type}
            time={item.time}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Notifications;
