import { router } from "expo-router";
import {
  AddressBookIcon,
  DocumentvalidationIcon,
  InvoiceIcon,
  ReminderIcon,
  SettingsIcon,
  ShipmenttrackIcon,
  ShopBagicon,
  UserIcon,
  WalletIcon,
} from "../../../assets/iconsvg/Svgicon";

const openProfile = () => {
  console.log("Opening profile...");
  router.push("/profile");
};

const openSettings = () => {
  console.log("Opening settings...");
  router.push("/profile/settings");
};

const openSupport = () => {
  console.log("Opening support...");
  router.push("/profile/support");
};

const openLogout = () => {
  console.log("Logging out...");
  router.push("/");
};

const openOrderHistory = () => {
  console.log("Opening order history...");
  router.push("/profile/order-history");
};

const openOrderTracking = () => {
  console.log("Opening order tracking...");
  router.push("/profile/order-tracking");
};

const openManageAddress = () => {
  console.log("Opening manage address...");
  router.push("/profile/manage-address");
};

const openFavourites = () => {
  console.log("Opening favourites...");
  router.push("/profile/favourites");
};

const openMedicalRecords = () => {
  console.log("Opening medical records...");
  router.push("/profile/medical-records");
};

const openMedicineReminder = () => {
  console.log("Opening medicine reminder...");
  router.push("/profile/medicine-reminder");
};

const openWallet = () => {
  console.log("Opening wallet...");
  router.push("/profile/wallet");
};
const data = [
  {
    id: 1,
    name: "My Profile",
    icon: <UserIcon />,
    action: openProfile,
  },
  {
    id: 2,
    name: "My Wallet",
    icon: <WalletIcon />,
    action: openWallet,
  },
  {
    id: 3,
    name: "My Medical Records",
    icon: <DocumentvalidationIcon />,
    action: openMedicalRecords,
  },
  {
    id: 4,
    name: "Order History",
    icon: <InvoiceIcon />,
    action: openOrderHistory,
  },
  {
    id: 5,
    name: "Order Tracking",
    icon: <ShipmenttrackIcon />,
    action: openOrderTracking,
  },
  {
    id: 6,
    name: "My Favorites",
    icon: <ShopBagicon />,
    action: openFavourites,
  },
  {
    id: 7,
    name: "Manage Address",
    icon: <AddressBookIcon />,
    action: openManageAddress,
  },
  {
    id: 8,
    name: "Medicine Reminder",
    icon: <ReminderIcon />,
    action: openMedicineReminder,
  },
  {
    id: 9,
    name: "Settings",
    icon: <SettingsIcon />,
    action: openSettings,
  },
  {
    id: 10,
    name: "Customer Support",
    icon: <SettingsIcon />,
    action: openSupport,
  },
];

export default data;
