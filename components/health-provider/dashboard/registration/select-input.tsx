import { Image, Text, TouchableOpacity, View } from "react-native";

export default function SelectInput({
    label,
    required,
    placeholder,
    borderColor,
    borderWidth,
    onPress,
}: {
    label?: string;
    required?: boolean;
    placeholder: string;
    borderColor?: string;
    borderWidth?: number;
    onPress: () => void;
}) {
    return (
        <View>
            {label && (
                <View className="flex-row">
                    <Text className="font-normal text-base">{label}</Text>
                    {required && <Text style={{ color: "#A30202" }}>*</Text>}
                </View>
            )}
            <TouchableOpacity
                onPress={onPress}
                className="rounded-xl p-5 flex-row justify-between items-center"
                style={{
                    borderColor: borderColor ?? "#000000",
                    borderWidth: borderWidth ?? 1,
                }}
            >
                <Text className="font-normal text-greyText">{placeholder}</Text>
                <Image
                    source={require("../../../../assets/png-icon/arrow-right-01.png")}
                    className="size-6"
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    );
}
