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
