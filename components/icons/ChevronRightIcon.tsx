import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
export default function ChevronRightIcon(props: SvgIconProps) {
    return (
        <SvgIcon viewBox="0 0 24 24" {...props}>
            <path
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 24.7071C4.90237 24.3166 4.90237 23.6834 5.29289 23.2929L16.5858 12L5.2929 0.707106C4.90237 0.31658 4.90237 -0.316583 5.2929 -0.707109C5.68342 -1.09763 6.31658 -1.09763 6.70711 -0.707109L18.7071 11.2929C19.0976 11.6834 19.0976 12.3166 18.7071 12.7071L6.70711 24.7071C6.31658 25.0976 5.68342 25.0976 5.29289 24.7071Z"
            />
        </SvgIcon>
    );
}
