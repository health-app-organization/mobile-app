import React, { useEffect, useRef } from 'react';
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Image, Text, TouchableOpacity, View,Button } from "react-native";
import { height, width } from "../../constants/mobileDimensions";
import { useState } from 'react';
import { primarycolor } from '../../constants/color';

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
        <View style={{height:height,width:width}} className="items-center py-[88px] px-5 justify-center">   
        <View className="items-start w-full flex-row">
        <TouchableOpacity
            onPress={cameraBackArrowAction}
            style={{backgroundColor:primarycolor}} 
            className="rounded-full h-10 flex justify-center items-center w-10"   
        >
            <MaterialCommunityIcons
                name="arrow-left"
                size={20}
                color="black"
            />
        </TouchableOpacity>
        {/* <View>
            
        <Image
                            className="h-12 w-12"
                            source={require("../../assets/images/logo.png")}
                            resizeMode="contain"
                        />
        </View> */}
    </View>
    <View style={{width:width}} className="flex-1 justify-center items-center px-5">
    <CameraView
    
                className="w-screen h-72 rounded-2xl pb-3"
                facing="back"
                flash="auto"
                CameraOrientation="portrait"
                ref={(ref) => {
                    camera = ref;
                }}
            >
                <View className="flex-1 relative flex-row bg-transparent">
                 
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
           
        </View>
    );
};
