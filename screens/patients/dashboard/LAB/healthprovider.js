import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  CustomButton,
  DataDisplayModay,
  Header,
  Selectionpicker,
} from "../../../../components/mycomponent";
import { Textstyles } from "../../../../constants/fontsize";
import { primarycolor, whitecolor } from "../../../../constants/color";
import { useNavigation } from "@react-navigation/native";

const HealthcareProviderScreen = () => {
  const navigation=useNavigation()
  const healthprovider = [
    { label: "General Doctor", value: "General Doctor" },
    { label: "Nurse", value: "Nurse" },
    { label: "Massage Therapist", value: "Massage Therapist" },
    { label: "Optometrist", value: "Optometrist" },
    { label: "Gynecologists", value: "Gynecologists" },
    { label: "Cardiologist", value: "Cardiologist" },
    { label: "Pharmacist", value: "Pharmacist" },
    { label: "Surgeon", value: "Surgeon" },
  ];

  const department = [
    { label: "Pediatrics", value: "Pediatrics" },
    { label: "Cardiology", value: "Cardiology" },
    { label: "Oncology", value: "Oncology" },
  ];

  const [datadisplay, setDatadisplay] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [healthProviderValue, setHealthProviderValue] = useState('');
  const [UrgencyTitle, setUrgencyTitle] = useState('How soon do you want care?');
  const [LocationTitle, setLocationTitle] = useState('Where do you want care?');
  const [healthProviderTitle, setHealthProviderTitle] = useState('Select Healthcare Provider');
  const [departmentValue, setDepartmentValue] = useState('');
  const [UrgencyValue,setUrgencyValue]=useState('');
  const [locationValue,setLocationValue]=useState('')
  const [departmentTitle, setDepartmentTitle] = useState('Select Department');
  const [title, setTitle] = useState('');

  // Show modal and set data display
  const handleShowModal = (data, modalTitle, setSelectedValue) => {
    setDatadisplay(data);
    setTitle(modalTitle);
    setShowModal(true);
    setCurrentSetter(() => setSelectedValue); // Store the setter function
  };

  // State to track the current setter function
  const [currentSetter, setCurrentSetter] = useState(null);
const urgent = [
  { label: "Urgent Care", value: "Urgent Care" },
  { label: "Non-Urgent Care", value: "Non-Urgent Care" },
];
const location = [
  { label: "Video Consultation", value: "Video Consultation" },
  { label: "Home Consultation", value: "Home Consultation" },
  { label: "Clinic Consultation", value: "Clinic Consultation" },
];
  // Handler for setting selected value generically
  const handleSelectValue = (value) => {
    if (currentSetter) currentSetter(value);
    setShowModal(false);
  };


  // Save action
  const handleSave = () => {
    console.log("Saved:", {
      healthProvider: healthProviderValue,
      department: departmentValue,
    });
    navigation.navigate('listofhealthproviders')
  };

  return (
    <>
      {showModal && (
        <View className="absolute h-full z-50 justify-center items-center w-full">
          <DataDisplayModay
            setshowmodal={setShowModal}
            data={datadisplay}
            setSelectedValue={handleSelectValue} // Generic function to set the selected value
            title={title}
          />
        </View>
      )}
      <View className="flex-1 bg-white">
        <Header title="Healthcare Provider" marginLeft={-80} />
        <Text
          className="text-[28px] font-semibold mt-5 ml-8 mb-7"
          style={[Textstyles.text_cmedium]}
        >
          What sector would you like to book?
        </Text>
        <View className="px-3">
        <View>
            <Text style={[Textstyles.text_xmedium]}>Healthcare provider</Text>
          </View>
          <Selectionpicker
            Title={healthProviderValue || healthProviderTitle}
            onPress={() => handleShowModal(healthprovider, 'Select Healthcare Provider', setHealthProviderValue)}
          />
          <View className="h-3" />
          <View>
            <Text style={[Textstyles.text_xmedium]}>Dapartment</Text>
          </View>
          <Selectionpicker
            Title={departmentValue || departmentTitle}
            onPress={() => handleShowModal(department, 'Select Department', setDepartmentValue)}
          />
             <View className="h-3" />
             <View>
            <Text style={[Textstyles.text_xmedium]}>Urgency</Text>
          </View>
          <Selectionpicker
            Title={UrgencyValue || UrgencyTitle}
            onPress={() => handleShowModal(urgent, 'How soon do you want care?', setUrgencyValue)}
          />
             <View className="h-3" />
             <View>
            <Text style={[Textstyles.text_xmedium]}>Location</Text>
          </View>
          <Selectionpicker
            Title={locationValue || LocationTitle}
            onPress={() => handleShowModal(location, 'Where do you want care?', setLocationValue)}
          />

        </View>
        <View className="mt-10 px-3">
          <CustomButton
            Textname={"Save"}
            backgroundColor={primarycolor}
            TextColor={whitecolor}
            onPress={handleSave}
          />
        </View>
      </View>
    </>
  );
};
{/* <CustomDropdownWithHeader
headerText="Department"
placeholder="Select Department"
onChange={handleDropdownChange}
/>
<View className=" h-3" />
<CustomDropdownWithHeader
headerText="Urgency"
options={urgent}
placeholder="How soon do you want care?"
onChange={handleDropdownChange}
/>
<View className=" h-3" />
<CustomDropdownWithHeader
headerText="Location"
options={location}
placeholder="Where do you want care?"
onChange={handleDropdownChange}
/> */}
// const urgent = [
//   { label: "Urgent Care", value: "Urgent Care" },
//   { label: "Non-Urgent Care", value: "Non-Urgent Care" },
// ];
// const location = [
//   { label: "Video Consultation", value: "Video Consultation" },
//   { label: "Home Consultation", value: "Home Consultation" },
//   { label: "Clinic Consultation", value: "Clinic Consultation" },
// ];
export default HealthcareProviderScreen;
