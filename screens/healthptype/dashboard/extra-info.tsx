import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { height } from "../../../constants/mobileDimensions";
import {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
} from "../../mycomponents/doctor/extra-info/steps";

const ExtraInfo = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const handleNextStep = () => {
        if (currentStep <= 5) {
            setCurrentStep(prevStep => prevStep++);
        }
    };

    return (
        <SafeAreaView style={{ height: height }}>
            {currentStep === 1 && <Step1 handleNextStep={handleNextStep} />}
            {currentStep === 2 && <Step2 handleNextStep={handleNextStep} />}
            {currentStep === 3 && <Step3 handleNextStep={handleNextStep} />}
            {currentStep === 4 && <Step4 handleNextStep={handleNextStep} />}
            {currentStep === 5 && <Step5 handleNextStep={handleNextStep} />}
        </SafeAreaView>
    );
};

export default ExtraInfo;

const styles = StyleSheet.create({});
