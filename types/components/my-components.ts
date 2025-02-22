interface CustomButtonProps {
    Textname?: string;
    onPress?: () => void;
    backgroundColor?: string | undefined;
    TextColor?: string | undefined;
    borderWidth?: number;
    borderColor?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    props?: any;
    width?: string | number;
    height?: string | number;
    isLoading?: boolean;
    disabled?: boolean;
}

interface CustomInputProps {
    placeholder: string;
    value: string | undefined;
    secureTextEntry?: boolean;
    keyboardType?: string;
    autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
    autoCorrect?: boolean;
    props?: any;
    width?: string | number;
    borderColor?: string;
    borderWidth?: number;
    backgroundColor?: string;
    disabled?: boolean;
    placeholderTextColor?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onChange: (text: string) => void;
    errorMessage?: string;
    headerText?: string;
    className?: string;
};

interface CustomSelectProps {
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    placeHolder: string;
    placeholderTextColor: string;
}

interface CustomSelectRadioProps {
    options: string[];
    selected: string;
    setSelected: (value: string) => void;
}

interface CustomRadioSingleOptionProps {
    value: string;
    onPress: () => void;
    selected: boolean;
}

interface BoxProps {
    inputText: string;
}

interface IconplaceholderProps {
    backgroundColor: string;
    width: number;
    height: number;
    Icon: React.ReactNode;
}

interface CustomHeaderProps {
    title?: string;
    rightIcon?: React.ReactNode;
    onRightIconPress?: () => void;
    // header9
    profileName?: string;
    profileCompletion?: string;
    //
    marginLeft?: number;
}

interface ProviderCardProps {
    name: string;
    title: string;
    rating: number;
    likes: number;
    onPress: () => void;
    image: string;
    reviews?: number;
}

interface CartCardProps {
    name: string;
    title?: string;
    rating?: number;
    likes?: number;
    onPress: () => void;
}

interface PaymentInputProps {
    placeholder: string;
    placeholderTextColor: string;
    onChange: (text: string) => void;
    value: string;
    sideIcon?: React.ReactNode;
    disabled?: boolean;
    onFocusCustomKeyboard?: () => void;
}

interface PaymentMethodProps {
    selectedMethod: string;
    onSelect: (method: string) => void;
}

interface ChatListProps {
    profileImage: string | { uri: string };
    name: string;
    message: string;
    time: string;
    unreadCount: number;
}

interface NotificationCardProps {
    title: string;
    description: string;
    type: string;
    time: string;
}

interface MenuButtonProps {
    icon: React.ReactNode;
    text: React.ReactNode;
    onPress: () => void;
}

interface StatsCardProps {
    icon: any;
    value: string;
    label: string;
}

interface OptionButtonProps {
    optionName: string;
    isSelected: boolean;
    onSelect: () => void;
    width?: string | number;
}

interface CustomTextNumberLabel {
    label?: string;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    placeholder?: string;
    placeholderTextColor?: string;
    onChange: (text: string) => void;
    secureTextEntry?: boolean;
    disabled?: boolean;
    value: string;
}

interface CustomDropdownProps {
    headerText?: string;
    options: { value: string; label: string }[];
    placeholder: string | React.ReactNode;
    onChange: (value: string) => void;
    disable?: boolean;
    value: string | undefined;
    leftIcon?: React.ReactNode;
}

interface FloatingActionButtonProps {
    onPress: () => void;
}

interface AppointmentCardProps {
    title: string;
    doctorName: string;
    dateTime: string;
}

interface DoctorCardProps {
    name: string;
    session: string;
    time: string;
    imageSource: any;
    onPress: () => void;
}