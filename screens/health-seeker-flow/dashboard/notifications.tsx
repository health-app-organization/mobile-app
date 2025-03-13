import { StatusBar } from "expo-status-bar";
import { FlatList, View } from "react-native";
import { primarycolor } from "../../../constants/color";
import { notificationsMockData } from "../../../mock-data/mock-data";
import { NotificationCard } from "components/health-seeker/notification-card";

const Notifications = () => {
  return (
    <View>
      <StatusBar style="auto" backgroundColor={primarycolor} />
      <FlatList
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
    </View>
  );
};

export default Notifications;
