import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { height } from '../../../constants/mobileDimensions';
import { Step1 } from '../../mycomponents/doctor/extra-info/steps';

const ExtraInfo = () => {
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <SafeAreaView style={{ height: height }}>
            {currentStep === 1 && <Step1 />}
        </SafeAreaView>
    )
}

export default ExtraInfo

const styles = StyleSheet.create({})