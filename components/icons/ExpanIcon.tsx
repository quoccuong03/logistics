import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
export default function ExpanIcon(props: SvgIconProps) {
	return (
		<SvgIcon viewBox="0 0 14 8" {...props}>
			<path
				d="M13 7L7 0.999999L1 7"
				stroke="black"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</SvgIcon>
	);
}
