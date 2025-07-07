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

const data = [
  {
    id: 1,
    name: "My Profile",
    icon: <UserIcon />,
    routeName: "personal",
  },
  {
    id: 2,
    name: "My Wallet",
    icon: <WalletIcon />,
    routeName: "wallet",
  },
  {
    id: 3,
    name: "My Medical Records",
    icon: <DocumentvalidationIcon />,
    routeName: "profile-completion",
  },
  {
    id: 4,
    name: "Order History",
    icon: <InvoiceIcon />,
    routeName: "order-history",
  },
  {
    id: 5,
    name: "Order Tracking",
    icon: <ShipmenttrackIcon />,
    routeName: "order-tracking",
  },
  {
    id: 6,
    name: "My Favorites",
    icon: <ShopBagicon />,
    routeName: "favorites",
  },
  {
    id: 7,
    name: "Manage Address",
    icon: <AddressBookIcon />,
    routeName: "manage-address",
  },
  {
    id: 8,
    name: "Medicine Reminder",
    icon: <ReminderIcon />,
    routeName: "medicine-reminder",
  },
  {
    id: 9,
    name: "Settings",
    icon: <SettingsIcon />,
    routeName: "settings",
  },
  {
    id: 10,
    name: "Customer Support",
    icon: <SettingsIcon />,
    routeName: "customer-support",
  },
];

export default data;
