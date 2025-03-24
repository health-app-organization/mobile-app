import { CustomTextInput } from "components/utilities/inputs";
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { primarycolor } from "constants/color";

export default function Chat({ route }: any) {
    const { name } = route.params;
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, padding: 10 }}>
                <Text className="mx-auto text-greyText">Today</Text>
                <ReceivedComponent text="this is just a little test to see how this goes this is just a little test to see how this goes this is just a little test to see how this goes this is just a little test to see how this goes" />
                <SenderComponent text="ohh yeah, alright, let's watch and see" />
                <ReceivedComponent text="this is just a little test to see how this goes this is just a little test to see how this goes this is just a little test to see how this goes this is just a little test to see how this goes" />
                <SenderComponent text="ohh yeah, alright, let's watch and see" />
                <ReceivedComponent text="this is just a little test to see how this goes this is just a little test to see how this goes this is just a little test to see how this goes this is just a little test to see how this goes" />
                <SenderComponent text="ohh yeah, alright, let's watch and see" />
                <ReceivedComponent text="this is just a little test to see how this goes" />
                <View className="flex-row justify-start">
                    <Text>Dr. Sunmisola Olowofela 18:22</Text>
                </View>
                <SenderComponent text="ohh yeah, alright, let's watch and see" />
                <View className="flex-row justify-end">
                    <Text>Read 18:20</Text>
                </View>
            </ScrollView>
            <View style={{ flexDirection: "row", alignItems: "center", padding: 10, borderTopWidth: 1, borderColor: "#ddd" }}>
                <CustomTextInput
                    // color="#33658A"
                    placeholder="Type a message"
                    // placeholdercolor="#aaa"
                    // style={{ flex: 1, marginRight: 10 }}
                    className="flex-1 mr-[10px]"
                    value=""
                    onChange={() => { }}
                    multiline
                    leftIcon={
                        <View className="flex-row items-center">
                            <Pressable>
                                <Image
                                    source={require("assets/iconsvg/emoji.svg")}
                                    style={{ width: 20, height: 20 }}
                                />
                            </Pressable>
                            <Pressable>
                                <Image
                                    source={require("assets/iconsvg/link.svg")}
                                    style={{ width: 20, height: 20 }}
                                />
                            </Pressable>
                        </View>
                    }
                />
                <TouchableOpacity>
                    <FontAwesome5 name="paper-plane" size={20} color="#33658A" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

function ReceivedComponent({ text }: { text: string }) {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }}>
            <View style={{ padding: 10, backgroundColor: "#525252", borderRadius: 10 }}>
                <Text className="text-white max-w-[70vw]">{text}</Text>
            </View>
        </View>
    );
}

function SenderComponent({ text }: { text: string }) {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-end", marginVertical: 5 }}>
            <View style={{ padding: 10, backgroundColor: primarycolor, borderRadius: 10 }}>
                <Text className="text-white max-w-[70vw]">{text}</Text>
            </View>
        </View>
    );
}