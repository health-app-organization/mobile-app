// import { StatusBar } from "expo-status-bar";
// import {
//   Image,
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
// } from "react-native";
// import React, { useState } from "react";
// import { FontAwesome, Ionicons } from "@expo/vector-icons";
// import data from "./data";
// import { Textstyles } from "../../../constants/fontsize";
// import { DateComponent } from "../../../utilities/date-component";
// import { CustomButton } from "../../../utilities/buttons";
// import { router } from "expo-router";

// interface AppointmentDetailsProps {
//   appointmentId?: string; // Optional prop for future use
// }

// const AppointmentDetails = ({ appointmentId }: AppointmentDetailsProps) => {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const [currentMonthIndex, setCurrentMonthIndex] = useState(8);

//   const handleNextMonth = () => {
//     setCurrentMonthIndex((prevIndex) =>
//       prevIndex === months.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePreviousMonth = () => {
//     setCurrentMonthIndex((prevIndex) =>
//       prevIndex === 0 ? months.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <TouchableOpacity style={styles.backButton}>
//         <Ionicons name="chevron-back" size={30} color="white" />
//       </TouchableOpacity>

//       <StatusBar style="auto" />

//       <Image
//         source={require("../../../assets/images/slide1.png")}
//         style={styles.headerImage}
//       />

//       <View style={styles.contentContainer}>
//         <View style={styles.profileCard}>
//           <Text style={[Textstyles.text_medium, styles.profileName]}>
//             Prof. Dr. Micheal Brains
//           </Text>
//           <Text style={styles.profileText}>
//             Senior cardiologist and surgeon
//           </Text>
//           <Text style={styles.profileText}>
//             United state medical college & hospital
//           </Text>
//         </View>

// <View style={styles.mainContent}>
// <View style={styles.statsContainer}>
//   {data.map((item, index) => (
//     <View key={index} style={styles.statItem}>
//       <FontAwesome
//         name={item.iconName}
//         size={24}
//         color={item.color}
//       />
//       <View style={styles.statTextContainer}>
//         <Text style={styles.statPrimaryText}>{item.text1}</Text>
//         <Text style={styles.statSecondaryText}>{item.text2}</Text>
//       </View>
//     </View>
//   ))}
// </View>

//           <View style={styles.section}>
//             <Text style={[Textstyles.text_medium, styles.sectionTitle]}>
//               About Doctor Micheal
//             </Text>
//             <Text style={styles.descriptionText}>
//               He is a top Senior Cardiologist and Surgeon at the United States
//               Medical College & Hospital, with 20+ years of experience in heart
//               treatments and surgeries. His expertise and compassionate care
//               make him a trusted choice for cardiovascular health.
//             </Text>
//           </View>

//           <View style={styles.scheduleContainer}>
//             <View style={styles.scheduleColumn}>
//               <Text style={[Textstyles.text_small, styles.scheduleTitle]}>
//                 Consultations Only
//               </Text>
//               <ScheduleDay day="Mondays" time="10:00AM - 02:00PM" />
//               <ScheduleDay day="Wednesdays" time="09:00AM - 12:00PM" />
//               <ScheduleDay day="Fridays" time="12:00PM - 04:00PM" />
//             </View>

//             <View style={styles.divider} />

//             <View style={styles.scheduleColumn}>
//               <Text style={[Textstyles.text_small, styles.scheduleTitle]}>
//                 Visitations
//               </Text>
//               <ScheduleDay day="Wednesdays" time="09:00AM - 12:00PM" />
//               <ScheduleDay day="Fridays" time="12:00PM - 04:00PM" />
//             </View>
//           </View>

//           <View style={styles.availabilitySection}>
//             <View style={styles.monthSelector}>
//               <Text style={[Textstyles.text_medium, styles.availabilityTitle]}>
//                 Availability Status
//               </Text>
//               <View style={styles.monthNavigation}>
//                 <TouchableOpacity onPress={handlePreviousMonth}>
//                   <Ionicons name="chevron-back" size={30} color="#00000080" />
//                 </TouchableOpacity>
//                 <Text style={styles.monthText}>
//                   {months[currentMonthIndex]}
//                 </Text>
//                 <TouchableOpacity onPress={handleNextMonth}>
//                   <Ionicons
//                     name="chevron-forward"
//                     size={30}
//                     color="#00000080"
//                   />
//                 </TouchableOpacity>
//               </View>
//             </View>
//             <DateComponent />
//           </View>

