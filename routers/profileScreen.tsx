import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Settings from "screens/patients/dashboard/profile/settings";
import ManageAddress from "screens/patients/dashboard/profile/manageaddress";
import { RootStackParamList } from "types/stack";
import Profile from "screens/patients/dashboard/profile/profile";
import Wallet from "screens/patients/dashboard/wallet";
import Personal from "screens/patients/dashboard/profile/personal";
import ProfileCompletion from "screens/patients/dashboard/profile/profilecomplete";
import OrderHistory from "screens/patients/dashboard/orderhistory";
import OrderTracking from "screens/patients/dashboard/ordertracking";
import Favourites from "screens/patients/dashboard/favourites";
import MedicineReminder from "screens/patients/dashboard/profile/medicine-reminder";
import MedicineReminderAdd from "screens/patients/dashboard/profile/medicine-reminder-add";
import CustomerSupport from "screens/patients/dashboard/profile/customer-support";
import ReferralDetails from "screens/patients/dashboard/notifications/referral-details";
import DrugReferralDetails from "screens/patients/dashboard/notifications/drug-referral-details";

const ProfileScreen = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      initialRouteName="profile"
      screenOptions={{
        headerTitle: undefined, // Remove the title for all screens
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      {/* <Stack.Screen  name="start" component={Home} /> */}
      <Stack.Screen
        name="profile"
        component={Profile}
      />

      <Stack.Screen
        name="wallet"
        component={Wallet}
      />
      <Stack.Screen
        name="settings"
        component={Settings}
      />
      <Stack.Screen
        name="personal"
        component={Personal}
      />
      <Stack.Screen
        name="profilecomplete"
        component={ProfileCompletion}
      />
      <Stack.Screen
        name="orderhistory"
        component={OrderHistory}
      />
      <Stack.Screen
        name="ordertracking"
        component={OrderTracking}
      />
      <Stack.Screen
        name="favourites"
        component={Favourites}
      />
      <Stack.Screen
        name="manage-address"
        component={ManageAddress}
      />
      <Stack.Screen
        name="medicine-reminder"
        component={MedicineReminder}
      />
      <Stack.Screen
        name="medicine-reminder-add"
        component={MedicineReminderAdd}
      />
      <Stack.Screen
        name="customer-support"
        component={CustomerSupport}
      />
      {/* //! dynamic routes */}
      <Stack.Screen
        name="referral-details"
        component={ReferralDetails}
      />
      <Stack.Screen
        name="drug-referral-details"
        component={DrugReferralDetails}
      />
    </Stack.Navigator>
  );
};
export default ProfileScreen;
