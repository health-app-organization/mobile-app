import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { primarycolor } from "../../../../constants/color";
import { Textstyles } from "../../../../constants/fontsize";

interface StepProps {
    handleNextStep?: () => void;
    handlePreviousStep?: () => void;
}

export const Step1 = ({ handleNextStep, handlePreviousStep }: StepProps) => {
    return (
        <>
            <View className="gap-y-2">
                <View className="flex-row justify-between">
                    <Text style={[Textstyles.text_x16small]}>Step 1 of 3</Text>
                    <TouchableOpacity onPress={handleNextStep}>
                        <Text className={`text-[${primarycolor}]`} style={[Textstyles.text_x16small]}>
                            Skip
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={[Textstyles.text_cfmedium]}>Your Profile</Text>
                <Text style={[Textstyles.text_small]}>Update your profile information</Text>
            </View>
        </>
    );
};

export const Step2 = ({ handleNextStep, handlePreviousStep }: StepProps) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    console.log("previous step");
                    if (handlePreviousStep) {
                        handlePreviousStep();
                    }
                }}
            >
                <Text>Step 2</Text>
            </TouchableOpacity>
        </View>
    );
};

export const Step3 = ({ handleNextStep, handlePreviousStep }: StepProps) => {
    return (
        <View>
            <Text>Step3</Text>
        </View>
    );
};

export const Step4 = ({ handleNextStep, handlePreviousStep }: StepProps) => {
    return (
        <View>
            <Text>Step4</Text>
        </View>
    );
};

export const Step5 = ({ handleNextStep, handlePreviousStep }: StepProps) => {
    return (
        <View>
            <Text>Step5</Text>
        </View>
    );
};

const styles = StyleSheet.create({});
