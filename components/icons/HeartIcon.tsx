import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
export default function HeartIcon(props: SvgIconProps) {
    return (
        <SvgIcon viewBox="0 0 24 24" {...props}>
            <path
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.38517 2.67395H7.9136L12.0033 6.40148L16.086 2.67395H17.6147L22.3695 7.17849V12.7216L12.0037 22.5418L1.63037 12.7217V7.17849L6.38517 2.67395ZM6.749 3.58699L2.54341 7.57122V12.3288L12.0035 21.2843L21.4565 12.3289V7.57122L17.2509 3.58699H16.4401L12.0039 7.63735L7.55994 3.58699H6.749Z"
            />
        </SvgIcon>
    );
}
