import { View, TouchableOpacity } from "react-native";
import { linkcolor, primarycolor, whitecolor } from "../../../constants/color";
import {
    CalenderIcon,
    HomeIcon,
    MessageIcon,
    UserIcon,
} from "../../../assets/iconsvg/Svgicon";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Footer = ({ activeProps }) => {
    const [active, setActive] = useState(activeProps);
    const navigation = useNavigation();
    const handleNavigate = (value) => {
        navigation.navigate(value);
        setActive(value);
    };
    return (
        <>
            <View className="w-full h-24 bg-white absolute bottom-0 flex-row items-center justify-evenly z-50">
                <TouchableOpacity
                    onPress={() => handleNavigate("healthptype", { screen: "doctor-home" })}
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
                    onPress={() => handleNavigate("Message")}
                    style={
                        active === "Message"
                            ? { backgroundColor: linkcolor }
                            : { backgroundColor: whitecolor }
                    }
                    className="w-12 h-12 flex justify-center items-center rounded-xl"
                >
                    <MessageIcon
                        width={24}
                        height={24}
                        color={active === "Message" ? primarycolor : "black"}
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
                    onPress={() => handleNavigate("Setting")}
                    style={
                        active === "Setting"
                            ? { backgroundColor: linkcolor }
                            : { backgroundColor: whitecolor }
                    }
                    className="w-12 h-12 flex justify-center items-center rounded-xl"
                >
                    <UserIcon
                        width={24}
                        height={24}
                        color={active === "Setting" ? primarycolor : "black"}
                    />
                </TouchableOpacity>
            </View>
        </>
    );
};
export default Footer;
