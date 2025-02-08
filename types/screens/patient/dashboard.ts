interface DataItem {
    label: string;
    value: string;
}

interface HandleShowModal {
    (data: DataItem[], modalTitle: string, setSelectedValue: React.Dispatch<React.SetStateAction<string>>): void;
}

interface HandleSelectValue {
    (value: string): void;
}