import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
export default function LockIcon(props: SvgIconProps) {
    return (
        <SvgIcon viewBox="0 0 24 24" {...props}>
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="M7 11V6.99997C6.99876 5.76002 7.45828 4.56384 8.28938 3.64364C9.12047 2.72344 10.2638 2.14487 11.4975 2.02026C12.7312 1.89565 13.9671 2.23387 14.9655 2.96928C15.9638 3.70469 16.6533 4.78482 16.9 5.99997"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle
                xmlns="http://www.w3.org/2000/svg"
                cx="11.9999"
                cy="15.2727"
                r="1.8166"
                strokeWidth="1"
                strokeLinejoin="round"
            />
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="M12 20.1818V17.4545"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SvgIcon>
    );
}
