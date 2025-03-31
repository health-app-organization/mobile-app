import RingWithSegment from "components/icons/ring-with-segment";
import { CustomButton } from "components/utilities/buttons";
import { useLayoutEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Dashboard({ navigation }: { navigation: any }) {
    const [percentageComplete, setPercentageComplete] = useState(100);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: percentageComplete === 100,
        });
    }, [navigation]);

    if (percentageComplete !== 100) {
        return (
            <RegComplete
                navigation={navigation}
                percentageComplete={percentageComplete}
            />
        );
    }

    return (
        <View className="flex-1">
            <Text>Dashboard</Text>
        </View>
    );
}

function RegComplete({
    navigation,
    percentageComplete,
}: {
    navigation: any;
    percentageComplete: number;
}) {
    return (
        <View className="flex-1 flex-col justify-center items-center gap-y-8">
            <RingWithSegment percentage={percentageComplete} />
            <View className="gap-y-2">
                <Text className="text-center font-bold text-2xl">Profile Progress</Text>
                <Text className="text-center font-normal text-base">
                    Your profile is {percentageComplete}% complete
                </Text>
                <View>
                    <CustomButton
                        Textname="Complete now"
                        onPress={() =>
                            navigation.navigate("health-provider", {
                                screen: "safe-area-view",
                                params: { screen: "complete-registration" },
                            })
                        }
                    />
                </View>
            </View>
        </View>
    );
}
