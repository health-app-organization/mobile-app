import { StatusBar } from "expo-status-bar";
import { FlatList, View } from "react-native";
import { primarycolor } from "../../../constants/colors";
import { notificationsMockData } from "./notification-data";
import NotificationCard from "./notification-card";

const NotificationPage = () => {
  return (
    <View>
      <StatusBar style="auto" backgroundColor={primarycolor} />
      <FlatList
        data={notificationsMockData}
        showsVerticalScrollIndicator={false}
        renderItem={({
          item,
        }: {
          item: {
            id: number | string;
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

export default NotificationPage;
