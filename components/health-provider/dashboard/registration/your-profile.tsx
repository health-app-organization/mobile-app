import { CustomTextInput } from "components/utilities/inputs";
import { Image, TouchableOpacity, View } from "react-native";
import SelectInput from "./select-input";
import { primarycolor } from "constants/color";

export default function YourProfile({
    setCurrentPage,
    setShowClinicModal,
}: {
    setCurrentPage: (pageNo: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7) => void;
    setShowClinicModal: (show: boolean) => void;
}) {
    return (
        <>
            <ProfileImagePicker />
            <CustomTextInput
                label="Full name"
                placeholder="Enter your fullname"
                value=""
                onChange={() => { }}
                leftIcon={
                    <Image
                        source={require("../../../../assets/png-icon/user.png")}
                        className="size-6"
                        resizeMode="contain"
                    />
                }
                required
                borderColor={primarycolor}
            />
            <SelectInput
                label="Educational qualification"
                required
                placeholder="Add educational qualification"
                borderColor={primarycolor}
                onPress={() => setCurrentPage(1)}
            />
            <SelectInput
                label="Registration details"
                required
                placeholder="Add registration details"
                borderColor={primarycolor}
                onPress={() => setCurrentPage(2)}
            />
            <SelectInput
                label="Clinic"
                required
                placeholder="Add clinic"
                borderColor={primarycolor}
                onPress={() => setShowClinicModal(true)}
            />
            <CustomTextInput
                label="Years of experience"
                placeholder="Enter your years of experience"
                value=""
                onChange={() => { }}
                required
                borderColor={primarycolor}
            />
            <CustomTextInput
                label="About me"
                placeholder="Write about yourself"
                value=""
                onChange={() => { }}
                required
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                borderColor={primarycolor}
            />
        </>
    );
}

function ProfileImagePicker() {
    return (
        <View className="items-center">
            <View>
                <Image
                    source={require("../../../../assets/png-icon/image-10.png")}
                    className="size-24"
                    resizeMode="contain"
                />
                <TouchableOpacity className="bg-primary rounded-full w-8 h-8 items-center justify-center absolute bottom-0 right-0">
                    <Image
                        source={require("../../../../assets/png-icon/camera-01.png")}
                        className="size-4"
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
