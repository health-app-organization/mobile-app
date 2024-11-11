import {
  View,
  StatusBar,
} from "react-native";
import HeaderTitle, {
  Providercard,
} from "../../mycomponents/mycomponent";
import { useNavigation } from "@react-navigation/native";
import Footer from "./footer";

const Appointments = () => {
  const navigation = useNavigation();

  return (
    <>
      <View className=" py-[40px] h-full">
        <StatusBar style="auto" />
        <View>
          <HeaderTitle title="My Appointment" />
        </View>

        <View className=" px-5 mt-10">
          <Providercard
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            likes={250}
            onPress={() => navigation.navigate('apponitmentdetails')}
          />
        </View>
      </View>
      <Footer
        activepros={'Appointment'}
      />

    </>

  );
};

export default Appointments;
