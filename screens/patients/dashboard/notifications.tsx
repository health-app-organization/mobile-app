import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { primarycolor } from "../../../constants/color";
import {
  HeaderWithTitleAndBackButton,
  NotificationCard,
} from "../../../components/mycomponent";
import { notificationsMockData } from "../../../mock-data/mock-data";

const Notifications = () => {
  return (
    <SafeAreaView className="flex-1 bg-primaryTwo">
      <StatusBar style="auto" backgroundColor={primarycolor} />
      <FlatList
        ListHeaderComponent={() => (
          <HeaderWithTitleAndBackButton title="Notifications" />
        )}
        data={notificationsMockData}
        renderItem={({
          item,
        }: {
          item: {
            id: number;
            title: string;
            description: string;
            type: "details" | "order-details" | "emergency";
            time: string;
          };
        }) => (
          <NotificationCard
            id={item.id}
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
