interface CustomButtonProps {
    Textname: string;
    onPress: () => void;
    backgroundColor: string | undefined;
    TextColor: string | undefined;
    borderWidth?: number;
    borderColor?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    props?: any;
    width?: string | number;
    isLoading?: boolean;
    disabled?: boolean;
}

interface CustomInputProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
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
    title: string;
}

interface ProviderCardProps {
    name: string;
    title: string;
    rating: number;
    likes: number;
    onPress: () => void;
    image: string;
}

interface CartCardProps {
    name: string;
    title: string;
    rating: number;
    likes: number;
    onPress: () => void;
}