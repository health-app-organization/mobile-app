import React from "react";
import { View, Text, ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "types/stack";
import { lightBlue, primarycolor } from "constants/color";
import { Textstyles } from "constants/fontsize";
import { CustomButton } from "components/utilities/buttons";

type ReferralDetailsRouteProp = RouteProp<RootStackParamList, "drug-referral-details"> & {
    params: {
        id: string | number;
    };
};

const DrugReferralDetails: React.FC = () => {
    const route = useRoute<ReferralDetailsRouteProp>();
    const { id } = route.params;
    console.log("ID: ", id);

    return (
        <>
            <View className="pt-6 px-6">
                <ScrollView className="h-[83%]">
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
                        <Text style={[Textstyles.text_cfmedium]}>Drug details</Text>
                        <Text style={[Textstyles.text_small, { fontWeight: 700 }]}>
                            Amoxicillin 500mg
                        </Text>
                        <Text style={[Textstyles.text_small, { fontWeight: 700 }]}>
                            {`\u2022`} Quantity: 10 tablets
                        </Text>
                        <Text style={[Textstyles.text_small, { fontWeight: 700 }]}>
                            Ibuprofen 200mg
                        </Text>
                        <Text style={[Textstyles.text_small, { fontWeight: 700 }]}>
                            {`\u2022`} Quantity: 20 tablets
                        </Text>
                    </View>
                    <View className="h-6" />
                    <View>
                        <Text style={[Textstyles.text_cfmedium]}>Prescription details</Text>
                        <Text style={[Textstyles.text_small]}>
                            Ensure to take medications as directed. For inquiries, contact the pharmacist or your doctor.
                        </Text>
                    </View>
                </ScrollView>
                <View>
                    <CustomButton
                        Textname="Locate Pharmacy"
                    />
                    <View className="h-3" />
                    <CustomButton
                        Textname="Download prescription letter"
                        backgroundColor={lightBlue}
                        borderColor={primarycolor}
                        borderWidth={1}
                        TextColor={primarycolor}
                    />
                </View>
            </View>
        </>
    );
};

export default DrugReferralDetails;