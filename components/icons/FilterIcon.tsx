import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
export default function FilterIcon(props: SvgIconProps) {
	return (
		<SvgIcon
			width="16"
			height="16"
			viewBox="0 0 16 16"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
			fill="none"
		>
			<path
				d="M15.5 1.25H0.5L6.5 8.345V13.25L9.5 14.75V8.345L15.5 1.25Z"
				stroke="black"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</SvgIcon>

		// <SvgIcon viewBox="0 0 16 16" fill="none" {...props}>
		// 	<path
		// 		d="M15.5 1.25H0.5L6.5 8.345V13.25L9.5 14.75V8.345L15.5 1.25Z"
		// 		stroke="black"
		// 		strokeLinecap="round"
		// 		strokeLinejoin="round"
		// 	/>
		// </SvgIcon>
	);
}
