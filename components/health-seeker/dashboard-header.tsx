import { useNavigation } from "@react-navigation/native";
import { BackgroundIcon, Notificationicon } from "assets/iconsvg/Svgicon";
import { primarycolor, whitecolor } from "constants/color";
import { Textstyles } from "constants/fontsize";
import { Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-paper";
import { QRCodeScreen } from "components/utilities/qr-code";
import useAuthStore from "store/auth-store";
import { UserProps } from "types/general";
import { StackNavigation } from "types/stack";

const DashboardHeader = () => {
    const navigation = useNavigation<StackNavigation>();
    const { getUser } = useAuthStore();
    const user: UserProps | null = getUser();
    return (
        <>
            <View
                style={{ backgroundColor: primarycolor }}
                className="h-2/3 w-full rounded-b-2xl px-3 py-5 relative"
            >
                <View className="absolute -bottom-10 left-15 opacity-30">
                    <BackgroundIcon width={200} height={200} fill="#ffffff30" />
                </View>
                <View className="flex-row justify-between items-center">
                    <View className="flex-row items-center">
                        <View>
                            <Avatar.Image
                                source={require("../../assets/images/profileimage.png")}
                                size={60}
                            />
                        </View>
                        <View className="w-4" />
                        <View>
                            <Text style={[Textstyles.text_xmedium, { color: whitecolor }]}>
                                {"Hi " + user?.firstName}
                            </Text>
                            <Text style={[Textstyles.text_xxmedium, { color: whitecolor }]}>
                                How’re you today?
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("health-seeker", {
                                screen: "safe-area-view",
                                params: { screen: "notifications" },
                            })
                        }
                        style={{ elevation: 4 }}
                        className="w-10 h-10 rounded-xl bg-white flex justify-center items-center shadow-sm shadow-black"
                    >
                        <Notificationicon width={28} height={28} />
                    </TouchableOpacity>
                </View>
                <View className="h-16" />
                <View className="flex-row justify-between items-center">
                    <View>
                        <Text style={[Textstyles.text_cmedium, { color: whitecolor }]}>
                            Available Balance
                        </Text>
                        <View className="items-center flex-row">
                            <BackgroundIcon width={50} height={50} />
                            <View className="w-4" />

                            <Text style={[Textstyles.text_medium, { color: whitecolor }]}>
                                0.00
                            </Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("health-seeker", {
                                    screen: "safe-area-view",
                                    params: { screen: "user-qr-code" },
                                })
                            }
                            className="h-20 w-20 flex justify-center items-center rounded-full border-white border-2"
                        >
                            <View className="h-16 w-16 flex justify-center items-center rounded-full bg-white p-2">
                                <QRCodeScreen />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};

export default DashboardHeader;
