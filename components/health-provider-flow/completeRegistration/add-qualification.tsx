import { CustomDropdownWithHeader } from "components/utilities/dropdowns";
import { CustomTextInput } from "components/utilities/inputs";
import { primarycolor } from "constants/color";
import { View } from "react-native";

export default function AddQualification() {
    return (
        <>
            <CustomTextInput
                label="Qualification"
                placeholder="Enter your qualification"
                value=""
                onChange={() => { }}
                required
                borderColor={primarycolor}
            />
            <CustomDropdownWithHeader
                label="College/University"
                options={[
                    { label: "Option 1", value: "option1" },
                    { label: "Option 2", value: "option2" },
                ]}
                placeholder="Select college/university"
                value=""
                onChange={() => { }}
                required
            />
            <View className="flex-row gap-x-4">
                <View className="flex-1">
                    <CustomTextInput
                        label="Start year"
                        placeholder="mm/yy"
                        value=""
                        onChange={() => { }}
                        required
                        borderColor={primarycolor}
                    />
                </View>
                <View className="flex-1">
                    <CustomTextInput
                        label="End year"
                        placeholder="mm/yy"
                        value=""
                        onChange={() => { }}
                        required
                        borderColor={primarycolor}
                    />
                </View>
            </View>
        </>
    )
}