import dayjs from "dayjs";
import { Dispatch, SetStateAction } from "react";
import { DateType } from "react-native-ui-datepicker";

export const handleOtpInput = ({
    value,
    setOtp,
    otp,
    setErrorMessage,
}: {
    value: string;
    otp: string[];
    setOtp: Dispatch<SetStateAction<string[]>>;
    setErrorMessage: (msg: string | null) => void;
}) => {
    if (value === "") {
        // Handle deletion of the last inputted digit
        setOtp((prevOtp) => {
            const lastFilledIndex = prevOtp.findLastIndex(
                (digit: string) => digit !== ""
            );
            if (lastFilledIndex > -1) {
                const newOtp = [...prevOtp];
                newOtp[lastFilledIndex] = "";
                return newOtp;
            }
            return prevOtp;
        });
    } else if (value === "*") {
        // Handle OTP submission when "*" is pressed
        if (otp.some((digit) => digit === "")) {
            setErrorMessage("Incomplete OTP");
        } else {
            setErrorMessage(null);
            console.log("OTP Submitted:", otp.join(""));
            // Handle OTP submission logic here
        }
    } else {
        // Add new digit to the first empty slot
        setOtp((prevOtp) => {
            const nextEmptyIndex = prevOtp.indexOf("");
            if (nextEmptyIndex > -1) {
                const newOtp = [...prevOtp];
                newOtp[nextEmptyIndex] = value;
                return newOtp;
            }
            return prevOtp;
        });
    }
};

export const handleKeyboardInput = (
    value: string,
    amount: string,
    setAmount: React.Dispatch<React.SetStateAction<string>>
) => {
    if (value === "") {
        setAmount((prev) => prev.slice(0, -1)); // Remove the last digit
    } else if (value === "*") {
        console.log("Submit amount:", amount);
    } else {
        setAmount((prev) => prev + value); // Append the new digit
    }
};

export const formatDate = (date: DateType) => {
    return dayjs(date).format('YYYY-MM-DD');
}

export const formatTime = (date: DateType) => {
    return dayjs(date).format('HH:mm');
}
