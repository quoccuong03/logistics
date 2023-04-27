import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
export default function CollapseIcon(props: SvgIconProps) {
	return (
		<SvgIcon viewBox="0 0 14 8" {...props}>
			<path
				d="M1 1L7 7L13 1"
				stroke="black"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</SvgIcon>
	);
}
