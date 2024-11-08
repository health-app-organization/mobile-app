import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { height } from "../../../constants/mobileDimensions";
import Footer from "../../mycomponents/doctor/footer";
import RoundProgressTracker from "../../mycomponents/doctor/round-progress-tracker";
import { Textstyles } from "../../../constants/fontsize";
import { CustomButton } from "../../mycomponents/mycomponent";
import { primarycolor, whitecolor } from "../../../constants/color";
import { useNavigation } from "@react-navigation/native";

const DoctorHome = () => {
    const navigation = useNavigation();
    const handleToExtraInfo = () => {
        navigation.navigate("extra-info");
    };

    return (
        <SafeAreaView style={{ height: height }} className="grid">
            <View className="self-center my-auto">
                <RoundProgressTracker color="#0099B8" progress={0.2} />
                <Text style={[Textstyles.text_medium]} className="mb-4 text-center">
                    Profile Progress
                </Text>
                <Text style={[Textstyles.text_small]} className="text-center">
                    Your profile is 20% complete
                </Text>
                <View className="h-4" />
                <CustomButton
                    Textname="Complete now"
                    backgroundColor={primarycolor}
                    TextColor={whitecolor}
                    onPress={handleToExtraInfo}
                />
            </View>
            <Footer activeProps="doctor-home" />
        </SafeAreaView>
    );
};

export default DoctorHome;

const styles = StyleSheet.create({});
