import Typography, { TypographyProps } from "@mui/material/Typography";
type Props = TypographyProps & {
    content: any;
};
export default function TypographyHTML(props: Props) {
    return (
        <Typography
            dangerouslySetInnerHTML={{ __html: props.content }}
            {...props}
        />
    );
}
