interface CustomModalProps {
    visible: boolean;
    title: string;
    message: string;
    onOk: () => void;
    onCancel: () => void;
    [key: string]: any;
}