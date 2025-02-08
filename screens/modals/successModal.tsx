import LottieView from "lottie-react-native";
import { View } from "react-native";
import { CustomButton } from "../../components/mycomponent";
import { primarycolor } from "../../constants/color";

const SuccessModal = ({ handlenavigate }: { handlenavigate: () => void }) => {
  return (
    <>
      <View className="h-[30vh] w-full items-center bg-white rounded-t-2xl px-5">
        <LottieView
          autoPlay
          loop={true} // Ensures the animation plays only once
          style={{
            width: 200,
            height: 200,
          }}
          source={require("../../assets/SuccessModal.json")}
        />
        <CustomButton
          backgroundColor={primarycolor}
          TextColor={"#ffffff"}
          width={"100%"}
          Textname={"Login"}
          onPress={handlenavigate}
        />
      </View>
    </>
  );
};
export default SuccessModal;
