import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
export default function ChevronDownIcon(props: SvgIconProps) {
    return (
        <SvgIcon viewBox="0 0 24 15" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.739361 1.73936C0.883308 1.59541 1.11669 1.59541 1.26064 1.73936L12 12.4787L22.7394 1.73936C22.8833 1.59541 23.1167 1.59541 23.2606 1.73936C23.4046 1.88331 23.4046 2.11669 23.2606 2.26064L12.2606 13.2606C12.1167 13.4046 11.8833 13.4046 11.7394 13.2606L0.739361 2.26064C0.595414 2.11669 0.595414 1.88331 0.739361 1.73936Z"
            />
        </SvgIcon>
    );
}
