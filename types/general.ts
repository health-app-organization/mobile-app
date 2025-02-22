interface IconProps {
    width?: number;
    height?: number;
    fill?: string;
    color?: string;
    stroke?: string;
}

export interface UserProps {
    id: number;
    firstName: string | null;
    lastName: string | null;
    email: string;
    phoneNumber: string;
    birthDate: string | null;
    gender: "male" | "female" | null;
    bloodGroup: string | null;
    height: string | null; //change to number when making request
    weight: string | null; //change to number when making request
    activityLevel: string | null;
    foodPreferences: string | null;
    occupation: string | null;
    role: "user" | "provider" | "organization";
    createdAt: string;
}

interface SessionProps { }

export interface UserFormData {
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

export interface SelectMenuProps {
    routeName: string;
    label: string;
    icon: React.ReactNode;
}