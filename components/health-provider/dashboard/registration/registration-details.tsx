import { CustomTextInput } from "components/utilities/inputs";
import { primarycolor } from "constants/color";

export default function RegistrationDetails() {
    return (
        <>
            <CustomTextInput
                label="Registration number"
                placeholder="Enter your registration number"
                value=""
                onChange={() => { }}
                required
                borderColor={primarycolor}
            />
            <CustomTextInput
                label="Registration council"
                placeholder="Enter your registration council"
                value=""
                onChange={() => { }}
                required
                borderColor={primarycolor}
            />
            <CustomTextInput
                label="Registration year"
                placeholder="yyyy"
                value=""
                onChange={() => { }}
                required
                borderColor={primarycolor}
            />
        </>
    )
}