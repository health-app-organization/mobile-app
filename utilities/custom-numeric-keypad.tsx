import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    FlatList,
} from "react-native";
import React, { useState } from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { CustomInputPassword } from "./inputs";

const { width, height } = Dimensions.get("window");

export function CustomNumericKeypad({
    pinLength = 4,
    value,
    setValue,
}: {
    pinLength?: number;
    value: string;
    setValue: (value: string) => void;
}) {
    const [code, setCode] = useState("");
    const dialPadContent = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "X"];

    const dialPadSize = width * 0.2;
    const dialPadTextSize = dialPadSize * 0.4;
    return (
        <View style={styles.textContainer}>
            {/* <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ position: "absolute", top: -5, left: 10 }}
            >
                <Ionicons name="chevron-back" size={45} color="#5E454B" />
            </TouchableOpacity> */}
            <CustomInputPassword
                placeholder="Enter your PIN"
                value={value}
                onChange={(value: string) => setValue(value)}
            />
            {/* <Text style={styles.pinText}>Create PIN</Text> */}
            <DialPadKeypad
                dialPadContent={dialPadContent}
                pinLength={pinLength}
                dialPadSize={dialPadSize}
                dialPadTextSize={dialPadTextSize}
                code={code}
                setCode={setCode}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAF0E6",
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        position: "relative",
    },
    pinText: {
        fontSize: 30,
        fontWeight: "medium",
        color: "#5E454B",
    },
    pinSubText: {
        fontSize: 18,
        fontWeight: "medium",
        color: "#5E454B",
        marginVertical: 30,
    },
});

interface DialPadKeypadProps {
    dialPadContent: (number | string)[];
    pinLength: number;
    navigation?: any;
    dialPadSize: number;
    dialPadTextSize: number;
    code: Array<string>;
    setCode: (value: Array<string>) => void;
}

const DialPadKeypad: React.FC<DialPadKeypadProps> = ({
    dialPadContent,
    pinLength,
    navigation,
    dialPadSize,
    dialPadTextSize,
    code,
    setCode,
}) => {
    return (
        <FlatList
            data={dialPadContent}
            numColumns={3} // set number of columns
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        disabled={item === ""}
                        onPress={() => {
                            if (item === "X") {
                                setCode((prev) => prev.slice(0, -1));
                            } else {
                                if (code.length === pinLength - 1) {
                                    // navigation.navigate("Home");
                                }
                                setCode((prev) => [...prev, item]);
                            }
                        }}
                    >
                        <View
                            style={[
                                {
                                    backgroundColor: item === "" ? "transparent" : "#fff",
                                    width: dialPadSize,
                                    height: dialPadSize,
                                },
                                styles2.dialPadContainer,
                            ]}
                        >
                            {item === "X" ? (
                                <Feather name="delete" size={24} color="#3F1D38" />
                            ) : (
                                <Text
                                    style={[{ fontSize: dialPadTextSize }, styles2.dialPadText]}
                                >
                                    {item}
                                </Text>
                            )}
                        </View>
                    </TouchableOpacity>
                );
            }}
        />
    );
};

const styles2 = StyleSheet.create({
    dialPadContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        borderRadius: 50,
        borderColor: "transparent",
    },
    dialPadText: {
        color: "#3F1D38",
    },
});
