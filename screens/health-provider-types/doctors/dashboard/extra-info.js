import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { height } from "../../../../constants/mobileDimensions";
import {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
} from "../../../mycomponents/doctor/extra-info/steps";

const ExtraInfo = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const handleNextStep = () => {
        if (currentStep < 5) {
            setCurrentStep((prevState) => prevState + 1);
        }
    };
    const handlePreviousStep = () => {
        if (currentStep > 1) {
            setCurrentStep((prevState) => prevState - 1);
        }
    };

    return (
        <SafeAreaView
            style={{ height: height }}
            className="py-5 px-4"
        >
            {currentStep === 1 && (
                <Step1
                    handleNextStep={handleNextStep}
                    handlePreviousStep={handlePreviousStep}
                />
            )}
            {currentStep === 2 && (
                <Step2
                    handleNextStep={handleNextStep}
                    handlePreviousStep={handlePreviousStep}
                />
            )}
            {currentStep === 3 && (
                <Step3
                    handleNextStep={handleNextStep}
                    handlePreviousStep={handlePreviousStep}
                />
            )}
            {currentStep === 4 && (
                <Step4
                    handleNextStep={handleNextStep}
                    handlePreviousStep={handlePreviousStep}
                />
            )}
            {currentStep === 5 && (
                <Step5
                    handleNextStep={handleNextStep}
                    handlePreviousStep={handlePreviousStep}
                />
            )}
        </SafeAreaView>
    );
};

export default ExtraInfo;

const styles = StyleSheet.create({});
