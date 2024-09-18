import React, { useEffect, useRef } from 'react';
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { height, width } from "../../constants/mobileDimensions";
import { useState } from 'react';

export const CameraPage = ({
    cameraBackArrowAction,
    setCapturedImage,
    setShowCamera,
}) => {
    const [permission, requestPermission] = useCameraPermissions();
    const [showCaptureButton, setShowCaptureButton] = useState(false);

    useEffect(() => {
        if (permission) {
            setShowCaptureButton(true);
        }
    }, [permission]);

    const captureImage = async () => {
        try {
            const photo = await camera.takePictureAsync({
                quality: 0.8,
                base64: true,
                aspect: [16, 9],
            });
            setCapturedImage(photo);
            setShowCamera(false);
            console.log("Photo captured successfully:", photo.uri);
        } catch (error) {
            console.error("Error capturing photo:", error);
        }
    };

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View className="flex-1 justify-center">
                <Text className="text-center pb-[10px]">We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    return (
        <View className="flex-1 justify-center">
            <CameraView
                className="flex-1"
                facing="back"
                flash="auto"
                CameraOrientation="portrait"
                ref={(ref) => {
                    camera = ref;
                }}
            >
                <View className="flex-1 flex-row bg-transparent m-16">
                    <View className="absolute top-0">
                        <TouchableOpacity
                            onPress={cameraBackArrowAction}
                            className="bg-gray-200 w-[50px] h-[50px] rounded-full mt-auto mb-auto ml-4 flex justify-center items-center"
                        >
                            <MaterialCommunityIcons
                                name="arrow-left"
                                size={20}
                                color="black"
                            />
                        </TouchableOpacity>
                    </View>
                    <View className="absolute bottom-0 w-full items-center">
                        {showCaptureButton && (
                            <TouchableOpacity
                                onPress={captureImage}
                                className="bg-gray-200 w-[50px] h-[50px] rounded-full mt-auto mb-auto ml-4 flex justify-center items-center"
                            >
                                <Entypo name="camera" size={24} color="black" />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </CameraView>
        </View>
    );
};
