import { Path, Svg } from "react-native-svg";

export const HomeIcons = ({ fill, stroke, height, width }: IconProps) => {
    return (
        <>
            <Svg width={width} height={height} viewBox="0 0 24 24">
                <Path
                    d="M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.617 2 12.0001 2C13.3831 2 14.5818 2.86667 16.9791 4.6L18.4189 5.64106C20.3461 7.03443 21.3096 7.73112 21.7439 8.74938C22.1782 9.76763 22.0017 10.9162 21.6487 13.2135L21.3477 15.1724C20.8472 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5537 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z"
                    fill={fill}
                    stroke={stroke}
                    stroke-width="1.5"
                    stroke-linejoin="round"
                />
                <Path
                    d="M8.99956 22L8.74893 18.4911C8.61418 16.6046 10.1083 15 11.9996 15C13.8909 15 15.385 16.6046 15.2502 18.4911L14.9996 22"
                    fill="#ffffff"
                />
                <Path
                    d="M8.99956 22L8.74893 18.4911C8.61418 16.6046 10.1083 15 11.9996 15C13.8909 15 15.385 16.6046 15.2502 18.4911L14.9996 22"
                    fill="#ffffff"
                    stroke-width="1.5"
                />
            </Svg>
        </>
    );
};
export const TransactionIcon = ({ fill, stroke, height, width }: IconProps) => {
    return (
        <>
            <Svg
                width={width}
                height={height}
                viewBox="0 0 24 24"
                fill="none"
            >
                <Path
                    d="M20.016 2C18.9026 2 18 4.68629 18 8H20.016C20.9876 8 21.4734 8 21.7741 7.66455C22.0749 7.32909 22.0225 6.88733 21.9178 6.00381C21.6414 3.67143 20.8943 2 20.016 2Z"
                    stroke={stroke}
                    stroke-width="1.5"
                />
                <Path
                    d="M18 8.05426V18.6458C18 20.1575 18 20.9133 17.538 21.2108C16.7831 21.6971 15.6161 20.6774 15.0291 20.3073C14.5441 20.0014 14.3017 19.8485 14.0325 19.8397C13.7417 19.8301 13.4949 19.9768 12.9709 20.3073L11.06 21.5124C10.5445 21.8374 10.2868 22 10 22C9.71321 22 9.45546 21.8374 8.94 21.5124L7.02913 20.3073C6.54415 20.0014 6.30166 19.8485 6.03253 19.8397C5.74172 19.8301 5.49493 19.9768 4.97087 20.3073C4.38395 20.6774 3.21687 21.6971 2.46195 21.2108C2 20.9133 2 20.1575 2 18.6458V8.05426C2 5.20025 2 3.77325 2.87868 2.88663C3.75736 2 5.17157 2 8 2H20"
                    stroke={stroke}
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M6 6H14"
                    stroke="#C2C2C2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M8 10H6"
                    stroke="#C2C2C2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M12.5 10.875C11.6716 10.875 11 11.4626 11 12.1875C11 12.9124 11.6716 13.5 12.5 13.5C13.3284 13.5 14 14.0876 14 14.8125C14 15.5374 13.3284 16.125 12.5 16.125M12.5 10.875C13.1531 10.875 13.7087 11.2402 13.9146 11.75M12.5 10.875V10M12.5 16.125C11.8469 16.125 11.2913 15.7598 11.0854 15.25M12.5 16.125V17"
                    stroke={stroke}
                    stroke-width="1.5"
                    stroke-linecap="round"
                />
            </Svg>
        </>
    );
};
export const Walleticon = ({ fill, stroke, height, width }: IconProps) => {
    return (
        <>
            <Svg
                width={width}
                height={height}
                viewBox="0 0 24 24"
                fill="none"
            >
                <Path
                    d="M16 14C16 14.8284 16.6716 15.5 17.5 15.5C18.3284 15.5 19 14.8284 19 14C19 13.1716 18.3284 12.5 17.5 12.5C16.6716 12.5 16 13.1716 16 14Z"
                    stroke={stroke}
                    stroke-width="1.5"
                />
                <Path
                    d="M18.9 8C18.9656 7.67689 19 7.34247 19 7C19 4.23858 16.7614 2 14 2C11.2386 2 9 4.23858 9 7C9 7.34247 9.03443 7.67689 9.10002 8"
                    stroke={stroke}
                    stroke-width="1.5"
                />
                <Path
                    d="M7 7.99324H16C18.8284 7.99324 20.2426 7.99324 21.1213 8.87234C22 9.75145 22 11.1663 22 13.9961V15.9971C22 18.8269 22 20.2418 21.1213 21.1209C20.2426 22 18.8284 22 16 22H10C6.22876 22 4.34315 22 3.17157 20.8279C2 19.6557 2 17.7692 2 13.9961V11.9952C2 8.22211 2 6.33558 3.17157 5.16344C4.11466 4.2199 5.52043 4.03589 8 4H10"
                    stroke={stroke}
                    stroke-width="1.5"
                    stroke-linecap="round"
                />
            </Svg>
        </>
    );
};
export const Profileicon = ({ fill, stroke, height, width }: IconProps) => {
    return (
        <>
            <Svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
                <Path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke={stroke}
                    stroke-width="1.5"
                />
                <Path
                    d="M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z"
                    stroke={stroke}
                    stroke-width="1.5"
                    stroke-linecap="round"
                />
            </Svg>
        </>
    );
};
export const DeliveryBoxIcon = ({ fill, stroke, height, width }: IconProps) => {
    return (
        <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <Path
                d="M2 13.4286V8H22V13.4286C22 17.4692 22 19.4895 20.6983 20.7447C19.3965 22 17.3014 22 13.1111 22H10.8889C6.69863 22 4.6035 22 3.30175 20.7447C2 19.4895 2 17.4692 2 13.4286Z"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M2 8L2.96154 5.69231C3.70726 3.90257 4.08013 3.0077 4.8359 2.50385C5.59167 2 6.56112 2 8.5 2H15.5C17.4389 2 18.4083 2 19.1641 2.50385C19.9199 3.0077 20.2927 3.90257 21.0385 5.69231L22 8"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
            />
            <Path
                d="M12 8V2"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
            />
            <Path
                d="M10 12H14"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
            />
        </Svg>
    );
};
