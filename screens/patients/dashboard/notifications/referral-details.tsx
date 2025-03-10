import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "types/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton, Header } from "components/mycomponent";
import { StatusBar } from "expo-status-bar";
import { lightBlue, primarycolor } from "constants/color";
import { Textstyles } from "constants/fontsize";

type OrderDetailsRouteProp = RouteProp<RootStackParamList, "referral-details">;

const ReferralDetails: React.FC = () => {
    const route = useRoute<OrderDetailsRouteProp>();
    const { id } = route.params as { id: string | number };
    console.log("ID: ", id);

    return (
        <SafeAreaView className="flex-1 bg-primaryTwo">
            <StatusBar backgroundColor={primarycolor} />
            <Header title="Referral Details" />
            <View className="pt-6 px-6">
                <ScrollView className="h-[78%]">
                    <View>
                        <Text style={[Textstyles.text_cfmedium]}>Patient Information</Text>
                        <Text style={[Textstyles.text_small, { fontWeight: 700 }]}>
                            Patient name: <Text style={[Textstyles.text_small]}>Praise</Text>
                        </Text>
                        <Text style={[Textstyles.text_small, { fontWeight: 700 }]}>
                            Patient ID: <Text style={[Textstyles.text_small]}>2819377489</Text>
                        </Text>
                        <Text style={[Textstyles.text_small, { fontWeight: 700 }]}>
                            Patient contact number: <Text style={[Textstyles.text_small]}>0903347593</Text>
                        </Text>
                        <Text style={[Textstyles.text_small, { fontWeight: 700 }]}>
                            Patient email address: <Text style={[Textstyles.text_small]}>Praise@gmail.com</Text>
                        </Text>
                    </View>
                    <View className="h-6" />
                    <View>
                        <Text style={[Textstyles.text_cfmedium]}>Referral details</Text>
                        <Text style={[Textstyles.text_small, { fontWeight: 700 }]}>
                            Clinic referred to: <Text style={[Textstyles.text_small]}>Greenwood hospital</Text>
                        </Text>
                        <Text style={[Textstyles.text_small, { fontWeight: 700 }]}>
                            Clinic address: <Text style={[Textstyles.text_small]}>Ikeja, Lagos Nigeria</Text>
                        </Text>
                        <Text style={[Textstyles.text_small, { fontWeight: 700 }]}>
                            Clinic contact number: <Text style={[Textstyles.text_small]}>0903347593</Text>
                        </Text>
                        <Text style={[Textstyles.text_small, { fontWeight: 700 }]}>
                            Reason for referral: <Text style={[Textstyles.text_small]}>Follow-up care for hypertension</Text>
                        </Text>
                    </View>
                    <View className="h-6" />
                    <View>
                        <Text style={[Textstyles.text_cfmedium]}>Additional details</Text>
                        <Text style={[Textstyles.text_small]}>
                            Please bring your medical history and test results to the appointment.
                        </Text>
                    </View>
                </ScrollView>
                <View>
                    <CustomButton
                        Textname="Visit hospital"
                    />
                    <View className="h-3" />
                    <CustomButton
                        Textname="Download referral letter"
                        backgroundColor={lightBlue}
                        borderColor={primarycolor}
                        borderWidth={1}
                        TextColor={primarycolor}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ReferralDetails;
