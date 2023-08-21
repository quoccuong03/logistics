import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
function SvgCloseIcon(props: SvgIconProps) {
	return (
		<SvgIcon viewBox="0 0 130 130" {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M99.1713 30.8288C100.094 31.7518 100.094 33.2484 99.1713 34.1715L34.1713 99.1714C33.2483 100.095 31.7517 100.095 30.8286 99.1714C29.9056 98.2484 29.9056 96.7518 30.8286 95.8288L95.8286 30.8288C96.7517 29.9057 98.2483 29.9057 99.1713 30.8288Z"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M30.8286 30.8288C31.7517 29.9057 33.2483 29.9057 34.1713 30.8288L99.1713 95.8288C100.094 96.7518 100.094 98.2484 99.1713 99.1714C98.2483 100.095 96.7517 100.095 95.8286 99.1714L30.8286 34.1715C29.9056 33.2484 29.9056 31.7518 30.8286 30.8288Z"
			/>
		</SvgIcon>
	);
}

export default SvgCloseIcon;
