import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
export default function UploadIcon(props: SvgIconProps) {
    return (
        <SvgIcon viewBox="0 0 24 24" {...props}>
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="M21 10.2342V19.2202H3V10.2342"
            />
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="M11.9863 12.9503V3.27271"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="M7.14746 8.1115L11.9863 3.27271L16.825 8.1115"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SvgIcon>
    );
}
