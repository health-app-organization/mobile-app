import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export const Step1 = ({ handleNextStep, handlePreviousStep }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    console.log("next step");
                    handleNextStep();
                }}
            >
                <Text>Step 1</Text>
            </TouchableOpacity>
        </View>
    );
};

export const Step2 = ({ handleNextStep, handlePreviousStep }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    console.log("previous step");
                    handlePreviousStep();
                }}
            >
                <Text>Step 2</Text>
            </TouchableOpacity>
        </View>
    );
};

export const Step3 = ({ handleNextStep, handlePreviousStep }) => {
    return (
        <View>
            <Text>Step3</Text>
        </View>
    );
};

export const Step4 = ({ handleNextStep, handlePreviousStep }) => {
    return (
        <View>
            <Text>Step4</Text>
        </View>
    );
};

export const Step5 = ({ handleNextStep, handlePreviousStep }) => {
    return (
        <View>
            <Text>Step5</Text>
        </View>
    );
};

const styles = StyleSheet.create({});
