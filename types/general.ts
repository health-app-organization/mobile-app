interface IconProps {
    width?: number;
    height?: number;
    fill?: string;
    color?: string;
    stroke?: string;
}

interface UserProps {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    birthDate: string;
    gender: "male" | "female";
    bloodGroup: string;
    height: string; //change to number when making request
    weight: string; //change to number when making request
    activityLevel: string;
    foodPreferences: string;
    occupation: string;
    role: string;
    createdAt: string;
}

interface SessionProps { }

interface UserFormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    birthDate: string;
    gender: string;
    bloodGroup: string;
    height: string;
    weight: string;
    activityLevel: string;
    foodPreferences: string;
    occupation: string;
}

interface Option {
    label: string;
    value: string;
}

interface SelectMenuProps {
    routeName: string;
    label: string;
    icon: React.ReactNode;
}