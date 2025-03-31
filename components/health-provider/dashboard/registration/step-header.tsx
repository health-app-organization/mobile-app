import { Text, View } from "react-native";

export default function StepHeader({ step, title, description }: { step: 1 | 2 | 3, title: string, description: string }) {
    return (
        <View className="bg-primary">
            <View className="py-2 px-4 gap-y-2">
                <Text className="text-white font-normal text-base">Step {step} of 3</Text>
                <Text className="text-white font-bold text-2xl">{title}</Text>
                <Text className="text-white font-normal text-base">{description}</Text>
            </View>
        </View>
    )
}