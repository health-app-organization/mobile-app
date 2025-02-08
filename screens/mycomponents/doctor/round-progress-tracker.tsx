import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RoundProgressTracker = ({
    progress,
    color,
}: {
    progress: number;
    color: string;
}) => {
    return (
        <View className="items-center p-5">
            <View
                className="w-[120px] h-[120px] rounded-[60px] border-8 justify-center items-center"
                style={{ borderColor: color }}
            >
                <View
                    className="w-20 h-20 rounded-[20px]"
                    style={{ borderColor: color }}
                >
                    <Text className="text-black font-bold">{`${Math.round(
                        progress * 100
                    )}%`}</Text>
                </View>
            </View>
        </View>
    );
};

export default RoundProgressTracker;

const styles = StyleSheet.create({});
