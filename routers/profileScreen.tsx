import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Settings from "screens/health-seeker-flow/profile/settings";
import ManageAddress from "screens/health-seeker-flow/profile/manage-address";
import { RootStackParamList } from "types/stack";
import Profile from "screens/health-seeker-flow/profile";
import Wallet from "screens/health-seeker-flow/profile/wallet";
import Personal from "screens/health-seeker-flow/profile/personal";
import ProfileCompletion from "screens/health-seeker-flow/profile/profilecomplete";
import OrderHistory from "screens/health-seeker-flow/profile/orderhistory";
import OrderTracking from "screens/health-seeker-flow/profile/ordertracking";
import Favourites from "screens/health-seeker-flow/profile/favorites";
import MedicineReminder from "screens/health-seeker-flow/profile/medicine-reminder";
import MedicineReminderAdd from "screens/health-seeker-flow/profile/medicine-reminder-add";
import CustomerSupport from "screens/health-seeker-flow/profile/customer-support";
import ReferralDetails from "screens/health-seeker-flow/dashboard/notifications/referral-details";
import DrugReferralDetails from "screens/health-seeker-flow/dashboard/notifications/drug-referral-details";

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
