import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Textstyles } from "constants/fontsize";
import { primarycolor } from "constants/color";

export const HeaderWithTitleAndBackButton: React.FC<CustomHeaderProps> = ({
    title,
}) => {
    const navigation = useNavigation();

    return (
        <View className="bg-[#0099b8]">
            <View className="flex flex-row items-center p-4">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <Text className="text-white text-2xl font-bold">{title}</Text>
            </View>
        </View>
    );
};

const HeaderTitle: React.FC<CustomHeaderProps> = ({ title }) => {
    return (
        <View className="w-full p-5 bg-[#0099B8]">
            <Text className="text-2xl text-white font-bold">{title}</Text>
        </View>
    );
};

export default HeaderTitle;

export const Header: React.FC<CustomHeaderProps> = ({
    title,
    rightIcon,
    onRightIconPress,
}) => {
    const navigation = useNavigation();
    return (
        <View
            style={{ backgroundColor: primarycolor }}
            className="p-5 flex-row items-center justify-center w-full"
        >
            {/* Back Button */}
            <TouchableOpacity
                className="justify-center"
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="chevron-back" size={32} color="white" />
            </TouchableOpacity>

            {/* Title */}
            <Text
                style={{
                    color: "white",
                    fontSize: 24,
                    lineHeight: 30,
                    fontWeight: "700",
                    flex: 1, // Allow title to take available space
                }}
            >
                {title}
            </Text>
            {/* Right Icon (if provided) */}
            {rightIcon && (
                <TouchableOpacity onPress={onRightIconPress}>
                    {rightIcon}
                </TouchableOpacity>
            )}
        </View>
    );
};

export const Header2: React.FC<CustomHeaderProps> = ({
    title,
    rightIcon,
    onRightIconPress,
}) => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
                paddingHorizontal: 30,
                height: 140,
                paddingTop: 10,
                // The color for the header background
            }}
        >
            {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={26} color="#0099B8" />
            </TouchableOpacity>

            {/* Title */}
            <Text
                style={{
                    color: "#0099B8",
                    fontSize: 24,
                    lineHeight: 30,
                    fontWeight: "700",
                    flex: 1, // Allow title to take available space
                    textAlign: "center", // Center the title
                    marginLeft: -190, // Consider adjusting this value for better alignment
                }}
            >
                {title}
            </Text>

            {/* Right Icon (if provided) */}
            {rightIcon && (
                <TouchableOpacity onPress={onRightIconPress}>
                    {rightIcon}
                </TouchableOpacity>
            )}
        </View>
    );
};

export const Header6: React.FC<CustomHeaderProps> = ({
    title,
    rightIcon,
    onRightIconPress,
}) => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
                paddingHorizontal: 30,
                height: 140,
                paddingTop: 10,
                // The color for the header background
            }}
        >
            {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={26} color="#0099B8" />
            </TouchableOpacity>

            {/* Title */}
            <Text
                style={{
                    color: "black",
                    fontSize: 24,
                    lineHeight: 30,
                    fontWeight: "700",
                    flex: 1, // Allow title to take available space
                    textAlign: "center", // Center the title
                    marginLeft: -190, // Consider adjusting this value for better alignment
                }}
            >
                {title}
            </Text>

            {/* Right Icon (if provided) */}
            {rightIcon && (
                <TouchableOpacity onPress={onRightIconPress}>
                    {rightIcon}
                </TouchableOpacity>
            )}
        </View>
    );
};

export const Header5: React.FC<CustomHeaderProps> = ({
    title,
    rightIcon,
    onRightIconPress,
}) => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
                paddingHorizontal: 30,
                height: 140,

                // The color for the header background
            }}
        >
            {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={26} color="#0099B8" />
            </TouchableOpacity>

            {/* Title */}
            <Text
                style={{
                    color: "black",
                    fontSize: 24,
                    lineHeight: 30,
                    fontWeight: "700",
                    flex: 1, // Allow title to take available space
                    textAlign: "center", // Center the title
                    marginLeft: -190, // Consider adjusting this value for better alignment
                }}
            >
                {title}
            </Text>

            {/* Right Icon (if provided) */}
            {rightIcon && (
                <TouchableOpacity onPress={onRightIconPress}>
                    {rightIcon}
                </TouchableOpacity>
            )}
        </View>
    );
};

export const Header3: React.FC<CustomHeaderProps> = ({
    title,
    rightIcon,
    onRightIconPress,
}) => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
                paddingHorizontal: 30,
                paddingTop: 10,

                // The color for the header background
            }}
        >
            {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={30} color="black" />
            </TouchableOpacity>

            {/* Title */}
            <Text
                style={{
                    color: "black",
                    fontSize: 24,
                    lineHeight: 30,
                    fontWeight: "700",
                    flex: 1, // Allow title to take available space
                    textAlign: "center", // Center the title
                    marginLeft: -203, // Consider adjusting this value for better alignment
                }}
            >
                {title}
            </Text>

            {/* Right Icon (if provided) */}
            {rightIcon && (
                <TouchableOpacity onPress={onRightIconPress}>
                    {rightIcon}
                </TouchableOpacity>
            )}
        </View>
    );
};

export const Header4: React.FC<CustomHeaderProps> = ({
    title,
    rightIcon,
    onRightIconPress,
}) => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
                paddingHorizontal: 30,
                paddingTop: 10,

                // The color for the header background
            }}
        >
            {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={30} color="black" />
            </TouchableOpacity>

            {/* Title */}
            <Text style={[Textstyles.text_cfmedium]} className=" ml-5">
                {title}
            </Text>

            {/* Right Icon (if provided) */}
            {rightIcon && (
                <TouchableOpacity onPress={onRightIconPress}>
                    {rightIcon}
                </TouchableOpacity>
            )}
        </View>
    );
};

export const Header9: React.FC<CustomHeaderProps> = ({
    profileName,
    profileCompletion,
}) => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 20,
                paddingTop: 20,
                paddingBottom: 20,
                backgroundColor: "#00A8CC",
            }}
        >
            {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={28} color="white" />
            </TouchableOpacity>

            {/* Profile Info */}
            <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
                    {profileName}
                </Text>
                <Text style={{ color: "white", fontSize: 16, marginTop: 4 }}>
                    {profileCompletion}% profile completed
                </Text>
            </View>
        </View>
    );
};