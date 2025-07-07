import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import MedicineReminderAdd from "./medicine-reminder-add";
import { CustomButton } from "../../../utilities/buttons";
import { Textstyles } from "../../../constants/fontsize";

const MedicineReminderPage: React.FC<{}> = () => {
  const [showAddReminder, setShowAddReminder] = useState<boolean>(false);

  return (
    <>
      <View className="flex-1">
        <ScrollView className="p-6">
          <View className="gap-y-4">
            {!showAddReminder ? (
              <>
                <ReminderTab />
                <ReminderTab />
              </>
            ) : (
              <>
                <MedicineReminderAdd />
              </>
            )}
          </View>
        </ScrollView>
      </View>
      {showAddReminder && (
        <View className="pb-6 px-6">
          <CustomButton
            Textname="Save"
            onPress={() => {
              console.log("Add Reminder");
            }}
          />
        </View>
      )}
      {!showAddReminder && (
        <TouchableOpacity
          className="absolute bottom-5 right-3 h-20 w-20 bg-primary rounded-full flex justify-center items-center"
          onPress={() => setShowAddReminder(true)}
        >
          <FontAwesome name="plus" size={30} color="white" />
        </TouchableOpacity>
      )}
    </>
  );
};

export default MedicineReminderPage;

const ReminderTab = () => {
  return (
    <TouchableOpacity className="border rounded-md border-primary flex-row">
      <View className="bg-[#0099B833] p-[10px] flex items-center justify-center">
        <Image
          source={require("../../../assets/png-icon/document-validation.png")}
          className="w-12 h-12"
        />
      </View>
      <View className="p-3">
        <Text style={[Textstyles.text_xsmall]}>Paracetamol</Text>
        <Text style={[Textstyles.text_xsma]}>2 pills per day</Text>
        <Text style={[Textstyles.text_xsma]}>28TH OCT, 2024 8:00 AM</Text>
      </View>
    </TouchableOpacity>
  );
};
