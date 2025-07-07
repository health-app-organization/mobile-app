import { CustomTextInput } from "components/utilities/inputs";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { primarycolor } from "constants/color";
import { EmojiIcon, LinkIcon } from "assets/iconsvg/Svgicon";

export default function Chat() {
    return (
        <View className="flex-1">
            <ScrollView className="flex-1 p-4">
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
                <View className="flex-row justify-end pb-5">
                    <Text>Read 18:20</Text>
                </View>
            </ScrollView>
            <View className="flex-row">
                <View className="flex-1">
                    <CustomTextInput
                        value=""
                        onChange={() => { }}
                        placeholder="Type a message"
                        borderRadius={0}
                        leftIcon={
                            <View className="flex-row items-center gap-x-2">
                                <TouchableOpacity>
                                    <EmojiIcon className="size-5" />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <LinkIcon className="size-5" />
                                </TouchableOpacity>
                            </View>
                        }
                        paddingLeft={80}
                        multiline
                    />
                </View>
                <TouchableOpacity className="bg-primary px-4 justify-center">
                    <FontAwesome5 name="paper-plane" size={20} color="white" />
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