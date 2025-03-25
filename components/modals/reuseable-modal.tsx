import { View } from "react-native";
import { Modal } from "react-native";

export default function ReuseableModal({
    children,
    showModal,
    setShowModal,
    containerClassName,
}: {
    children: React.ReactNode;
    showModal: boolean;
    setShowModal: (value: boolean) => void;
    containerClassName?: string;
}) {
    return (
        <Modal
            visible={showModal}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setShowModal(false)}
        >
            <View className={`w-full h-full bg-black/50 items-center ${containerClassName}`}>{children}</View>
        </Modal>
    );
}
