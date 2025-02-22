import { Header } from "components/mycomponent";
import { primarycolor } from "constants/color";
import { Textstyles } from "constants/fontsize";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "types/stack";

const MedicineReminder: React.FC<{}> = () => {
    const navigation = useNavigation<StackNavigation>();

    return (
        <SafeAreaView className="flex-1 bg-primaryTwo">
            <StatusBar backgroundColor={primarycolor} />
            <Header title="Medicine Reminder" />
            <ScrollView className="p-6">
                <ReminderTab />
                <ReminderTab />
            </ScrollView>
            <TouchableOpacity
                className="absolute bottom-5 right-3 h-20 w-20 bg-primary rounded-full flex justify-center items-center"
                onPress={() => navigation.navigate("medicine-reminder-add")}
            >
                <FontAwesome name="plus" size={30} color="white" />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default MedicineReminder;

const ReminderTab = () => {
    return (
        <TouchableOpacity className="border rounded-md border-primary flex-row mb-3">
            <View className="bg-[#0099B833] p-[10px] flex items-center justify-center">
                <Image
                    source={require("../../../../assets/png-icon/document-validation.png")}
                    className="w-12 h-12"
                />
            </View>
            <View className="p-3">
                <Text style={[Textstyles.text_xsmall]}>Paracetamol</Text>
                <Text style={[Textstyles.text_xsma]}>2 pills per day</Text>
                <Text style={[Textstyles.text_xsma]}>28TH OCT, 2024 8:00 AM</Text>
            </View>
        </TouchableOpacity>
    );
};
