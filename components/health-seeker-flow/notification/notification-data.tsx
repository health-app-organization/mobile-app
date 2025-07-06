export const notificationsMockData: {
  id: number;
  title: string;
  description: string;
  type: "details" | "order-details" | "emergency";
  time: string;
}[] = [
  {
    id: 1,
    // icon: <FontAwesome5 name="hospital" size={24} color="black" />,
    title: "Patient Referral Notification",
    description:
      "You have been referred to [Clinic Name]. Please contact the clinic or check your referral details for further instructions.",
    type: "details",
    time: "2min ago",
  },
  {
    id: 2,
    // icon: <MaterialCommunityIcons name="hospital-marker" size={24} color="black" />,
    title: "Drug Order Details",
    description:
      "Your drug order has been successfully placed and is being processed. Delivery details will be shared soon.",
    type: "order-details",
    time: "5min ago",
  },
  {
    id: 3,
    // icon: <MaterialCommunityIcons name="hospital-marker" size={24} color="black" />,
    title: "Drug Referral details",
    description:
      "Your drug order has been referred to [Pharmacy Name] for further processing. Please check the details or contact the pharmacy for assistance.",
    type: "order-details",
    time: "10min ago",
  },
  {
    id: 4,
    // icon: <FontAwesome5 name="hospital" size={24} color="black" />,
    title: "Patient Referral Notification",
    description:
      "You have been referred to [Clinic Name]. Please contact the clinic or check your referral details for further instructions.",
    type: "details",
    time: "15min ago",
  },
  {
    id: 5,
    // icon: <FontAwesome5 name="ambulance" size={24} color="black" />,
    title: "Emergency? we got you covered!",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris at nec egestas elit at gravida",
    type: "emergency",
    time: "20min ago",
  },
  {
    id: 6,
    // icon: <FontAwesome5 name="ambulance" size={24} color="black" />,
    title: "Emergency? we got you covered!",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris at nec egestas elit at gravida",
    type: "emergency",
    time: "25min ago",
  },
];

export const healthProviderList = [
  {
    name: "Dr Micheal Brains",
    title: "Gynecologist",
    rating: 5,
    likes: 100,
    image: "image_url_1",
  },
  {
    name: "Dr Adeola Segusi",
    title: "Neologist",
    rating: 2,
    likes: 80,
    image: "image_url_2",
  },
  {
    name: "Dr Babalola Tope",
    title: "General Medical Practioner",
    rating: 3,
    likes: 120,
    image: "image_url_3",
  },
  {
    name: "Dr Madame Koko",
    title: "Optomist",
    rating: 4,
    likes: 90,
    image: "image_url_4",
  },
  {
    name: "Dr Micheal Brains",
    title: "Gynecologist",
    rating: 5,
    likes: 100,
    image: "image_url_1",
  },
  {
    name: "Dr Adeola Segusi",
    title: "Neologist",
    rating: 2,
    likes: 80,
    image: "image_url_2",
  },
  {
    name: "Dr Babalola Tope",
    title: "General Medical Practioner",
    rating: 3,
    likes: 120,
    image: "image_url_3",
  },
  {
    name: "Dr Madame Koko",
    title: "Optomist",
    rating: 4,
    likes: 90,
    image: "image_url_4",
  },
];
