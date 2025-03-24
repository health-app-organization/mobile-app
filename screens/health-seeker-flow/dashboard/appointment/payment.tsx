import ReuseableModal from "components/modals/reuseable-modal";
import { CustomButton } from "components/utilities/buttons";
import { CustomRadioSingleOption } from "components/utilities/selects";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { primarycolor } from "constants/color";
import { Textstyles } from "constants/fontsize";
import { CustomInputPassword } from "components/utilities/inputs";
import { CustomNumericKeypad } from "components/utilities/custom-numeric-keypad";

export default function Payment() {
    const [showModal, setShowModal] = useState(false);
    const [transactionPin, setTransactionPin] = useState("");
    return (
        <View className="flex-1">
            <ScrollView>
                <View className="p-6 gap-y-3">
                    <View className="gap-y-1">
                        <CustomRadioSingleOption
                            value="Wallet Balance"
                            onPress={() => console.log("wallet")}
                            selected
                        />
                        <Text>Wallet Balance: {`\u20A6`}200,000.00</Text>
                    </View>
                    <View className="gap-y-1">
                        <CustomRadioSingleOption
                            value="Wallet Balance"
                            onPress={() => console.log("wallet")}
                            selected={false}
                        />
                        <Text>Wallet Balance: {`\u20A6`}20,000.00</Text>
                    </View>
                </View>
            </ScrollView>
            <View className="pb-6 px-6">
                <CustomButton Textname="Next" onPress={() => setShowModal(true)} />
            </View>
            <ReuseableModal
                showModal={showModal}
                setShowModal={setShowModal}
                containerClassName="justify-end"
            >
                <View className="w-full bg-white rounded-t-[60px]">
                    <View className="p-10">
                        <View className="justify-end flex-row">
                            <FontAwesome
                                name="times"
                                size={24}
                                color={primarycolor}
                                onPress={() => setShowModal(false)}
                            />
                        </View>
                        <Text
                            className="text-center"
                            style={[Textstyles.text_small, { fontWeight: "900" }]}
                        >
                            Transaction Pin
                        </Text>
                        <Text
                            className="text-center"
                            style={[Textstyles.text_small, { fontWeight: "900" }]}
                        >
                            {`\u20A6`}20,000.00
                        </Text>
                        <CustomNumericKeypad value={transactionPin} setValue={setTransactionPin} />
                    </View>
                </View>
            </ReuseableModal>
        </View>
    );
}
