import { useLayoutEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BarChart } from "react-native-chart-kit";
import { primarycolor } from "../../../constants/colors";
import ChatList from "../../health-seeker-flow/chats/chat-list";
import { ArrowDown01Icon } from "../../../assets/iconsvg/Svgicon";
import RingWithSegment from "../../icons/ring-with-segment";
import { CustomButton } from "../../../utilities/buttons";

export default function Dashboard() {
  const [percentageComplete, setPercentageComplete] = useState(100);
  // useLayoutEffect(() => {
  //     navigation.setOptions({
  //         headerShown: percentageComplete === 100,
  //     });
  // }, [navigation]);

  if (percentageComplete !== 100) {
    return (
      <RegComplete navigation={""} percentageComplete={percentageComplete} />
    );
  }
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        data: [200, 450, 280, 500, 400],
      },
    ],
  };
  const screenWidth = Dimensions.get("window").width;
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0.5,
    // color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    color: (opacity = 1) => primarycolor,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <View className="flex-1 ">
      <ScrollView>
        <View className="p-4 gap-y-4">
          <View className="gap-y-5">
            <View className="flex-row justify-between items-center">
              <Text className="font-semibold text-base">Chats</Text>
              <TouchableOpacity
              // onPress={() =>
              //     navigation.navigate("health-provider", {
              //         screen: "safe-area-view",
              //         params: { screen: "chats" },
              //     })
              // }
              >
                <Text className="text-primary font-semibold text-sm">
                  See all
                </Text>
              </TouchableOpacity>
            </View>
            <ChatList
              profileImage={require("../../../assets/images/chat 1.png")}
              name="Dr. Sunmisola Olowofela"
              message="Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet.."
              time="18:52"
              unreadCount={4}
              // onPress={() => {
              //     navigation.navigate("health-provider", {
              //         screen: "safe-area-view",
              //         params: { screen: "chat", name: "Dr. Sunmisola Olowofela" },
              //     })
              // }}
            />
          </View>
          <View className="gap-y-5">
            <View className="flex-row justify-between items-center">
              <Text className="font-semibold text-base">Appointments</Text>
              <TouchableOpacity
              // onPress={() =>
              //     navigation.navigate("health-provider", {
              //         screen: "dashboard",
              //         params: { screen: "appointments" },
              //     })
              // }
              >
                <Text className="text-primary font-semibold text-sm">
                  See all
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row gap-x-4">
              <AppointmentTab />
              <AppointmentTab />
            </View>
          </View>
          <View className="gap-y-5">
            <View className="flex-row justify-between items-center">
              <Text className="font-semibold text-base">
                Appointments Statistics
              </Text>
              <TouchableOpacity
                // onPress={() =>
                //     navigation.navigate("health-provider", {
                //         screen: "dashboard",
                //         params: { screen: "appointments" },
                //     })
                // }
                className="flex-row items-center"
              >
                <Text className="text-primary font-semibold text-sm">
                  Last 4 months
                </Text>
                <ArrowDown01Icon className="size-4" fill="#0099b8" />
              </TouchableOpacity>
            </View>
            <View className="bg-white p-2 rounded-lg">
              <BarChart
                // style={graphStyle}
                style={{ marginHorizontal: "auto" }}
                data={barData}
                width={screenWidth * 0.9}
                height={200}
                yAxisLabel=""
                yAxisSuffix=""
                chartConfig={chartConfig}
                verticalLabelRotation={0}
              />
              <View className="flex-row gap-x-10 justify-center">
                <View className="flex-row gap-x-1 items-center">
                  <View className="size-5 bg-primary rounded-full" />
                  <Text>Online</Text>
                </View>
                <View className="flex-row gap-x-1 items-center">
                  <View className="size-5 bg-secondary rounded-full" />
                  <Text>In Person</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function RegComplete({
  navigation,
  percentageComplete,
}: {
  navigation: any;
  percentageComplete: number;
}) {
  return (
    <View className="flex-1 flex-col justify-center items-center gap-y-8">
      <RingWithSegment percentage={percentageComplete} />
      <View className="gap-y-2">
        <Text className="text-center font-bold text-2xl">Profile Progress</Text>
        <Text className="text-center font-normal text-base">
          Your profile is {percentageComplete}% complete
        </Text>
        <View>
          <CustomButton
            Textname="Complete now"
            onPress={() =>
              navigation.navigate("health-provider", {
                screen: "safe-area-view",
                params: { screen: "complete-registration" },
              })
            }
          />
        </View>
      </View>
    </View>
  );
}

function AppointmentTab() {
  return (
    <View className="flex-1 bg-white rounded-lg p-3 gap-y-3">
      <Image
        source={require("../../../assets/images/chat 1.png")}
        className="size-[50px]"
        resizeMode="contain"
      />
      <View className="gap-y-1">
        <Text className="font-semibold text-base">Praise Chanel</Text>
        <Text className="text-greyText font-normal text-sm">
          08:00AM - 08:30AM
        </Text>
        <Text className="text-greyText font-normal text-sm">
          Morning Session
        </Text>
      </View>
    </View>
  );
}
