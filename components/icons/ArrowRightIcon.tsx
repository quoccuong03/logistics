import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
export default function ArrowRightIcon(props: SvgIconProps) {
    return (
        <SvgIcon viewBox="0 0 24 24" {...props}>
            <path
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z"
            />
            <path
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.6464 4.64645C11.8417 4.45118 12.1583 4.45118 12.3536 4.64645L19.3536 11.6464C19.5488 11.8417 19.5488 12.1583 19.3536 12.3536L12.3536 19.3536C12.1583 19.5488 11.8417 19.5488 11.6464 19.3536C11.4512 19.1583 11.4512 18.8417 11.6464 18.6464L18.2929 12L11.6464 5.35355C11.4512 5.15829 11.4512 4.84171 11.6464 4.64645Z"
            />
        </SvgIcon>
    );
}
