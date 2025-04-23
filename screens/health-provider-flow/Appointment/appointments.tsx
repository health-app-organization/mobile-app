import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { DateComponent } from "components/utilities/date-component";

const Appointments = () => {
  const navigation = useNavigation();
   const [activeTab, setActiveTab] = useState<"Online" | "clinic">(
      "Online")
  const [appointments, setAppointments] = useState([
    {
      time: '06:00 PM',
      name: 'Praise Chanel',
      slot: '09:00AM - 09:30AM',
      status: 'Completed',
      image: require('../../../assets/images/pana.png'),
    },
    {
      time: '08:00 PM',
      name: 'Praise Chanel',
      slot: '08:00AM - 08:30AM',
      status: 'In Progress',
      image: require('../../../assets/images/pana.png'),
    },
    {
      time: '09:00 PM',
      name: 'Praise Chanel',
      slot: '09:00AM - 09:30AM',
      status: 'Upcoming',
      image: require('../../../assets/images/pana.png'),
    },
  ]);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event: any, date?: Date) => {
    if (date) setSelectedDate(date);
    setShowPicker(false);
  };

  return (
    <View>
      {/* Toggle Buttons */}
      <View className="flex-row justify-center my-4">
       <TouchableOpacity
                className={`px-4 py-2 w-[162px] flex justify-center items-center h-[41px] rounded-xl mx-2 ${activeTab === "Online" ? "bg-[#0099B8]" : "bg-[#0099B833]"
                  }`}
                onPress={() => setActiveTab("Online")}
              >
                <Text
                  className={`font-semibold text-center ${activeTab === "Online" ? "text-white" : "text-black"
                    }`}
                >
                  Online
                </Text>
              </TouchableOpacity>
       <TouchableOpacity
                className={`px-4 py-2 w-[162px] h-[41px] flex justify-center items-center rounded-xl mx-2 ${activeTab === "clinic" ? "bg-[#0099B8]" : "bg-[#0099B833]"
                  }`}
                onPress={() => setActiveTab("clinic")}
              >
                <Text
                  className={`font-semibold  text-center${activeTab === "clinic" ? "text-white" : "text-black"
                    }`}
                >
                  Clinic
                </Text>
              </TouchableOpacity>
      </View>

      {/* Date Picker */}
      <View className="px-4">
        {showPicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}
      </View>

      {/* Scrollable Date List */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4 flex-row mt-4">
        <DateComponent />
      </ScrollView>

      {/* Appointment Cards */}
      <ScrollView className="p-4">
        {appointments.map((item, idx) => (
          <View key={idx}>
            <Text className="text-blue-400 font-semibold mb-1">{item.time}</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('AppointmentDetail', {
                  name: item.name,
                  time: item.time,
                  slot: item.slot,
                  status: item.status,
                  image: item.image,
                })
              }
            >
              <View className="bg-white flex-row p-4 rounded-xl mb-4 items-center shadow-sm">
                <Image
                  source={typeof item.image === 'string' ? { uri: item.image } : item.image}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <View className="flex-1">
                  <Text className="font-semibold text-base">{item.name}</Text>
                  <Text className="text-gray-500 text-xs">{item.slot}</Text>
                  {item.status === 'Completed' && (
                    <Text className="text-green-600 text-xs font-semibold mt-1">Completed</Text>
                  )}
                  {item.status === 'In Progress' && (
                    <View className="bg-gray-200 rounded h-1 mt-1 overflow-hidden">
                      <View className="bg-teal-600 w-1/2 h-full" />
                    </View>
                  )}
                  {item.status === 'Upcoming' && (
                    <Text className="text-gray-500 text-xs mt-1">Upcoming</Text>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Appointments;