//           <View style={styles.experienceSection}>
//             <View style={styles.experienceHeader}>
//               <Text style={[Textstyles.text_medium]}>Experience</Text>
//               <Text style={[Textstyles.text_medium]}>6 years</Text>
//             </View>

//             <ExperienceItem
//               hospital="Christ Bay Hospital"
//               position="Medical Laboratory Scientist"
//             />
//             <ExperienceItem
//               hospital="Christ Bay Hospital"
//               position="Medical Laboratory Scientist"
//             />
//             <ExperienceItem
//               hospital="Christ Bay Hospital"
//               position="Medical Laboratory Scientist"
//             />
//           </View>

//           <CustomButton
//             Textname="Book Appointment"
//             onPress={() => router.push("/dashboard/book-appointment")}
//           />
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// // Helper Components
// const ScheduleDay = ({ day, time }: { day: string; time: string }) => (
//   <View style={styles.scheduleDay}>
//     <Text style={styles.dayText}>{day}</Text>
//     <Text style={[Textstyles.text_small, styles.timeText]}>{time}</Text>
//   </View>
// );

// const ExperienceItem = ({
//   hospital,
//   position,
// }: {
//   hospital: string;
//   position: string;
// }) => (
//   <View style={styles.experienceItem}>
//     <FontAwesome name="hospital-o" size={24} color="black" />
//     <View style={styles.experienceTextContainer}>
//       <Text style={[Textstyles.text_small]}>{hospital}</Text>
//       <Text style={[Textstyles.text_small, styles.positionText]}>
//         {position}
//       </Text>
//     </View>
//   </View>
// );

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//   },
//   backButton: {
//     position: "absolute",
//     top: 48,
//     left: 20,
//     zIndex: 50,
//   },
//   headerImage: {
//     width: "100%",
//     height: "60%",
//     maxHeight: 400,
//   },
//   contentContainer: {
//     backgroundColor: "white",
//     paddingTop: 64,
//     borderTopLeftRadius: 24,
//     borderTopRightRadius: 24,
//     marginTop: -20,
//   },
//   profileCard: {
//     width: "90%",
//     height: 100,
//     backgroundColor: "#0099B8",
//     left: "5%",
//     position: "absolute",
//     zIndex: 10,
//     top: -64,
//     borderRadius: 8,
//     shadowColor: "#E2E8F0",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.2,
//     shadowRadius: 1,
//     elevation: 2,
//     padding: 12,
//     justifyContent: "space-evenly",
//   },
//   profileName: {
//     color: "white",
//     textAlign: "center",
//   },
//   profileText: {
//     color: "white",
//     textAlign: "center",
//   },
//   mainContent: {
//     paddingHorizontal: "5%",
//     paddingBottom: 16,
//     gap: 16,
//   },
//   statsContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   statItem: {
//     flexDirection: "column",
//     alignItems: "center",
//     gap: 12,
//     padding: 12,
//   },
//   statTextContainer: {
//     flexDirection: "column",
//     alignItems: "center",
//     gap: 4,
//   },
//   statPrimaryText: {
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   statSecondaryText: {
//     fontSize: 14,
//   },
//   section: {
//     gap: 8,
//   },
//   sectionTitle: {
//     textAlign: "center",
//   },
//   descriptionText: {
//     textAlign: "center",
//   },
//   scheduleContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//   },
//   scheduleColumn: {
//     width: "48%",
//     gap: 12,
//   },
//   divider: {
//     width: 1,
//     height: "100%",
//     backgroundColor: "#0099B8",
//   },
//   scheduleTitle: {
//     fontWeight: "700",
//   },
//   scheduleDay: {
//     gap: 4,
//   },
//   dayText: {
//     color: "#0099B8",
//   },
//   timeText: {
//     fontWeight: "700",
//   },
//   availabilitySection: {
//     paddingTop: 16,
//     gap: 16,
//   },
//   monthSelector: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   availabilityTitle: {
//     fontSize: 16,
//   },
//   monthNavigation: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 8,
//   },
//   monthText: {
//     color: "#00000080",
//     fontSize: 16,
//   },
//   experienceSection: {
//     gap: 8,
//   },
//   experienceHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   experienceItem: {
//     flexDirection: "row",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     gap: 16,
//   },
//   experienceTextContainer: {
//     gap: 4,
//   },
//   positionText: {
//     color: "#6B7280",
//   },
// });

// export default AppointmentDetails;

import { StatusBar } from "expo-status-bar";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import data from "./data";
import { Textstyles } from "../../../constants/fontsize";
import { DateComponent } from "../../../utilities/date-component";
import { CustomButton } from "../../../utilities/buttons";
import { router } from "expo-router";

interface AppointmentDetailsProps {
  appointmentId?: string;
}

const AppointmentDetails = ({ appointmentId }: AppointmentDetailsProps) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [currentMonthIndex, setCurrentMonthIndex] = useState(8);

  const handleNextMonth = () => {
    setCurrentMonthIndex((prevIndex) =>
      prevIndex === months.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousMonth = () => {
    setCurrentMonthIndex((prevIndex) =>
      prevIndex === 0 ? months.length - 1 : prevIndex - 1
    );
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={30} color="white" />
        </TouchableOpacity>

        <StatusBar style="auto" />

        <Image
          source={require("../../../assets/images/slide1.png")}
          style={styles.headerImage}
          resizeMode="cover"
        />

        <View style={styles.contentContainer}>
          <View style={styles.profileCard}>
            <Text style={[Textstyles.text_medium, styles.profileName]}>
              Prof. Dr. Micheal Brains
            </Text>
            <Text style={styles.profileText}>
              Senior cardiologist and surgeon
            </Text>
            <Text style={styles.profileText}>
              United state medical college & hospital
            </Text>
          </View>

          <View style={styles.mainContent}>
            {/* <View style={styles.statsContainer}>
              {data.map((item, index) => (
                <View key={index} style={styles.statItem}>
                  <FontAwesome
                    name={item.iconName}
                    size={24}
                    color={item.color}
                  />
                  <View style={styles.statTextContainer}>
                    <Text style={styles.statPrimaryText}>{item.text1}</Text>
                    <Text style={styles.statSecondaryText}>{item.text2}</Text>
                  </View>
                </View>
              ))}
            </View> */}

            <View style={styles.statsContainer}>
              {data.map((item, index) => (
                <View key={index} style={styles.statItem}>
                  <FontAwesome
                    name={item.iconName}
                    size={24}
                    color={item.color}
                  />
                  <View style={styles.statTextContainer}>
                    <Text style={styles.statPrimaryText}>{item.text1}</Text>
                    <Text style={styles.statSecondaryText}>{item.text2}</Text>
                  </View>
                </View>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={[Textstyles.text_medium, styles.sectionTitle]}>
                About Doctor Micheal
              </Text>
              <Text style={styles.descriptionText}>
                He is a top Senior Cardiologist and Surgeon at the United States
                Medical College & Hospital, with 20+ years of experience in
                heart treatments and surgeries. His expertise and compassionate
                care make him a trusted choice for cardiovascular health.
              </Text>
            </View>

            <View style={styles.scheduleContainer}>
              <View style={styles.scheduleColumn}>
                <Text style={[Textstyles.text_small, styles.scheduleTitle]}>
                  Consultations Only
                </Text>
                <ScheduleDay day="Mondays" time="10:00AM - 02:00PM" />
                <ScheduleDay day="Wednesdays" time="09:00AM - 12:00PM" />
                <ScheduleDay day="Fridays" time="12:00PM - 04:00PM" />
              </View>

              <View style={styles.divider} />

              <View style={styles.scheduleColumn}>
                <Text style={[Textstyles.text_small, styles.scheduleTitle]}>
                  Visitations
                </Text>
                <ScheduleDay day="Wednesdays" time="09:00AM - 12:00PM" />
                <ScheduleDay day="Fridays" time="12:00PM - 04:00PM" />
              </View>
            </View>

            <View style={styles.availabilitySection}>
              <View style={styles.monthSelector}>
                <Text
                  style={[Textstyles.text_medium, styles.availabilityTitle]}
                >
                  Availability Status
                </Text>
                <View style={styles.monthNavigation}>
                  <TouchableOpacity onPress={handlePreviousMonth}>
                    <Ionicons name="chevron-back" size={30} color="#00000080" />
                  </TouchableOpacity>
                  <Text style={styles.monthText}>
                    {months[currentMonthIndex]}
                  </Text>
                  <TouchableOpacity onPress={handleNextMonth}>
                    <Ionicons
                      name="chevron-forward"
                      size={30}
                      color="#00000080"
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <DateComponent />
            </View>

            <View style={styles.experienceSection}>
              <View style={styles.experienceHeader}>
                <Text style={[Textstyles.text_medium]}>Experience</Text>
                <Text style={[Textstyles.text_medium]}>6 years</Text>
              </View>

              <ExperienceItem
                hospital="Christ Bay Hospital"
                position="Medical Laboratory Scientist"
              />
              <ExperienceItem
                hospital="Christ Bay Hospital"
                position="Medical Laboratory Scientist"
              />
              <ExperienceItem
                hospital="Christ Bay Hospital"
                position="Medical Laboratory Scientist"
              />
            </View>

            <CustomButton
              Textname="Book Appointment"
              onPress={() => router.push("/dashboard/book-appointment")}
              style={styles.bookButton}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// Helper Components
const ScheduleDay = ({ day, time }: { day: string; time: string }) => (
  <View style={styles.scheduleDay}>
    <Text style={styles.dayText}>{day}</Text>
    <Text style={[Textstyles.text_small, styles.timeText]}>{time}</Text>
  </View>
);

const ExperienceItem = ({
  hospital,
  position,
}: {
  hospital: string;
  position: string;
}) => (
  <View style={styles.experienceItem}>
    <FontAwesome name="hospital-o" size={24} color="black" />
    <View style={styles.experienceTextContainer}>
      <Text style={[Textstyles.text_small]}>{hospital}</Text>
      <Text style={[Textstyles.text_small, styles.positionText]}>
        {position}
      </Text>
    </View>
  </View>
);

// Styles
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  scrollContent: {
    paddingBottom: 60,
  },
  backButton: {
    position: "absolute",
    top: 48,
    left: 20,
    zIndex: 50,
  },
  headerImage: {
    width: "100%",
    height: 300,
  },
  contentContainer: {
    backgroundColor: "white",
    paddingTop: 64,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
  },
  profileCard: {
    width: "90%",
    height: 100,
    backgroundColor: "#0099B8",
    left: "5%",
    position: "absolute",
    zIndex: 10,
    top: -64,
    borderRadius: 8,
    shadowColor: "#E2E8F0",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
    padding: 12,
    justifyContent: "space-evenly",
  },
  profileName: {
    color: "white",
    textAlign: "center",
  },
  profileText: {
    color: "white",
    textAlign: "center",
  },
  mainContent: {
    paddingHorizontal: 5,
    paddingBottom: 20,
    gap: 16,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  statItem: {
    width: "48%",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    padding: 12,
    marginBottom: 12,
  },
  statTextContainer: {
    flexDirection: "column",

    alignItems: "center",
    gap: 4,
  },
  statPrimaryText: {
    fontSize: 16,
    fontWeight: "600",
  },
  statSecondaryText: {
    fontSize: 14,
  },
  section: {
    gap: 8,
  },
  sectionTitle: {
    textAlign: "center",
  },
  descriptionText: {
    textAlign: "center",
    lineHeight: 22,
  },
  scheduleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 16,
  },
  scheduleColumn: {
    width: "48%",
    gap: 12,
  },
  divider: {
    width: 1,
    height: "100%",
    backgroundColor: "#0099B8",
  },
  scheduleTitle: {
    fontWeight: "700",
  },
  scheduleDay: {
    gap: 4,
  },
  dayText: {
    color: "#0099B8",
  },
  timeText: {
    fontWeight: "700",
  },
  availabilitySection: {
    paddingTop: 16,
    gap: 16,
  },
  monthSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  availabilityTitle: {
    fontSize: 16,
  },
  monthNavigation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  monthText: {
    color: "#00000080",
    fontSize: 16,
  },
  experienceSection: {
    gap: 8,
    marginTop: 16,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  experienceItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 16,
    paddingVertical: 8,
  },
  experienceTextContainer: {
    gap: 4,
  },
  positionText: {
    color: "#6B7280",
  },
  bookButton: {
    marginTop: 24,
  },
});

export default AppointmentDetails;
