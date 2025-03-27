import { primarycolor } from "constants/color";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";

const RingWithSegment = ({
    size = 193,
    strokeWidth = 10,
    percentage = 20,
}: {
    size?: number;
    strokeWidth?: number;
    percentage: number;
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const segmentLength = (percentage / 100) * circumference;

    return (
        <View style={styles.container}>
            <Svg width={size} height={size}>
                {/* Full Gray Ring */}
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#E8E8E8"
                    strokeWidth={strokeWidth}
                    fill="none"
                />

                {/* Colored Segment */}
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={primarycolor}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={`${segmentLength}, ${circumference}`}
                    strokeLinecap="round"
                    transform={`rotate(-90 ${size / 2} ${size / 2})`} // Starts from top
                />
            </Svg>

            {/* Centered Text */}
            <View style={styles.textContainer}>
                <Text className="font-bold text-xl">{percentage}%</Text>
                <Text className="font-normal text-base">completed</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    textContainer: {
        position: "absolute",
        flexDirection: "column",
        alignItems: "center",
    },
});

export default RingWithSegment;
