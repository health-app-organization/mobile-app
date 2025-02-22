import { View, TouchableOpacity } from "react-native";
import { linkcolor, primarycolor, whitecolor } from "../constants/color";
import {
    CalenderIcon,
    HomeIcon,
    MessageIcon,
    UserIcon,
} from "../assets/iconsvg/Svgicon";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../types/stack";

const DoctorFooter = ({ activeProps }: { activeProps: "doctor-home" | "Messages" | "Appointment" | "settings" }) => {
    const [active, setActive] = useState(activeProps);
    const navigation = useNavigation<StackNavigation>();
    const handleNavigate = (value: "doctor-home" | "Messages" | "Appointment" | "settings") => {
        navigation.navigate(value);
        setActive(value);
    };

    return (
        <>
            <View className="w-full h-24 bg-white absolute bottom-0 flex-row items-center justify-evenly z-50">
                <TouchableOpacity
                    onPress={() =>
                        handleNavigate("doctor-home")
                    }
                    style={
                        active === "doctor-home"
                            ? { backgroundColor: linkcolor }
                            : { backgroundColor: whitecolor }
                    }
                    className="w-12 h-12 flex justify-center items-center rounded-xl"
                >
                    <HomeIcon
                        width={24}
                        height={24}
                        color={active === "doctor-home" ? primarycolor : "black"}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleNavigate("Messages")}
                    style={
                        active === "Messages"
                            ? { backgroundColor: linkcolor }
                            : { backgroundColor: whitecolor }
                    }
                    className="w-12 h-12 flex justify-center items-center rounded-xl"
                >
                    <MessageIcon
                        width={24}
                        height={24}
                        color={active === "Messages" ? primarycolor : "black"}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleNavigate("Appointment")}
                    style={
                        active === "Appointment"
                            ? { backgroundColor: linkcolor }
                            : { backgroundColor: whitecolor }
                    }
                    className="w-12 h-12 flex justify-center items-center rounded-xl"
                >
                    <CalenderIcon
                        width={24}
                        height={24}
                        color={active === "Appointment" ? primarycolor : "black"}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleNavigate("settings")}
                    style={
                        active === "settings"
                            ? { backgroundColor: linkcolor }
                            : { backgroundColor: whitecolor }
                    }
                    className="w-12 h-12 flex justify-center items-center rounded-xl"
                >
                    <UserIcon
                        width={24}
                        height={24}
                        color={active === "settings" ? primarycolor : "black"}
                    />
                </TouchableOpacity>
            </View>
        </>
    );
};

export default DoctorFooter;
