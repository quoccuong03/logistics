import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
export default function FolderHeartIcon(props: SvgIconProps) {
    return (
        <SvgIcon
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            fill="none"
        >
            <path
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.3144 6.78713L4.45828 3.3555H1.3555V20.9769H22.6445V6.78713H6.3144ZM24 5.43163V22.3324H0V2H5.26619L7.1223 5.43163H24Z"
            />
            <path
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.1306 9.26166H14.5308L12.3467 11.3666L10.1588 9.26166H9.55902L7.26172 11.559V14.3467L12.3467 19.4279L17.4279 14.3467V11.559L15.1306 9.26166Z"
            />
        </SvgIcon>
    );
}
